import Busboy from "busboy";
import { Resend } from "resend";

export const config = {
  api: { bodyParser: false },
};

function parseMultipart(req, { maxFiles = 3, maxTotalBytes = 10 * 1024 * 1024 } = {}) {
  return new Promise((resolve, reject) => {
    const bb = Busboy({ headers: req.headers });

    const fields = {};
    const files = [];
    let totalBytes = 0;

    bb.on("field", (name, val) => {
      fields[name] = val;
    });

    bb.on("file", (name, file, info) => {
      const { filename, mimeType } = info;
      const chunks = [];

      file.on("data", (data) => {
        totalBytes += data.length;
        if (totalBytes > maxTotalBytes) {
          file.resume();
          reject(new Error("Attachments too large."));
          return;
        }
        chunks.push(data);
      });

      file.on("end", () => {
        if (!filename) return;
        if (files.length >= maxFiles) return;

        const buffer = Buffer.concat(chunks);
        files.push({
          filename,
          content: buffer.toString("base64"),
          contentType: mimeType || "application/octet-stream",
        });
      });
    });

    bb.on("error", reject);
    bb.on("finish", () => resolve({ fields, files }));

    req.pipe(bb);
  });
}

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

    const { fields, files } = await parseMultipart(req);

    const name = fields.name || "";
    const email = fields.email || "";
    const subject = fields.subject || "";
    const message = fields.message || "";

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields." });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const to = process.env.CONTACT_TO_EMAIL="facundofagnano@gmail.com"; // el mail de la clienta
    const from = process.env.CONTACT_FROM_EMAIL= "Info Neo Translations  <onboarding@resend.dev>"; // ej: "Neo Translations <onboarding@resend.dev>" o tu dominio verificado

    if (!to || !from) {
      return res.status(500).json({ error: "Email env vars missing." });
    }

    await resend.emails.send({
      from,
      to,
      reply_to: email,
      subject: subject ? `[Neo Translations] ${subject}` : "[Neo Translations] New website enquiry",
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      attachments: files, // ✅ adjuntos reales (base64)
    });

    return res.status(200).json({ ok: true });
  } catch (e) {
    return res.status(500).json({ error: e.message || "Server error" });
  }
}

"use server";

import nodemailer from "nodemailer";

export type ContactFormData = {
  nome: string;
  azienda: string;
  email: string;
  telefono?: string;
  interessi: string[];
  messaggio?: string;
  privacy: boolean;
};

export type ActionResult = {
  success: boolean;
  message: string;
};

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtps.aruba.it",
  port: Number(process.env.SMTP_PORT) || 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function submitContact(data: ContactFormData): Promise<ActionResult> {
  const contactEmail = process.env.CONTACT_EMAIL || "contatti@fbosolution.it";

  try {
    // Email notifica all'admin
    await transporter.sendMail({
      from: `"FboSolution S.r.l." <${process.env.SMTP_USER}>`,
      to: contactEmail,
      subject: `🔔 Nuovo contatto fbosolution.it — ${data.azienda}`,
      html: `
        <h2 style="color:#1A3A5C;">Nuovo contatto da fbosolution.it</h2>
        <table style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:14px;">
          <tr><td style="padding:8px;font-weight:bold;color:#64748B;">Nome</td><td style="padding:8px;">${data.nome}</td></tr>
          <tr style="background:#F8FAFC;"><td style="padding:8px;font-weight:bold;color:#64748B;">Azienda</td><td style="padding:8px;">${data.azienda}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;color:#64748B;">Email</td><td style="padding:8px;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
          ${data.telefono ? `<tr style="background:#F8FAFC;"><td style="padding:8px;font-weight:bold;color:#64748B;">Telefono</td><td style="padding:8px;">${data.telefono}</td></tr>` : ""}
          <tr ${data.telefono ? "" : 'style="background:#F8FAFC;"'}><td style="padding:8px;font-weight:bold;color:#64748B;">Interessi</td><td style="padding:8px;">${data.interessi.join(", ")}</td></tr>
          ${data.messaggio ? `<tr style="background:#F8FAFC;"><td style="padding:8px;font-weight:bold;color:#64748B;">Messaggio</td><td style="padding:8px;">${data.messaggio}</td></tr>` : ""}
        </table>
      `,
    });

    // Email conferma al mittente
    await transporter.sendMail({
      from: `"FboSolution S.r.l." <${process.env.SMTP_USER}>`,
      to: data.email,
      subject: "Abbiamo ricevuto il tuo messaggio — FboSolution S.r.l.",
      html: `
        <div style="font-family:sans-serif;font-size:14px;color:#334155;max-width:500px;">
          <p>Ciao <strong>${data.nome.split(" ")[0]}</strong>,</p>
          <p>abbiamo ricevuto il tuo messaggio. Ti rispondo personalmente entro 24 ore lavorative.</p>
          <p style="margin-top:24px;">A presto,<br><strong style="color:#1A3A5C;">FboSolution S.r.l.</strong><br>
          <a href="mailto:contatti@fbosolution.it" style="color:#1EC8E8;">contatti@fbosolution.it</a></p>
        </div>
      `,
    });

    return { success: true, message: "Messaggio inviato con successo!" };
  } catch (error) {
    console.error("Errore invio email:", error);
    return { success: false, message: "Errore nell'invio. Riprova o scrivici direttamente a contatti@fbosolution.it" };
  }
}

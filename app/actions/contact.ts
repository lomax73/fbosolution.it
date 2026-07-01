"use server";

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

export async function submitContact(data: ContactFormData): Promise<ActionResult> {
  const apiKey = process.env.BREVO_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL || "f.lomazzi@fbosolution.it";

  if (!apiKey) {
    console.error("BREVO_API_KEY non configurata");
    return { success: false, message: "Servizio temporaneamente non disponibile." };
  }

  try {
    // Crea/aggiorna contatto in Brevo
    await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        attributes: {
          FIRSTNAME: data.nome.split(" ")[0],
          LASTNAME: data.nome.split(" ").slice(1).join(" "),
          COMPANY: data.azienda,
          AZIENDA: data.azienda,
          DIVISIONE_INTERESSE: data.interessi.join(", "),
          MESSAGGIO: data.messaggio || "",
          TELEFONO: data.telefono || "",
        },
        listIds: [],
        updateEnabled: true,
      }),
    });

    // Email notifica all'admin
    await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sender: { name: "fbosolution.it", email: contactEmail },
        to: [{ email: contactEmail }],
        subject: `🔔 Nuovo contatto fbosolution.it — ${data.azienda}`,
        htmlContent: `
          <h2>Nuovo contatto da fbosolution.it</h2>
          <p><strong>Nome:</strong> ${data.nome}</p>
          <p><strong>Azienda:</strong> ${data.azienda}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          ${data.telefono ? `<p><strong>Telefono:</strong> ${data.telefono}</p>` : ""}
          <p><strong>Interessi:</strong> ${data.interessi.join(", ")}</p>
          ${data.messaggio ? `<p><strong>Messaggio:</strong> ${data.messaggio}</p>` : ""}
        `,
      }),
    });

    // Email conferma al mittente
    await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sender: { name: "Fbosolution.it", email: contactEmail },
        to: [{ email: data.email, name: data.nome }],
        subject: "Abbiamo ricevuto il tuo messaggio — fbosolution.it",
        htmlContent: `
          <p>Ciao ${data.nome.split(" ")[0]},</p>
          <p>Abbiamo ricevuto il tuo messaggio. Ti rispondo personalmente entro 24 ore lavorative.</p>
          <p>A presto,<br>Fabrizio<br>Fbosolution.it</p>
        `,
      }),
    });

    return { success: true, message: "Messaggio inviato con successo!" };
  } catch (error) {
    console.error("Errore invio form:", error);
    return { success: false, message: "Errore nell'invio. Riprova o contattaci via email." };
  }
}

"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { submitContact } from "@/app/actions/contact";

const schema = z.object({
  nome: z.string().min(2, "Inserisci nome e cognome"),
  azienda: z.string().min(2, "Inserisci l'azienda o ente"),
  email: z.string().email("Email non valida"),
  telefono: z.string().optional(),
  interessi: z.array(z.string()).min(1, "Seleziona almeno un interesse"),
  messaggio: z.string().max(300, "Massimo 300 caratteri").optional(),
  privacy: z.literal(true, { message: "Devi accettare la privacy policy" }),
});

type FormData = z.infer<typeof schema>;

const interessiOptions = [
  "Infrastrutture di rete / WiFi",
  "Materiali edili nanotecnologici",
  "Entrambe le divisioni",
  "Informazioni generali sull'azienda",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { interessi: [] },
  });

  const messaggio = watch("messaggio") || "";

  const onSubmit = async (data: FormData) => {
    setServerError("");
    const result = await submitContact(data);
    if (result.success) {
      setSubmitted(true);
    } else {
      setServerError(result.message);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 py-12 text-center">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center"
          style={{ backgroundColor: "#00A896" }}
        >
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold" style={{ color: "#1A3A5C" }}>
          Messaggio inviato!
        </h3>
        <p style={{ color: "#64748B" }}>
          Ti rispondo personalmente entro 24 ore lavorative.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium mb-1" style={{ color: "#334155" }}>
            Nome e Cognome <span style={{ color: "#00A896" }}>*</span>
          </label>
          <input
            {...register("nome")}
            type="text"
            placeholder="Mario Rossi"
            className="w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors focus:border-[#2E5D8E]"
            style={{ borderColor: errors.nome ? "#ef4444" : "#E2E8F0" }}
          />
          {errors.nome && <p className="mt-1 text-xs text-red-500">{errors.nome.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" style={{ color: "#334155" }}>
            Azienda / Ente <span style={{ color: "#00A896" }}>*</span>
          </label>
          <input
            {...register("azienda")}
            type="text"
            placeholder="Acme S.r.l."
            className="w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors focus:border-[#2E5D8E]"
            style={{ borderColor: errors.azienda ? "#ef4444" : "#E2E8F0" }}
          />
          {errors.azienda && <p className="mt-1 text-xs text-red-500">{errors.azienda.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium mb-1" style={{ color: "#334155" }}>
            Email <span style={{ color: "#00A896" }}>*</span>
          </label>
          <input
            {...register("email")}
            type="email"
            placeholder="mario@azienda.it"
            className="w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors focus:border-[#2E5D8E]"
            style={{ borderColor: errors.email ? "#ef4444" : "#E2E8F0" }}
          />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" style={{ color: "#334155" }}>
            Telefono
          </label>
          <input
            {...register("telefono")}
            type="tel"
            placeholder="+39 333 1234567"
            className="w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors focus:border-[#2E5D8E]"
            style={{ borderColor: "#E2E8F0" }}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2" style={{ color: "#334155" }}>
          Sei interessato a <span style={{ color: "#00A896" }}>*</span>
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {interessiOptions.map((opt) => (
            <label key={opt} className="flex items-center gap-3 cursor-pointer group">
              <input
                {...register("interessi")}
                type="checkbox"
                value={opt}
                className="w-4 h-4 rounded accent-[#1A3A5C]"
              />
              <span className="text-sm" style={{ color: "#334155" }}>
                {opt}
              </span>
            </label>
          ))}
        </div>
        {errors.interessi && (
          <p className="mt-1 text-xs text-red-500">{errors.interessi.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1" style={{ color: "#334155" }}>
          Messaggio{" "}
          <span className="font-normal text-xs" style={{ color: "#64748B" }}>
            ({messaggio.length}/300)
          </span>
        </label>
        <textarea
          {...register("messaggio")}
          rows={4}
          placeholder="Raccontaci brevemente di cosa hai bisogno..."
          className="w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors focus:border-[#2E5D8E] resize-none"
          style={{ borderColor: "#E2E8F0" }}
        />
        {errors.messaggio && (
          <p className="mt-1 text-xs text-red-500">{errors.messaggio.message}</p>
        )}
      </div>

      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            {...register("privacy")}
            type="checkbox"
            className="w-4 h-4 mt-0.5 rounded accent-[#1A3A5C]"
          />
          <span className="text-sm" style={{ color: "#64748B" }}>
            Accetto la{" "}
            <a href="/privacy" className="underline" style={{ color: "#2E5D8E" }}>
              privacy policy
            </a>{" "}
            e autorizzo il trattamento dei dati personali. <span style={{ color: "#00A896" }}>*</span>
          </span>
        </label>
        {errors.privacy && (
          <p className="mt-1 text-xs text-red-500">{errors.privacy.message}</p>
        )}
      </div>

      {serverError && (
        <p className="text-sm text-red-500 text-center">{serverError}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 px-6 rounded-lg text-white font-semibold text-sm transition-colors disabled:opacity-60"
        style={{ backgroundColor: isSubmitting ? "#2E5D8E" : "#1A3A5C" }}
        onMouseEnter={(e) => !isSubmitting && ((e.target as HTMLButtonElement).style.backgroundColor = "#2E5D8E")}
        onMouseLeave={(e) => !isSubmitting && ((e.target as HTMLButtonElement).style.backgroundColor = "#1A3A5C")}
      >
        {isSubmitting ? "Invio in corso..." : "Invia richiesta"}
      </button>
    </form>
  );
}

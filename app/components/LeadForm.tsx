"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getSupabase, LeadFormData } from "@/lib/supabase";
import { FadeIn } from "./FadeIn";

const sectors = [
  "Assurance & Courtage",
  "Services financiers",
  "Conseil & Audit",
  "Industrie & Logistique",
  "Santé & Médico-social",
  "Immobilier",
  "Distribution & Commerce",
  "Collectivités & Secteur public",
  "Autre",
];

const topics = [
  "Organisation opérationnelle",
  "Suivi des renouvellements",
  "Workflows & processus",
  "Traçabilité & conformité",
  "Pilotage & indicateurs",
  "Intégration d'outils",
  "Autre",
];

type Status = "idle" | "loading" | "success" | "error";

export default function LeadForm() {
  const [form, setForm] = useState<LeadFormData>({
    first_name: "",
    last_name: "",
    email: "",
    organization: "",
    sector: "",
    role: "",
    topic: "",
    message: "",
    consent: false,
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof LeadFormData, string>>>({});

  function validate(): boolean {
    const e: Partial<Record<keyof LeadFormData, string>> = {};
    if (!form.first_name.trim()) e.first_name = "Requis";
    if (!form.last_name.trim()) e.last_name = "Requis";
    if (!form.email.trim()) e.email = "Requis";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Email invalide";
    if (!form.organization.trim()) e.organization = "Requis";
    if (!form.sector) e.sector = "Requis";
    if (!form.role.trim()) e.role = "Requis";
    if (!form.topic) e.topic = "Requis";
    if (!form.consent) e.consent = "Consentement requis";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    try {
      const supabase = getSupabase();
      const { error } = await supabase.from("leads").insert([{
        first_name: form.first_name.trim(),
        last_name: form.last_name.trim(),
        email: form.email.trim().toLowerCase(),
        organization: form.organization.trim(),
        sector: form.sector,
        role: form.role.trim(),
        topic: form.topic,
        message: form.message.trim(),
        consent: form.consent,
      }]);
      if (error) throw error;
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  function set<K extends keyof LeadFormData>(key: K, value: LeadFormData[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  return (
    <section
      id="contact"
      style={{
        background: "var(--black)",
        padding: "160px 0",
        borderTop: "1px solid var(--border)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="wrapper">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.6fr",
            gap: "80px",
            alignItems: "start",
          }}
          className="grid-2"
        >
          {/* Left: intro */}
          <FadeIn>
            <p className="tag" style={{ marginBottom: "24px" }}>
              Contact
            </p>
            <h2
              className="display"
              style={{ fontSize: "clamp(28px, 3.5vw, 48px)", marginBottom: "24px" }}
            >
              Échanger avec AGS &amp; Co.
            </h2>
            <p
              style={{
                fontFamily: "var(--f-body)",
                fontSize: "0.88rem",
                fontWeight: 300,
                color: "var(--w50)",
                lineHeight: 1.8,
              }}
            >
              Présentez brièvement votre organisation et le sujet opérationnel
              que vous souhaitez explorer. Chaque demande est traitée de manière
              confidentielle.
            </p>
          </FadeIn>

          {/* Right: form */}
          <FadeIn delay={0.15}>
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  style={{ padding: "48px 0" }}
                >
                  <div
                    style={{
                      width: "1px",
                      height: "48px",
                      background: "linear-gradient(to bottom, transparent, var(--w25))",
                      marginBottom: "32px",
                    }}
                  />
                  <h3
                    className="display"
                    style={{ fontSize: "1.8rem", marginBottom: "16px" }}
                  >
                    Demande transmise.
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--f-body)",
                      fontSize: "0.9rem",
                      fontWeight: 300,
                      color: "var(--w50)",
                      lineHeight: 1.75,
                    }}
                  >
                    AGS &amp; Co vous recontactera prochainement.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  noValidate
                  style={{ display: "flex", flexDirection: "column", gap: "0" }}
                >
                  {/* Row: name */}
                  <div
                    style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px", marginBottom: "8px" }}
                    className="grid-2"
                  >
                    <Field label="Prénom" error={errors.first_name}>
                      <input
                        className="field"
                        type="text"
                        placeholder="Votre prénom"
                        value={form.first_name}
                        onChange={(e) => set("first_name", e.target.value)}
                        autoComplete="given-name"
                      />
                    </Field>
                    <Field label="Nom" error={errors.last_name}>
                      <input
                        className="field"
                        type="text"
                        placeholder="Votre nom"
                        value={form.last_name}
                        onChange={(e) => set("last_name", e.target.value)}
                        autoComplete="family-name"
                      />
                    </Field>
                  </div>

                  {/* Row: email + org */}
                  <div
                    style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px", marginBottom: "8px" }}
                    className="grid-2"
                  >
                    <Field label="Email professionnel" error={errors.email}>
                      <input
                        className="field"
                        type="email"
                        placeholder="vous@cabinet.fr"
                        value={form.email}
                        onChange={(e) => set("email", e.target.value)}
                        autoComplete="email"
                      />
                    </Field>
                    <Field label="Organisation" error={errors.organization}>
                      <input
                        className="field"
                        type="text"
                        placeholder="Nom de votre cabinet"
                        value={form.organization}
                        onChange={(e) => set("organization", e.target.value)}
                        autoComplete="organization"
                      />
                    </Field>
                  </div>

                  {/* Row: sector + role */}
                  <div
                    style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px", marginBottom: "8px" }}
                    className="grid-2"
                  >
                    <Field label="Secteur" error={errors.sector}>
                      <select
                        className="field"
                        value={form.sector}
                        onChange={(e) => set("sector", e.target.value)}
                        style={{ cursor: "pointer" }}
                      >
                        <option value="">Sélectionner</option>
                        {sectors.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </Field>
                    <Field label="Fonction" error={errors.role}>
                      <input
                        className="field"
                        type="text"
                        placeholder="Votre fonction"
                        value={form.role}
                        onChange={(e) => set("role", e.target.value)}
                      />
                    </Field>
                  </div>

                  {/* Topic */}
                  <div style={{ marginBottom: "8px" }}>
                    <Field label="Sujet à explorer" error={errors.topic}>
                      <select
                        className="field"
                        value={form.topic}
                        onChange={(e) => set("topic", e.target.value)}
                        style={{ cursor: "pointer" }}
                      >
                        <option value="">Sélectionner un sujet</option>
                        {topics.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </Field>
                  </div>

                  {/* Message */}
                  <div style={{ marginBottom: "40px" }}>
                    <Field label="Message" error={undefined}>
                      <textarea
                        className="field"
                        placeholder="Contexte, enjeux, questions..."
                        value={form.message}
                        onChange={(e) => set("message", e.target.value)}
                        rows={4}
                        style={{ resize: "vertical", minHeight: "100px" }}
                      />
                    </Field>
                  </div>

                  {/* Consent */}
                  <div style={{ marginBottom: "40px" }}>
                    <label style={{ display: "flex", alignItems: "flex-start", gap: "14px", cursor: "pointer" }}>
                      <div style={{ position: "relative", flexShrink: 0, marginTop: "3px" }}>
                        <input
                          type="checkbox"
                          checked={form.consent}
                          onChange={(e) => set("consent", e.target.checked)}
                          style={{ position: "absolute", opacity: 0, width: 0, height: 0 }}
                        />
                        <div
                          onClick={() => set("consent", !form.consent)}
                          style={{
                            width: "16px",
                            height: "16px",
                            border: `1px solid ${errors.consent ? "#a0522d" : form.consent ? "var(--white)" : "var(--border)"}`,
                            background: form.consent ? "var(--white)" : "transparent",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            transition: "all 0.25s ease",
                          }}
                        >
                          {form.consent && (
                            <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                              <path d="M1 3.5L3 5.5L8 1" stroke="#080808" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </div>
                      </div>
                      <span style={{
                        fontFamily: "var(--f-body)",
                        fontSize: "0.78rem",
                        fontWeight: 300,
                        color: errors.consent ? "#a0522d" : "var(--w50)",
                        lineHeight: 1.65,
                      }}>
                        J&rsquo;accepte d&rsquo;être recontacté par AGS &amp; Co dans le cadre
                        de ma demande.
                      </span>
                    </label>
                  </div>

                  {/* Submit */}
                  <div style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
                    <button
                      type="submit"
                      className="btn-fill"
                      disabled={status === "loading"}
                      style={{ opacity: status === "loading" ? 0.55 : 1, cursor: status === "loading" ? "wait" : "pointer" }}
                    >
                      {status === "loading" ? "Envoi..." : "Envoyer la demande"}
                    </button>
                    {status === "error" && (
                      <p style={{ fontFamily: "var(--f-body)", fontSize: "0.78rem", color: "#a0522d", fontWeight: 300 }}>
                        Une erreur est survenue. Veuillez réessayer.
                      </p>
                    )}
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ paddingBottom: "8px" }}>
      <label
        style={{
          display: "block",
          fontFamily: "var(--f-body)",
          fontSize: "0.58rem",
          fontWeight: 500,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: error ? "#a0522d" : "var(--w25)",
          marginBottom: "6px",
          transition: "color 0.3s ease",
        }}
      >
        {label}
      </label>
      {children}
      {error && (
        <p style={{ fontFamily: "var(--f-body)", fontSize: "0.7rem", color: "#a0522d", marginTop: "4px", fontWeight: 300 }}>
          {error}
        </p>
      )}
    </div>
  );
}

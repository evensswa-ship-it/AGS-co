"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";

const steps = [
  {
    n: "01",
    title: "Comprendre",
    text: "Prendre le temps d'écouter. Le contexte, l'historique, les contraintes réelles et les objectifs de direction. Sans grille préconçue.",
  },
  {
    n: "02",
    title: "Observer",
    text: "Aller sur le terrain. Comprendre ce que les équipes vivent vraiment au quotidien, pas ce que les reportings indiquent.",
  },
  {
    n: "03",
    title: "Identifier",
    text: "Cartographier les workflows, repérer les frictions, les angles morts, les risques et les opportunités de simplification.",
  },
  {
    n: "04",
    title: "Structurer",
    text: "Proposer des scénarios concrets, des indicateurs utiles et des règles de supervision adaptées à la réalité du cabinet.",
  },
  {
    n: "05",
    title: "Accompagner",
    text: "Rester présent dans la mise en œuvre. Ajuster, valider, former. Jusqu'à ce que la maîtrise soit réellement intégrée.",
  },
];

export default function ApproachSection() {
  return (
    <section
      id="approche"
      style={{
        background: "var(--surface)",
        padding: "160px 0",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="wrapper">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "80px",
            alignItems: "start",
          }}
          className="grid-2"
        >
          {/* Left: sticky label */}
          <FadeIn>
            <p className="tag" style={{ marginBottom: "24px" }}>
              Notre approche
            </p>
            <h2
              className="display"
              style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
            >
              Cinq étapes, chacune sur le terrain.
            </h2>
          </FadeIn>

          {/* Right: Timeline */}
          <div style={{ position: "relative" }}>
            {/* Vertical line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: "absolute",
                left: "0",
                top: "8px",
                bottom: "0",
                width: "1px",
                background: "var(--border)",
                transformOrigin: "top",
              }}
            />

            {steps.map((step, i) => (
              <FadeIn key={i} delay={i * 0.1} style={{ position: "relative", paddingLeft: "40px", paddingBottom: i < steps.length - 1 ? "56px" : "0" }}>
                {/* Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    position: "absolute",
                    left: "-4px",
                    top: "8px",
                    width: "9px",
                    height: "9px",
                    borderRadius: "50%",
                    border: "1px solid var(--w50)",
                    background: "var(--surface)",
                  }}
                />

                <div style={{ display: "flex", alignItems: "baseline", gap: "12px", marginBottom: "12px" }}>
                  <span className="tag" style={{ color: "var(--w25)", fontSize: "0.55rem", flexShrink: 0 }}>
                    {step.n}
                  </span>
                  <h3
                    className="display"
                    style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)" }}
                  >
                    {step.title}
                  </h3>
                </div>

                <p
                  style={{
                    fontFamily: "var(--f-body)",
                    fontSize: "0.9rem",
                    fontWeight: 300,
                    color: "var(--w50)",
                    lineHeight: 1.8,
                    maxWidth: "480px",
                  }}
                >
                  {step.text}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

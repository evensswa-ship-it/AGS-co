"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerIn, StaggerItem } from "./FadeIn";

const problems = [
  { n: "01", text: "Le dirigeant est obligé d'être partout" },
  { n: "02", text: "Les renouvellements deviennent difficiles à suivre" },
  { n: "03", text: "Les équipes perdent du temps sur l'administratif" },
  { n: "04", text: "Les documents et signatures ralentissent les dossiers" },
  { n: "05", text: "Certaines informations sont dispersées" },
  { n: "06", text: "Tout repose sur quelques collaborateurs clés" },
  { n: "07", text: "La charge mentale augmente avec la croissance" },
];

export default function ProblemsSection() {
  return (
    <section
      id="problemes"
      style={{ background: "var(--surface)", padding: "160px 0" }}
    >
      <div className="wrapper">
        {/* Header */}
        <FadeIn style={{ marginBottom: "80px" }}>
          <p className="tag" style={{ marginBottom: "24px" }}>
            Diagnostic terrain
          </p>
          <h2
            className="display"
            style={{ fontSize: "clamp(36px, 5vw, 64px)", maxWidth: "640px" }}
          >
            Ce que nous observons<br />sur le terrain.
          </h2>
        </FadeIn>

        {/* Grid */}
        <StaggerIn
          stagger={0.07}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1px",
            background: "var(--border)",
            border: "1px solid var(--border)",
          }}
          className="grid-3"
        >
          {problems.map((p, i) => (
            <StaggerItem key={i}>
              <motion.div
                style={{
                  background: "var(--surface)",
                  padding: "44px 40px",
                  cursor: "default",
                  transition: "background 0.35s ease",
                  height: "100%",
                }}
                whileHover={{ backgroundColor: "#141414" }}
                transition={{ duration: 0.3 }}
              >
                <span
                  className="tag"
                  style={{ display: "block", marginBottom: "24px", color: "var(--w25)" }}
                >
                  {p.n}
                </span>
                <p
                  style={{
                    fontFamily: "var(--f-body)",
                    fontSize: "1rem",
                    fontWeight: 300,
                    color: "var(--white)",
                    lineHeight: 1.55,
                  }}
                >
                  {p.text}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerIn>

        {/* Bottom note */}
        <FadeIn delay={0.3} style={{ marginTop: "64px" }}>
          <p
            style={{
              fontFamily: "var(--f-body)",
              fontSize: "0.85rem",
              fontWeight: 300,
              color: "var(--w25)",
              maxWidth: "480px",
              lineHeight: 1.7,
            }}
          >
            Ces situations ne sont pas des cas isolés. Elles apparaissent
            systématiquement dans les cabinets qui ont grandi sans formaliser leur fonctionnement interne.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

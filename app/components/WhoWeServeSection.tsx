"use client";

import { FadeIn, StaggerIn, StaggerItem } from "./FadeIn";

const stats = [
  { value: "+5 000", label: "clients en portefeuille" },
  { value: "IARD", label: "spécialité principale" },
  { value: "Rentable", label: "structure établie" },
];

const criteria = [
  "Cabinet de courtage IARD",
  "Agent général multi-agences",
  "Portefeuille significatif",
  "Structure déjà rentable",
  "Croissance active",
  "Équipe en place",
];

export default function WhoWeServeSection() {
  return (
    <section
      style={{ background: "var(--black)", padding: "160px 0", borderTop: "1px solid var(--border)" }}
    >
      <div className="wrapper">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "start",
          }}
          className="grid-2"
        >
          {/* Left */}
          <div>
            <FadeIn>
              <p className="tag" style={{ marginBottom: "24px" }}>
                Qui nous accompagnons
              </p>
              <h2
                className="display"
                style={{ fontSize: "clamp(32px, 4vw, 56px)", marginBottom: "32px" }}
              >
                Nous travaillons avec des structures qui ont déjà prouvé leur valeur.
              </h2>
              <p
                style={{
                  fontFamily: "var(--f-body)",
                  fontSize: "0.95rem",
                  fontWeight: 300,
                  color: "var(--w50)",
                  lineHeight: 1.8,
                  maxWidth: "480px",
                }}
              >
                Pas des cabinets qui démarrent. Des organisations qui ont grandi,
                qui ont des équipes, des processus en place — et qui sentent que
                quelque chose doit être mieux maîtrisé pour continuer à progresser
                sereinement.
              </p>
            </FadeIn>
          </div>

          {/* Right */}
          <div>
            {/* Stats */}
            <StaggerIn
              stagger={0.1}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1px",
                background: "var(--border)",
                border: "1px solid var(--border)",
                marginBottom: "40px",
              }}
            >
              {stats.map((s, i) => (
                <StaggerItem key={i}>
                  <div
                    style={{
                      background: "var(--card)",
                      padding: "36px 28px",
                      textAlign: "center",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--f-display)",
                        fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                        fontWeight: 600,
                        color: "var(--white)",
                        marginBottom: "8px",
                        lineHeight: 1,
                      }}
                    >
                      {s.value}
                    </p>
                    <p className="tag" style={{ fontSize: "0.55rem" }}>
                      {s.label}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerIn>

            {/* Criteria */}
            <FadeIn delay={0.2}>
              <p className="tag" style={{ marginBottom: "20px" }}>
                Profil type
              </p>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {criteria.map((c, i) => (
                  <div
                    key={i}
                    style={{
                      padding: "16px 0",
                      borderBottom: "1px solid var(--border)",
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                    }}
                  >
                    <span
                      style={{
                        width: "20px",
                        height: "1px",
                        background: "var(--w25)",
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "var(--f-body)",
                        fontSize: "0.88rem",
                        fontWeight: 300,
                        color: "var(--w80)",
                      }}
                    >
                      {c}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

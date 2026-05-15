"use client";

const steps = [
  {
    number: "01",
    title: "Observer",
    text: "Comprendre le terrain, les pratiques réelles et les contraintes opérationnelles.",
  },
  {
    number: "02",
    title: "Cartographier",
    text: "Représenter les workflows, les points de passage, les responsabilités et les irritants.",
  },
  {
    number: "03",
    title: "Diagnostiquer",
    text: "Identifier les risques, les pertes, les zones floues et les opportunités.",
  },
  {
    number: "04",
    title: "Structurer",
    text: "Proposer des scénarios, indicateurs, règles de supervision et actions prioritaires.",
  },
  {
    number: "05",
    title: "Superviser",
    text: "Préparer une organisation plus lisible, pilotable et compatible avec des usages IA maîtrisés.",
  },
];

export default function MethodSection() {
  return (
    <section
      style={{
        background: "var(--bg-deep)",
        padding: "120px 40px",
        borderTop: "1px solid var(--border-subtle)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "80px", maxWidth: "600px" }}>
          <div
            style={{
              fontSize: "0.6rem",
              letterSpacing: "0.28em",
              color: "var(--gold)",
              textTransform: "uppercase",
              marginBottom: "24px",
            }}
          >
            Méthode
          </div>
          <h2
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              fontWeight: 400,
              color: "var(--white-off)",
              lineHeight: 1.2,
            }}
          >
            Une méthode sobre, structurée, orientée décision.
          </h2>
        </div>

        {/* Steps — horizontal on desktop */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "1px",
            background: "var(--border-subtle)",
            border: "1px solid var(--border-subtle)",
          }}
        >
          {steps.map((step, i) => (
            <div
              key={i}
              style={{
                background: "var(--bg-deep)",
                padding: "40px 28px",
                transition: "background 0.4s ease",
                position: "relative",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLDivElement).style.background =
                  "var(--bg-card)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLDivElement).style.background =
                  "var(--bg-deep)")
              }
            >
              {/* Top gold line */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "28px",
                  right: "28px",
                  height: "1px",
                  background:
                    i === 0 ? "var(--gold)" : "transparent",
                  transition: "background 0.4s ease",
                }}
              />
              <div
                style={{
                  fontSize: "1.8rem",
                  fontFamily: "'Georgia', serif",
                  color: "rgba(184, 150, 110, 0.15)",
                  lineHeight: 1,
                  marginBottom: "20px",
                }}
              >
                {step.number}
              </div>
              <h3
                style={{
                  fontFamily: "'Georgia', serif",
                  fontSize: "1rem",
                  fontWeight: 400,
                  color: "var(--white-off)",
                  marginBottom: "12px",
                  letterSpacing: "0.04em",
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontSize: "0.825rem",
                  color: "var(--white-soft)",
                  lineHeight: 1.75,
                }}
              >
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

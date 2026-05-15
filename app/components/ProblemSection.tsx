"use client";

const problems = [
  {
    label: "Temps perdu",
    text: "Des équipes absorbées par des tâches répétitives, des allers-retours et des ressaisies.",
  },
  {
    label: "Visibilité limitée",
    text: "Des dirigeants qui pilotent parfois à l'instinct, sans vision consolidée des points de blocage.",
  },
  {
    label: "Risque opérationnel",
    text: "Des décisions, validations ou conseils difficiles à reconstituer en cas de litige, contrôle ou incident.",
  },
  {
    label: "Données inexploitées",
    text: "Des informations disponibles mais rarement transformées en indicateurs utiles.",
  },
  {
    label: "IA mal cadrée",
    text: "Des usages IA prometteurs, mais souvent sans gouvernance, supervision ni workflow clair.",
  },
];

export default function ProblemSection() {
  return (
    <section
      style={{
        background: "var(--bg-surface)",
        padding: "120px 40px",
        borderTop: "1px solid var(--border-subtle)",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ marginBottom: "80px", maxWidth: "720px" }}>
          <div
            style={{
              fontSize: "0.6rem",
              letterSpacing: "0.28em",
              color: "var(--gold)",
              textTransform: "uppercase",
              marginBottom: "24px",
            }}
          >
            Constat
          </div>
          <h2
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontWeight: 400,
              color: "var(--white-off)",
              lineHeight: 1.2,
              marginBottom: "24px",
            }}
          >
            Le problème n&apos;est pas toujours l&apos;outil.
            <br />
            <span style={{ color: "var(--gold-light)" }}>
              C&apos;est souvent le manque de maîtrise.
            </span>
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--white-soft)",
              lineHeight: 1.8,
              maxWidth: "640px",
            }}
          >
            Dans beaucoup d&apos;organisations, les opérations critiques reposent
            sur des pratiques dispersées, des fichiers isolés, des relances
            manuelles, des décisions peu tracées et des workflows mal supervisés.
          </p>
        </div>

        {/* Problem grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1px",
            background: "var(--border-subtle)",
            border: "1px solid var(--border-subtle)",
          }}
        >
          {problems.map((item, i) => (
            <div
              key={i}
              style={{
                background: "var(--bg-surface)",
                padding: "40px 36px",
                transition: "background 0.4s ease",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLDivElement).style.background =
                  "var(--bg-card)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLDivElement).style.background =
                  "var(--bg-surface)")
              }
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "16px",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: "20px",
                    height: "1px",
                    background: "var(--gold)",
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: "0.7rem",
                    letterSpacing: "0.18em",
                    color: "var(--gold)",
                    textTransform: "uppercase",
                    fontFamily: "'Georgia', serif",
                  }}
                >
                  {item.label}
                </span>
              </div>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "var(--white-soft)",
                  lineHeight: 1.75,
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

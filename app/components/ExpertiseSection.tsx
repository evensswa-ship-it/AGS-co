"use client";

const expertises = [
  {
    title: "Workflows métier",
    text: "Analyse des processus, suppression des frictions, structuration des étapes critiques, clarification des rôles.",
  },
  {
    title: "Gouvernance & conformité",
    text: "Formalisation des règles, supervision des pratiques, traçabilité des décisions et préparation aux exigences de contrôle.",
  },
  {
    title: "Pilotage opérationnel",
    text: "Tableaux de bord, indicateurs, alertes, priorisation des actions et visibilité dirigeant.",
  },
  {
    title: "IA appliquée",
    text: "Cas d'usage réalistes, assistance métier, synthèse, pré-analyse, aide à la décision et supervision humaine.",
  },
];

export default function ExpertiseSection() {
  return (
    <section
      id="expertises"
      style={{
        background: "var(--bg-surface)",
        padding: "120px 40px",
        borderTop: "1px solid var(--border-subtle)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "72px", textAlign: "center" }}>
          <div
            style={{
              fontSize: "0.6rem",
              letterSpacing: "0.28em",
              color: "var(--gold)",
              textTransform: "uppercase",
              marginBottom: "24px",
            }}
          >
            Expertises
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
            Nos terrains d&apos;intervention.
          </h2>
          <div
            style={{
              width: "32px",
              height: "1px",
              background: "var(--gold)",
              margin: "24px auto 0",
            }}
          />
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "24px",
          }}
        >
          {expertises.map((item, i) => (
            <div
              key={i}
              className="card-premium"
              style={{ position: "relative" }}
            >
              {/* Top accent */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "36px",
                  width: "24px",
                  height: "2px",
                  background: "var(--gold)",
                }}
              />
              <h3
                style={{
                  fontFamily: "'Georgia', serif",
                  fontSize: "1.05rem",
                  fontWeight: 400,
                  color: "var(--white-off)",
                  marginBottom: "16px",
                  letterSpacing: "0.02em",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "var(--white-soft)",
                  lineHeight: 1.8,
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

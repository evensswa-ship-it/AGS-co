"use client";

import { FadeIn } from "./FadeIn";

const profiles = [
  {
    title: "Courtier",
    description: "Intermédiaire indépendant, mandaté par ses clients.",
    points: [
      "Travaille avec plusieurs compagnies",
      "Conseille et compare les offres",
      "Liberté de choix pour son client",
      "Responsabilité de conseil forte",
    ],
  },
  {
    title: "Agent général",
    description: "Mandataire d'une compagnie, entrepreneur indépendant.",
    points: [
      "Représente une seule compagnie",
      "Développe son portefeuille local",
      "Gère son agence comme une entreprise",
      "Lié par contrat d'agence",
    ],
  },
];

export default function CourtierVsAgentSection() {
  return (
    <section
      style={{
        background: "var(--black)",
        padding: "160px 0",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="wrapper">
        <FadeIn style={{ marginBottom: "72px" }}>
          <p className="tag" style={{ marginBottom: "24px" }}>
            Deux modèles, une même exigence
          </p>
          <h2
            className="display"
            style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
          >
            Courtier ou Agent général —<br />
            <span style={{ color: "var(--w50)" }}>deux réalités distinctes.</span>
          </h2>
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1px 1fr",
            gap: "0",
            alignItems: "stretch",
          }}
          className="grid-2"
        >
          {profiles.map((profile, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div
                style={{
                  padding: i === 0 ? "56px 56px 56px 0" : "56px 0 56px 56px",
                  borderTop: "1px solid var(--border)",
                }}
              >
                <h3
                  className="display"
                  style={{
                    fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                    marginBottom: "12px",
                  }}
                >
                  {profile.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--f-body)",
                    fontSize: "0.85rem",
                    fontWeight: 300,
                    color: "var(--w50)",
                    marginBottom: "40px",
                    lineHeight: 1.6,
                  }}
                >
                  {profile.description}
                </p>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {profile.points.map((point, j) => (
                    <li
                      key={j}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "14px",
                        padding: "14px 0",
                        borderBottom: "1px solid var(--border)",
                      }}
                    >
                      <span
                        style={{
                          width: "16px",
                          height: "1px",
                          background: "var(--w25)",
                          flexShrink: 0,
                          marginTop: "9px",
                        }}
                      />
                      <span
                        style={{
                          fontFamily: "var(--f-body)",
                          fontSize: "0.88rem",
                          fontWeight: 300,
                          color: "var(--w80)",
                          lineHeight: 1.5,
                        }}
                      >
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}

          {/* Vertical divider — hidden on mobile */}
          <div
            style={{
              background: "var(--border)",
              width: "1px",
              alignSelf: "stretch",
            }}
            className="hidden-mobile"
          />
        </div>

        {/* Common note */}
        <FadeIn delay={0.3}>
          <div
            style={{
              marginTop: "64px",
              padding: "32px 40px",
              border: "1px solid var(--border)",
              background: "var(--card)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--f-body)",
                fontSize: "0.88rem",
                fontWeight: 300,
                color: "var(--w50)",
                lineHeight: 1.8,
                maxWidth: "640px",
              }}
            >
              Dans les deux cas, la maîtrise opérationnelle conditionne la
              qualité du service, la conformité réglementaire et la capacité à
              scaler. C&rsquo;est là qu&rsquo;AGS &amp; Co intervient.
            </p>
          </div>
        </FadeIn>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
        }
      `}</style>
    </section>
  );
}

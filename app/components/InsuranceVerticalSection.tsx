"use client";

const subdomains = [
  "Devoir de conseil",
  "Renouvellements portefeuille",
  "Traçabilité des échanges",
  "Supervision des workflows",
  "Priorisation commerciale",
  "Risques opérationnels",
  "Préparation à l'IA métier",
];

export default function InsuranceVerticalSection() {
  return (
    <section
      style={{
        background: "var(--bg-deep)",
        padding: "120px 40px",
        borderTop: "1px solid var(--border-subtle)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "start",
          }}
        >
          {/* Left: Content */}
          <div>
            <div
              style={{
                fontSize: "0.6rem",
                letterSpacing: "0.28em",
                color: "var(--gold)",
                textTransform: "uppercase",
                marginBottom: "24px",
              }}
            >
              Verticale assurance
            </div>
            <h2
              style={{
                fontFamily: "'Georgia', serif",
                fontSize: "clamp(1.6rem, 3vw, 2.3rem)",
                fontWeight: 400,
                color: "var(--white-off)",
                lineHeight: 1.2,
                marginBottom: "28px",
              }}
            >
              Une expertise forte dans la distribution d&apos;assurance.
            </h2>
            <p
              style={{
                fontSize: "0.95rem",
                color: "var(--white-soft)",
                lineHeight: 1.85,
                marginBottom: "40px",
              }}
            >
              AGS &amp; Co accompagne les cabinets de courtage, agents généraux et
              structures de distribution sur les sujets où la performance
              opérationnelle rencontre la responsabilité professionnelle.
            </p>
            <div
              style={{
                padding: "24px 28px",
                border: "1px solid var(--border-gold)",
                background: "rgba(184, 150, 110, 0.03)",
              }}
            >
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "var(--white-soft)",
                  lineHeight: 1.8,
                  fontStyle: "italic",
                }}
              >
                Notre approche reste volontairement terrain : pas d&apos;automatisation
                magique, pas de discours hors-sol, mais des workflows lisibles,
                supervisables et compatibles avec la réalité des cabinets.
              </p>
            </div>
          </div>

          {/* Right: Sub-domains */}
          <div>
            <div
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                color: "var(--text-muted)",
                textTransform: "uppercase",
                marginBottom: "32px",
              }}
            >
              Domaines couverts
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {subdomains.map((domain, i) => (
                <div
                  key={i}
                  style={{
                    padding: "18px 0",
                    borderBottom: "1px solid var(--border-subtle)",
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    transition: "padding-left 0.3s ease",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.paddingLeft = "8px";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.paddingLeft = "0";
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      width: "16px",
                      height: "1px",
                      background: "var(--gold)",
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--white-soft)",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {domain}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

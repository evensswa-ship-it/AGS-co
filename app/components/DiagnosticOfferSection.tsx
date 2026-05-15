const diagnosticItems = [
  "Cartographier un workflow critique",
  "Identifier les pertes de temps",
  "Repérer les risques opérationnels",
  "Évaluer la qualité de la traçabilité",
  "Révéler les indicateurs manquants",
  "Prioriser les actions à fort impact",
];

const formatItems = [
  "Échange de cadrage",
  "Analyse du fonctionnement actuel",
  "Restitution synthétique",
  "Recommandations concrètes",
  "Plan d'action priorisé",
];

export default function DiagnosticOfferSection() {
  return (
    <section
      id="diagnostic"
      style={{
        background: "var(--bg-surface)",
        padding: "120px 40px",
        borderTop: "1px solid var(--border-subtle)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <div
            style={{
              fontSize: "0.6rem",
              letterSpacing: "0.28em",
              color: "var(--gold)",
              textTransform: "uppercase",
              marginBottom: "24px",
            }}
          >
            Offre d&apos;entrée
          </div>
          <h2
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
              color: "var(--white-off)",
              lineHeight: 1.15,
              marginBottom: "20px",
            }}
          >
            Diagnostic confidentiel.
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--white-soft)",
              lineHeight: 1.75,
              maxWidth: "560px",
              margin: "0 auto",
            }}
          >
            Un format court pour identifier les angles morts opérationnels avant
            d&apos;engager une transformation plus large.
          </p>
          <div
            style={{
              width: "32px",
              height: "1px",
              background: "var(--gold)",
              margin: "32px auto 0",
            }}
          />
        </div>

        {/* Two-column content */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2px",
            background: "var(--border-subtle)",
            marginBottom: "60px",
          }}
        >
          {/* Left: What it does */}
          <div
            style={{
              background: "var(--bg-card)",
              padding: "48px 44px",
            }}
          >
            <div
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.22em",
                color: "var(--gold)",
                textTransform: "uppercase",
                marginBottom: "28px",
              }}
            >
              Le diagnostic permet de
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {diagnosticItems.map((item, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "14px",
                    padding: "12px 0",
                    borderBottom:
                      i < diagnosticItems.length - 1
                        ? "1px solid var(--border-subtle)"
                        : "none",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      width: "16px",
                      height: "1px",
                      background: "var(--gold)",
                      flexShrink: 0,
                      marginTop: "10px",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--white-soft)",
                      lineHeight: 1.6,
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Format */}
          <div
            style={{
              background: "var(--bg-card)",
              padding: "48px 44px",
            }}
          >
            <div
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.22em",
                color: "var(--gold)",
                textTransform: "uppercase",
                marginBottom: "28px",
              }}
            >
              Format
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {formatItems.map((item, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "14px",
                    padding: "12px 0",
                    borderBottom:
                      i < formatItems.length - 1
                        ? "1px solid var(--border-subtle)"
                        : "none",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.65rem",
                      color: "var(--gold-muted)",
                      fontFamily: "'Georgia', serif",
                      flexShrink: 0,
                      paddingTop: "2px",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--white-soft)",
                      lineHeight: 1.6,
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <a href="#contact" className="btn-primary">
            Demander un diagnostic confidentiel
          </a>
        </div>
      </div>
    </section>
  );
}

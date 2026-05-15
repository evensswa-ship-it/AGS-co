const pillars = [
  {
    number: "01",
    title: "Diagnostic opérationnel",
    text: "Cartographier les workflows, identifier les frictions, révéler les pertes de temps, les risques et les angles morts.",
  },
  {
    number: "02",
    title: "Gouvernance terrain",
    text: "Clarifier les responsabilités, les points de contrôle, les preuves attendues et les indicateurs de supervision.",
  },
  {
    number: "03",
    title: "Intelligence supervisée",
    text: "Intégrer l'IA uniquement lorsqu'elle renforce la décision, la traçabilité, la préparation ou le pilotage.",
  },
];

export default function PositioningSection() {
  return (
    <section
      id="approche"
      style={{
        background: "var(--bg-deep)",
        padding: "120px 40px",
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
          {/* Left: Text */}
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
              Positionnement
            </div>
            <h2
              style={{
                fontFamily: "'Georgia', serif",
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                fontWeight: 400,
                color: "var(--white-off)",
                lineHeight: 1.2,
                marginBottom: "32px",
              }}
            >
              AGS &amp; Co conçoit des systèmes de maîtrise opérationnelle.
            </h2>
            <p
              style={{
                fontSize: "0.95rem",
                color: "var(--white-soft)",
                lineHeight: 1.85,
                marginBottom: "32px",
              }}
            >
              Nous intervenons là où les processus métier, les obligations, les
              données et les décisions humaines se croisent. Notre rôle : rendre
              les opérations lisibles, pilotables et améliorables.
            </p>
            <div
              style={{
                padding: "24px 28px",
                borderLeft: "2px solid var(--gold)",
                background: "rgba(184, 150, 110, 0.04)",
              }}
            >
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "var(--gold-light)",
                  lineHeight: 1.7,
                  fontStyle: "italic",
                  fontFamily: "'Georgia', serif",
                }}
              >
                &ldquo;Nous ne remplaçons pas l&apos;humain. Nous structurons les
                conditions pour qu&apos;il décide mieux, plus vite et avec plus de
                visibilité.&rdquo;
              </p>
            </div>
          </div>

          {/* Right: Pillars */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {pillars.map((pillar, i) => (
              <div
                key={i}
                style={{
                  padding: "36px 0",
                  borderBottom:
                    i < pillars.length - 1
                      ? "1px solid var(--border-subtle)"
                      : "none",
                  display: "flex",
                  gap: "24px",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    fontSize: "0.65rem",
                    letterSpacing: "0.1em",
                    color: "var(--gold-muted)",
                    fontFamily: "'Georgia', serif",
                    flexShrink: 0,
                    paddingTop: "4px",
                  }}
                >
                  {pillar.number}
                </span>
                <div>
                  <h3
                    style={{
                      fontFamily: "'Georgia', serif",
                      fontSize: "1rem",
                      fontWeight: 400,
                      color: "var(--white-off)",
                      marginBottom: "10px",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {pillar.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--white-soft)",
                      lineHeight: 1.75,
                    }}
                  >
                    {pillar.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

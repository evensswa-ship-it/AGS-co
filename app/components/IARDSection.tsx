"use client";

import { FadeIn, StaggerIn, StaggerItem } from "./FadeIn";

const products = [
  "Habitation",
  "Automobile",
  "Multirisque professionnelle",
  "RC Professionnelle",
  "Flotte automobile",
  "Immeuble",
  "Protection juridique",
  "Santé collective",
  "Cyber",
];

export default function IARDSection() {
  return (
    <section
      id="iard"
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
            gridTemplateColumns: "1fr 1.4fr",
            gap: "80px",
            alignItems: "start",
          }}
          className="grid-2"
        >
          {/* Left: Explanation */}
          <FadeIn>
            <p className="tag" style={{ marginBottom: "24px" }}>
              L&rsquo;univers IARD
            </p>
            <h2
              className="display"
              style={{ fontSize: "clamp(32px, 4vw, 52px)", marginBottom: "32px" }}
            >
              Vous évoluez dans un secteur exigeant.
            </h2>

            <div
              style={{
                padding: "28px 32px",
                borderLeft: "2px solid var(--w25)",
                marginBottom: "32px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--f-display)",
                  fontSize: "1.2rem",
                  fontWeight: 400,
                  color: "var(--w80)",
                  lineHeight: 1.5,
                  fontStyle: "italic",
                }}
              >
                IARD — Incendie, Accidents et Risques Divers.
              </p>
            </div>

            <p
              style={{
                fontFamily: "var(--f-body)",
                fontSize: "0.92rem",
                fontWeight: 300,
                color: "var(--w50)",
                lineHeight: 1.8,
              }}
            >
              Ce périmètre couvre l&rsquo;essentiel des risques de la vie courante et
              professionnelle. Il implique une relation client soutenue, un devoir
              de conseil documenté et des portefeuilles complexes à piloter.
            </p>
          </FadeIn>

          {/* Right: Products */}
          <div>
            <FadeIn delay={0.1}>
              <p className="tag" style={{ marginBottom: "28px" }}>
                Produits couverts
              </p>
            </FadeIn>
            <StaggerIn
              stagger={0.07}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1px",
                background: "var(--border)",
                border: "1px solid var(--border)",
              }}
            >
              {products.map((product, i) => (
                <StaggerItem key={i}>
                  <div
                    style={{
                      background: "var(--surface)",
                      padding: "28px 24px",
                      borderBottom: "none",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--f-body)",
                        fontSize: "0.82rem",
                        fontWeight: 400,
                        color: "var(--w80)",
                        letterSpacing: "0.03em",
                      }}
                    >
                      {product}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerIn>
          </div>
        </div>
      </div>
    </section>
  );
}

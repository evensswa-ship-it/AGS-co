"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";

export default function CTAFinalSection() {
  return (
    <section
      style={{
        background: "var(--surface)",
        padding: "160px 0",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="wrapper">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            maxWidth: "780px",
          }}
        >
          <FadeIn>
            <p className="tag" style={{ marginBottom: "32px" }}>
              Première conversation
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2
              className="display"
              style={{
                fontSize: "clamp(2rem, 5.5vw, 5rem)",
                marginBottom: "40px",
                lineHeight: 1.05,
              }}
            >
              Prenons un café et échangeons sur vos enjeux opérationnels.
            </h2>
          </FadeIn>

          <FadeIn delay={0.2} style={{ marginBottom: "56px" }}>
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
              Pas de présentation commerciale. Pas de pitch. Une conversation
              directe sur ce que vous observez dans votre organisation.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <motion.a
              href="#contact"
              className="btn-fill"
              whileHover={{ opacity: 0.82 }}
              style={{ fontSize: "0.75rem" }}
            >
              Planifier un échange
            </motion.a>
          </FadeIn>
        </div>

        {/* Large decorative number */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            right: "80px",
            bottom: "-40px",
            fontFamily: "var(--f-display)",
            fontSize: "clamp(120px, 18vw, 280px)",
            fontWeight: 700,
            color: "rgba(245,243,239,0.025)",
            lineHeight: 1,
            pointerEvents: "none",
            userSelect: "none",
            letterSpacing: "-0.04em",
          }}
        >
          AGS
        </div>
      </div>
    </section>
  );
}

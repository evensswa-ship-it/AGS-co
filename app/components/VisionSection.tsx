"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function VisionSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        background: "var(--black)",
        padding: "140px 0",
        overflow: "hidden",
        borderTop: "1px solid var(--border)",
      }}
    >
      {/* Background ambient */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(245,243,239,0.02) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <motion.div
        style={{ y, opacity }}
        className="wrapper"
      >
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <div
            style={{
              width: "1px",
              height: "60px",
              background:
                "linear-gradient(to bottom, transparent, var(--w25))",
              margin: "0 auto 56px",
            }}
          />

          <p className="tag" style={{ marginBottom: "40px" }}>
            Notre vision
          </p>

          <blockquote
            className="display"
            style={{
              fontSize: "clamp(1.6rem, 4vw, 3.2rem)",
              fontWeight: 400,
              lineHeight: 1.25,
              color: "var(--white)",
              marginBottom: "48px",
            }}
          >
            &ldquo;La valeur d&rsquo;un outil, c&rsquo;est ce que les équipes
            peuvent en faire concrètement — pas ce qu&rsquo;il promet sur le papier.&rdquo;
          </blockquote>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
            }}
          >
            <div
              style={{ width: "32px", height: "1px", background: "var(--w25)" }}
            />
            <span
              className="tag"
              style={{ color: "var(--w25)", fontSize: "0.55rem" }}
            >
              AGS &amp; Co — 2026
            </span>
            <div
              style={{ width: "32px", height: "1px", background: "var(--w25)" }}
            />
          </div>

          <div
            style={{
              width: "1px",
              height: "60px",
              background:
                "linear-gradient(to bottom, var(--w25), transparent)",
              margin: "56px auto 0",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}

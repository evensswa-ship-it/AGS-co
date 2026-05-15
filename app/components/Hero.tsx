"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.25 } },
};

const lineVariants: Variants = {
  hidden: { opacity: 0, y: 44 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.1, ease: EASE } },
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "var(--black)",
        overflow: "hidden",
      }}
    >
      {/* Subtle grid lines */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(245,243,239,0.018) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245,243,239,0.018) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
          zIndex: 0,
        }}
      />

      {/* Radial light */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "60vw",
          height: "60vw",
          background: "radial-gradient(ellipse, rgba(245,243,239,0.025) 0%, transparent 65%)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Content with parallax */}
      <motion.div
        style={{
          y: contentY,
          opacity: contentOpacity,
          position: "relative",
          zIndex: 2,
          width: "100%",
          paddingTop: "72px",
        }}
      >
        <div className="wrapper" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Label */}
            <motion.p
              variants={lineVariants}
              className="tag"
              style={{ marginBottom: "48px" }}
            >
              Courtiers et agents généraux &nbsp;·&nbsp; Assurance IARD
            </motion.p>

            {/* Headline */}
            <h1
              style={{
                fontFamily: "var(--f-display)",
                fontSize: "clamp(48px, 7.5vw, 108px)",
                fontWeight: 600,
                lineHeight: 1.04,
                letterSpacing: "-0.02em",
                color: "var(--white)",
                maxWidth: "960px",
                marginBottom: "48px",
              }}
            >
              {["Réduire le chaos", "opérationnel invisible", "des cabinets d'assurance."].map(
                (line, i) => (
                  <motion.span
                    key={i}
                    variants={lineVariants}
                    style={{ display: "block" }}
                  >
                    {i === 1 ? (
                      <span style={{ color: "var(--w50)" }}>{line}</span>
                    ) : (
                      line
                    )}
                  </motion.span>
                )
              )}
            </h1>

            {/* Subtitle */}
            <motion.p
              variants={lineVariants}
              style={{
                fontFamily: "var(--f-body)",
                fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
                fontWeight: 300,
                color: "var(--w50)",
                lineHeight: 1.75,
                maxWidth: "520px",
                marginBottom: "56px",
              }}
            >
              AGS &amp; Co accompagne les courtiers et agents généraux IARD dans
              la structuration et le pilotage de leurs opérations.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={lineVariants}
              style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}
            >
              <a href="#contact" className="btn-fill">
                Échanger autour de votre organisation
              </a>
              <a href="#approche" className="btn-ghost">
                Découvrir notre approche
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        style={{
          position: "absolute",
          bottom: "40px",
          left: "80px",
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <motion.div
          animate={{ scaleX: [0, 1] }}
          transition={{ duration: 1.2, delay: 2.5, ease: EASE }}
          style={{
            width: "48px",
            height: "1px",
            background: "var(--w25)",
            transformOrigin: "left",
          }}
        />
        <span className="tag" style={{ fontSize: "0.55rem" }}>
          2026
        </span>
      </motion.div>
    </section>
  );
}

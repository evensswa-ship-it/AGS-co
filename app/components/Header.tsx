"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const LOGO_SRC = "/agslogo.png";

const navLinks = [
  { label: "Terrain", href: "#problemes" },
  { label: "Approche", href: "#approche" },
  { label: "IARD", href: "#iard" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 100,
          height: "72px",
          display: "flex",
          alignItems: "center",
          transition: "background 0.5s ease, border-color 0.5s ease",
          background: scrolled ? "rgba(8,8,8,0.92)" : "transparent",
          borderBottom: scrolled ? "1px solid rgba(245,243,239,0.07)" : "1px solid transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
        }}
      >
        <div
          className="wrapper"
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <a
            href="#"
            style={{ textDecoration: "none" }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            {!logoError ? (
              <Image
                src={LOGO_SRC}
                alt="AGS & Co"
                width={120}
                height={36}
                style={{ display: "block" }}
                onError={() => setLogoError(true)}
              />
            ) : (
              <span
                style={{
                  fontFamily: "var(--f-display)",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  color: "var(--white)",
                }}
              >
                AGS <span style={{ color: "var(--w50)" }}>&amp;</span> Co
              </span>
            )}
          </a>

          {/* Desktop nav */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "40px",
            }}
            className="hidden-mobile"
          >
            {navLinks.slice(0, 3).map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "var(--f-body)",
                  fontSize: "0.68rem",
                  fontWeight: 400,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--w50)",
                  textDecoration: "none",
                  transition: "color 0.25s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--white)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--w50)")}
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="btn-fill" style={{ padding: "10px 24px", fontSize: "0.65rem" }}>
              Prendre contact
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              display: "none",
            }}
            className="show-mobile"
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
              <span style={{
                display: "block", width: "22px", height: "1px",
                background: "var(--white)",
                transition: "transform 0.3s ease, opacity 0.3s ease",
                transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none",
              }} />
              <span style={{
                display: "block", width: "22px", height: "1px",
                background: "var(--white)",
                transition: "opacity 0.3s ease",
                opacity: menuOpen ? 0 : 1,
              }} />
              <span style={{
                display: "block", width: "22px", height: "1px",
                background: "var(--white)",
                transition: "transform 0.3s ease, opacity 0.3s ease",
                transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none",
              }} />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "fixed",
              inset: 0,
              background: "var(--black)",
              zIndex: 99,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              padding: "0 40px",
              gap: "40px",
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontFamily: "var(--f-display)",
                  fontSize: "clamp(2rem, 8vw, 3.5rem)",
                  fontWeight: 600,
                  color: "var(--white)",
                  textDecoration: "none",
                  letterSpacing: "-0.01em",
                }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </>
  );
}

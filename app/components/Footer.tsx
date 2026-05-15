"use client";

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--black)",
        borderTop: "1px solid var(--border)",
        padding: "64px 0 48px",
      }}
    >
      <div className="wrapper">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "40px",
            marginBottom: "48px",
            paddingBottom: "48px",
            borderBottom: "1px solid var(--border)",
          }}
        >
          {/* Brand */}
          <div>
            <p
              style={{
                fontFamily: "var(--f-display)",
                fontSize: "1.3rem",
                fontWeight: 600,
                letterSpacing: "0.06em",
                color: "var(--white)",
                marginBottom: "8px",
              }}
            >
              AGS &amp; Co
            </p>
            <p
              className="tag"
              style={{ lineHeight: 1.8 }}
            >
              Diagnostic opérationnel · Gouvernance terrain · Assurance IARD
            </p>
          </div>

          {/* Nav */}
          <nav style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
            {[
              { label: "Terrain", href: "#problemes" },
              { label: "Approche", href: "#approche" },
              { label: "IARD", href: "#iard" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "var(--f-body)",
                  fontSize: "0.7rem",
                  fontWeight: 300,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--w25)",
                  textDecoration: "none",
                  transition: "color 0.25s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--w80)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--w25)")}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--f-body)",
              fontSize: "0.72rem",
              fontWeight: 300,
              color: "var(--w25)",
              letterSpacing: "0.04em",
            }}
          >
            &copy; 2026 AGS &amp; Co. Tous droits réservés.
          </span>

          <div style={{ display: "flex", gap: "32px" }}>
            {["Confidentialité", "Mentions légales"].map((label) => (
              <a
                key={label}
                href="#"
                style={{
                  fontFamily: "var(--f-body)",
                  fontSize: "0.68rem",
                  fontWeight: 300,
                  color: "var(--w25)",
                  textDecoration: "none",
                  letterSpacing: "0.06em",
                  transition: "color 0.25s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--w50)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--w25)")}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

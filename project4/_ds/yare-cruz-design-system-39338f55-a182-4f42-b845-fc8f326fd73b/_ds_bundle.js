/* @ds-bundle: {"format":3,"namespace":"YareCruzDesignSystem_39338f","components":[{"name":"GithubIcon","sourcePath":"assets/SocialIcons.tsx"},{"name":"LinkedinIcon","sourcePath":"assets/SocialIcons.tsx"},{"name":"XTwitterIcon","sourcePath":"assets/SocialIcons.tsx"}],"sourceHashes":{"assets/SocialIcons.tsx":"d00675b8751d","ui_kits/portfolio/About.jsx":"c067cf1b6eb1","ui_kits/portfolio/Atoms.jsx":"4014b7a22a00","ui_kits/portfolio/Contact.jsx":"154378003208","ui_kits/portfolio/Footer.jsx":"49b3e4379fd0","ui_kits/portfolio/Hero.jsx":"de83456ddda9","ui_kits/portfolio/Icons.jsx":"982d3d9a1128","ui_kits/portfolio/Navbar.jsx":"21d08c1d65a9","ui_kits/portfolio/Projects.jsx":"da928be83943","ui_kits/portfolio/Services.jsx":"dcccfc5f9d3d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.YareCruzDesignSystem_39338f = window.YareCruzDesignSystem_39338f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// assets/SocialIcons.tsx
try { (() => {
function GithubIcon({
  size = 18,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    className: className
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
  }));
}
function LinkedinIcon({
  size = 18,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    className: className
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
  }));
}
function XTwitterIcon({
  size = 18,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    className: className
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
  }));
}
Object.assign(__ds_scope, { GithubIcon, LinkedinIcon, XTwitterIcon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "assets/SocialIcons.tsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/About.jsx
try { (() => {
// About section: bio + journey timeline + stats
function About() {
  const journey = [{
    year: "2022",
    milestone: "First line of HTML/CSS"
  }, {
    year: "2023",
    milestone: "First projects with JS + React"
  }, {
    year: "2024",
    milestone: "Full stack with Node.js and databases"
  }, {
    year: "2025",
    milestone: "Freelance & client projects"
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "about",
    style: {
      padding: "110px 0",
      background: "var(--yc-bg-card)",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: 1,
      background: "linear-gradient(90deg, transparent, rgba(45,62,110,0.4), transparent)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "yc-container"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "01. About me",
    title: "A dev with a story"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 64,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.85,
      color: "var(--yc-text-muted)",
      marginBottom: 24
    }
  }, "I started coding out of curiosity and ended up falling in love with the process. No bootcamp, no university \u2014 just YouTube, documentation, real projects, and plenty of mistakes that taught me more than any class ever could."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.85,
      color: "var(--yc-text-muted)",
      marginBottom: 24
    }
  }, "Today I build complete web applications: from the UI the user sees, to the API and database that make it work. I specialize in creating products that not only look great, but solve real problems."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.85,
      color: "var(--yc-text-muted)",
      marginBottom: 48
    }
  }, "When I'm not coding, I'm learning something new, drinking coffee, or planning the next project that'll keep me up at night (in the best way)."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 24,
      paddingTop: 32,
      borderTop: "1px solid rgba(45,62,110,0.25)"
    }
  }, /*#__PURE__*/React.createElement(GradientStat, {
    value: "10+",
    label: "Projects",
    big: true
  }), /*#__PURE__*/React.createElement(GradientStat, {
    value: "15+",
    label: "Technologies",
    big: true
  }), /*#__PURE__*/React.createElement(GradientStat, {
    value: "100%",
    label: "Self-taught",
    big: true
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 16,
      overflow: "hidden",
      aspectRatio: "4/3",
      position: "relative",
      border: "1px solid rgba(45,62,110,0.25)",
      background: "linear-gradient(135deg, #1a2540 0%, #0c1628 60%, #2a1f10 100%)",
      display: "flex",
      alignItems: "flex-end",
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "radial-gradient(circle at 30% 30%, rgba(245,166,35,0.15), transparent 50%)"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "white",
      fontWeight: 700,
      fontSize: 15,
      lineHeight: 1.4,
      position: "relative",
      zIndex: 1
    }
  }, "Self-taught \xB7 autodidact \xB7 and proud of it")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--yc-bg-card)",
      border: "1px solid var(--yc-border)",
      borderRadius: 16,
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: "0.15em",
      textTransform: "uppercase",
      color: "var(--yc-text-muted)",
      marginBottom: 24
    }
  }, "My journey"), journey.map((item, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      gap: 16,
      position: "relative"
    }
  }, i < journey.length - 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 6,
      top: 20,
      bottom: 0,
      width: 1,
      background: "rgba(45,62,110,0.3)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 13,
      height: 13,
      borderRadius: "50%",
      flexShrink: 0,
      marginTop: 5,
      background: i === journey.length - 1 ? "var(--yc-gold)" : "var(--yc-navy-light)",
      boxShadow: "0 0 0 3px rgba(7,13,26,0.8)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: i < journey.length - 1 ? 24 : 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: "var(--yc-gold)",
      letterSpacing: "0.05em"
    }
  }, item.year), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: "var(--yc-text)",
      marginTop: 3,
      fontWeight: 500
    }
  }, item.milestone)))))))));
}
window.About = About;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Atoms.jsx
try { (() => {
// Brand mark + wordmark used in nav and footer
function BrandMark({
  size = 20,
  color = "var(--yc-gold)"
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--yc-font-mono)",
      fontSize: size,
      fontWeight: 700,
      color,
      lineHeight: 1,
      letterSpacing: "-0.05em"
    }
  }, "</>");
}
function Wordmark({
  size = "sm"
}) {
  const f = size === "lg" ? {
    wm: 22,
    role: 9,
    gap: 10,
    mt: 3
  } : {
    wm: 17,
    role: 8.5,
    gap: 9,
    mt: 2.5
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: f.gap
    }
  }, /*#__PURE__*/React.createElement(BrandMark, {
    size: size === "lg" ? 26 : 20
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: f.wm,
      fontWeight: 900,
      color: "var(--yc-gold)",
      letterSpacing: "-0.02em"
    }
  }, "Yare"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: f.wm,
      fontWeight: 900,
      color: "var(--yc-navy-light)",
      letterSpacing: "-0.02em"
    }
  }, "Cruz")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: f.role,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--yc-text-muted)",
      marginTop: f.mt
    }
  }, "Full Stack Developer")));
}

// Section header pattern: eyebrow + heading + 44×2 gradient rule
function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 56,
      textAlign: center ? "center" : "left"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "yc-eyebrow",
    style: {
      display: "block",
      marginBottom: 14
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "yc-h2"
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 2,
      borderRadius: 2,
      background: "var(--yc-grad-rule)",
      marginTop: 18,
      marginLeft: center ? "auto" : 0,
      marginRight: center ? "auto" : 0
    }
  }), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 20,
      fontSize: 16,
      lineHeight: 1.7,
      color: "var(--yc-text-muted)",
      maxWidth: 500,
      marginLeft: center ? "auto" : 0,
      marginRight: center ? "auto" : 0
    }
  }, subtitle));
}

// Tech tag
function Tag({
  children,
  color
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      padding: "3px 10px",
      borderRadius: 6,
      fontSize: 11,
      fontWeight: 500,
      fontFamily: "var(--yc-font-mono)",
      background: "rgba(45,62,110,0.25)",
      border: "1px solid rgba(90,118,184,0.3)",
      color: color || "var(--yc-navy-light)"
    }
  }, children);
}

// Buttons
function Button({
  variant = "primary",
  children,
  onClick,
  style
}) {
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    border: "none",
    borderRadius: 10,
    cursor: "pointer",
    fontFamily: "inherit",
    fontWeight: 600,
    fontSize: 14,
    letterSpacing: "0.01em",
    textDecoration: "none",
    transition: "transform .18s ease, box-shadow .18s ease, opacity .18s ease",
    whiteSpace: "nowrap"
  };
  const variants = {
    primary: {
      padding: "14px 28px",
      color: "#fff",
      background: "var(--yc-grad-brand)",
      boxShadow: "var(--yc-shadow-glow-gold)"
    },
    gold: {
      padding: "14px 28px",
      color: "var(--yc-bg)",
      fontWeight: 700,
      background: "var(--yc-gold)",
      boxShadow: "0 4px 20px rgba(245,166,35,0.3)"
    },
    outline: {
      padding: "13px 27px",
      background: "transparent",
      color: "var(--yc-text)",
      border: "1px solid rgba(90,118,184,0.4)"
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      ...base,
      ...variants[variant],
      ...style
    },
    onMouseEnter: e => e.currentTarget.style.transform = "scale(1.02)",
    onMouseLeave: e => e.currentTarget.style.transform = "scale(1)"
  }, children);
}

// Gradient stat number (used by hero floating cards + about stats)
function GradientStat({
  value,
  label,
  big
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "yc-gradient-text",
    style: {
      fontSize: big ? 30 : 26,
      fontWeight: 900,
      lineHeight: 1,
      marginBottom: 6
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: big ? 11 : 12,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "var(--yc-text-muted)"
    }
  }, label));
}

// Status pill (the green "Available" badge)
function StatusPill({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      padding: "8px 16px",
      borderRadius: 99,
      background: "var(--yc-success-bg)",
      border: "1px solid var(--yc-success-bd)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: "var(--yc-success)",
      boxShadow: "0 0 0 3px rgba(52,211,153,0.2)",
      animation: "yc-pulse 2s infinite"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--yc-success)",
      fontWeight: 500
    }
  }, children));
}
Object.assign(window, {
  BrandMark,
  Wordmark,
  SectionHeader,
  Tag,
  Button,
  GradientStat,
  StatusPill
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Atoms.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Contact.jsx
try { (() => {
// Contact section — form + sidebar (availability, socials, response time)
function Contact() {
  const {
    GithubIcon,
    LinkedinIcon,
    Mail,
    Send,
    Check
  } = window.YCIcons;
  const [status, setStatus] = React.useState("idle"); // idle | sending | sent
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    project: "",
    message: ""
  });
  const handleSubmit = async e => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setForm({
        name: "",
        email: "",
        project: "",
        message: ""
      });
    }, 1200);
  };
  const inputStyle = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: 10,
    fontSize: 14,
    outline: "none",
    background: "var(--yc-bg)",
    color: "var(--yc-text)",
    border: "1px solid rgba(45,62,110,0.4)",
    boxSizing: "border-box",
    fontFamily: "inherit"
  };
  const socials = [{
    Icon: GithubIcon,
    label: "GitHub",
    username: "@yarecruz"
  }, {
    Icon: LinkedinIcon,
    label: "LinkedIn",
    username: "Yare Cruz"
  }, {
    Icon: Mail,
    label: "Email",
    username: "hola@yarecruz.dev"
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    style: {
      padding: "110px 0",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "50%",
      right: "-5%",
      width: 400,
      height: 400,
      borderRadius: "50%",
      filter: "blur(100px)",
      opacity: 0.06,
      background: "var(--yc-gold)",
      transform: "translateY(-50%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "yc-container",
    style: {
      position: "relative",
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "06. Contact",
    title: "Let's talk",
    subtitle: "Have a project, an idea, or just want to say hi? I respond in less than 24 hours.",
    center: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "3fr 2fr",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, status === "sent" ? /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: 360,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 16,
      borderRadius: 20,
      textAlign: "center",
      padding: 40,
      background: "var(--yc-bg-card)",
      border: "1px solid rgba(90,118,184,0.4)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "rgba(245,166,35,0.12)",
      border: "1px solid rgba(245,166,35,0.4)",
      color: "var(--yc-gold)"
    }
  }, /*#__PURE__*/React.createElement(Check, {
    size: 28
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 22,
      fontWeight: 700,
      color: "var(--yc-text)"
    }
  }, "Message sent!"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--yc-text-muted)"
    }
  }, "I'll get back to you soon. Follow me on socials in the meantime. \uD83D\uDE0A"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setStatus("idle"),
    style: {
      marginTop: 8,
      padding: "10px 24px",
      borderRadius: 12,
      fontSize: 14,
      fontWeight: 600,
      cursor: "pointer",
      background: "rgba(45,62,110,0.2)",
      border: "1px solid rgba(90,118,184,0.4)",
      color: "var(--yc-navy-light)",
      fontFamily: "inherit"
    }
  }, "Send another message")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit,
    style: {
      padding: 36,
      borderRadius: 20,
      display: "flex",
      flexDirection: "column",
      gap: 20,
      background: "var(--yc-bg-card)",
      border: "1px solid var(--yc-border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      fontSize: 13,
      fontWeight: 500,
      marginBottom: 8,
      color: "var(--yc-text)"
    }
  }, "Name"), /*#__PURE__*/React.createElement("input", {
    required: true,
    type: "text",
    value: form.name,
    onChange: e => setForm({
      ...form,
      name: e.target.value
    }),
    placeholder: "Your name",
    style: inputStyle
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      fontSize: 13,
      fontWeight: 500,
      marginBottom: 8,
      color: "var(--yc-text)"
    }
  }, "Email"), /*#__PURE__*/React.createElement("input", {
    required: true,
    type: "email",
    value: form.email,
    onChange: e => setForm({
      ...form,
      email: e.target.value
    }),
    placeholder: "your@email.com",
    style: inputStyle
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      fontSize: 13,
      fontWeight: 500,
      marginBottom: 8,
      color: "var(--yc-text)"
    }
  }, "Project type"), /*#__PURE__*/React.createElement("select", {
    value: form.project,
    onChange: e => setForm({
      ...form,
      project: e.target.value
    }),
    style: {
      ...inputStyle,
      color: form.project ? "var(--yc-text)" : "var(--yc-text-muted)"
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Select an option..."), /*#__PURE__*/React.createElement("option", {
    value: "landing"
  }, "Landing page"), /*#__PURE__*/React.createElement("option", {
    value: "webapp"
  }, "Full Stack Web App"), /*#__PURE__*/React.createElement("option", {
    value: "api"
  }, "API / Backend"), /*#__PURE__*/React.createElement("option", {
    value: "redesign"
  }, "UI Redesign"), /*#__PURE__*/React.createElement("option", {
    value: "otro"
  }, "Other / Tell me"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      fontSize: 13,
      fontWeight: 500,
      marginBottom: 8,
      color: "var(--yc-text)"
    }
  }, "Tell me your idea"), /*#__PURE__*/React.createElement("textarea", {
    required: true,
    rows: 5,
    value: form.message,
    onChange: e => setForm({
      ...form,
      message: e.target.value
    }),
    placeholder: "What do you want to build? The more detail, the better...",
    style: {
      ...inputStyle,
      resize: "none"
    }
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "gold",
    style: {
      width: "100%",
      padding: "15px",
      fontSize: 15,
      opacity: status === "sending" ? 0.7 : 1
    }
  }, status === "sending" ? /*#__PURE__*/React.createElement(React.Fragment, null, "Sending...") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Send, {
    size: 18
  }), " Send message")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      borderRadius: 16,
      background: "rgba(245,166,35,0.07)",
      border: "1px solid rgba(245,166,35,0.3)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: "#34d399",
      animation: "yc-pulse 2s infinite"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: "var(--yc-gold)"
    }
  }, "Available for projects")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: "var(--yc-text-muted)",
      lineHeight: 1.65
    }
  }, "I currently have space for", " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--yc-text)",
      fontWeight: 600
    }
  }, "2 new projects"), " ", "this month. Write to me before they fill up!")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      borderRadius: 16,
      background: "var(--yc-bg-card)",
      border: "1px solid var(--yc-border)"
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontWeight: 700,
      color: "var(--yc-text)",
      marginBottom: 16,
      fontSize: 15
    }
  }, "Find me at:"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, socials.map(({
    Icon,
    label,
    username
  }) => /*#__PURE__*/React.createElement("a", {
    key: label,
    href: "#",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "12px 14px",
      borderRadius: 12,
      border: "1px solid rgba(45,62,110,0.2)",
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    size: 18
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--yc-text-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      color: "var(--yc-text)"
    }
  }, username)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      borderRadius: 16,
      textAlign: "center",
      background: "rgba(45,62,110,0.15)",
      border: "1px solid var(--yc-border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "yc-gradient-text",
    style: {
      fontSize: 32,
      fontWeight: 900
    }
  }, "< 24h"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--yc-text-muted)",
      marginTop: 4
    }
  }, "avg response time"))))));
}
window.Contact = Contact;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Footer.jsx
try { (() => {
// Footer — brand block + nav + CTA + copyright
function Footer({
  onGo
}) {
  const {
    GithubIcon,
    LinkedinIcon,
    Heart,
    ArrowUp
  } = window.YCIcons;
  const navLinks = [{
    label: "About me",
    id: "about"
  }, {
    label: "Stack",
    id: "stack"
  }, {
    label: "Projects",
    id: "projects"
  }, {
    label: "Services",
    id: "services"
  }, {
    label: "Blog",
    id: "blog"
  }, {
    label: "Contact",
    id: "contact"
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "rgba(4,8,16,0.99)",
      borderTop: "1px solid rgba(45,62,110,0.2)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "yc-container",
    style: {
      paddingTop: 56,
      paddingBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr",
      gap: 48,
      paddingBottom: 48,
      borderBottom: "1px solid rgba(45,62,110,0.15)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: "lg"
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.8,
      color: "var(--yc-text-muted)",
      maxWidth: 260
    }
  }, "Self-taught Full Stack Developer. I build digital products with clean code and lots of coffee.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: "var(--yc-text)",
      marginBottom: 20
    }
  }, "Navigation"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "10px 8px"
    }
  }, navLinks.map(link => /*#__PURE__*/React.createElement("li", {
    key: link.id
  }, /*#__PURE__*/React.createElement("a", {
    href: `#${link.id}`,
    onClick: e => {
      e.preventDefault();
      onGo(link.id);
    },
    style: {
      fontSize: 14,
      color: "var(--yc-text-muted)",
      textDecoration: "none"
    }
  }, link.label))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: "var(--yc-text)",
      marginBottom: 20
    }
  }, "Ready to start?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.8,
      color: "var(--yc-text-muted)",
      marginBottom: 20
    }
  }, "Write to me and let's build something incredible."), /*#__PURE__*/React.createElement(Button, {
    variant: "gold",
    onClick: () => onGo("contact"),
    style: {
      padding: "10px 22px",
      fontSize: 13
    }
  }, "Hire me \u2726"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 16,
      paddingTop: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 5,
      fontSize: 13,
      color: "var(--yc-text-muted)"
    }
  }, "Made with ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--yc-gold)"
    }
  }, /*#__PURE__*/React.createElement(Heart, {
    size: 12
  })), " ", "by Yare Cruz \xB7 ", new Date().getFullYear()), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "var(--yc-text-muted)"
    }
  }, /*#__PURE__*/React.createElement(GithubIcon, {
    size: 17
  })), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "var(--yc-text-muted)"
    }
  }, /*#__PURE__*/React.createElement(LinkedinIcon, {
    size: 17
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 16,
      background: "rgba(90,118,184,0.25)"
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => onGo("hero"),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 5,
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "var(--yc-text-muted)",
      fontFamily: "inherit"
    }
  }, /*#__PURE__*/React.createElement(ArrowUp, {
    size: 13
  }), " Top")))));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Hero.jsx
try { (() => {
// Hero — name, typing role, CTAs, photo card with floating stats
function Hero({
  onGo
}) {
  const {
    GithubIcon,
    LinkedinIcon,
    ArrowDown
  } = window.YCIcons;
  const roles = ["Full Stack Developer", "React & Next.js Dev", "Node.js Backend Dev", "UI/UX Enthusiast", "Self-Taught & Proud"];
  const [idx, setIdx] = React.useState(0);
  const [text, setText] = React.useState("");
  const [typing, setTyping] = React.useState(true);
  React.useEffect(() => {
    const cur = roles[idx];
    let t;
    if (typing) {
      if (text.length < cur.length) t = setTimeout(() => setText(cur.slice(0, text.length + 1)), 55);else t = setTimeout(() => setTyping(false), 2200);
    } else {
      if (text.length > 0) t = setTimeout(() => setText(text.slice(0, -1)), 28);else {
        setIdx(i => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(t);
  }, [text, typing, idx]);
  return /*#__PURE__*/React.createElement("section", {
    id: "hero",
    style: {
      minHeight: "100vh",
      width: "100%",
      display: "flex",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
      paddingTop: 100,
      paddingBottom: 60
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      opacity: 0.5,
      backgroundImage: "radial-gradient(rgba(45,62,110,0.22) 1px, transparent 1px)",
      backgroundSize: "28px 28px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "20%",
      right: "-5%",
      width: 500,
      height: 500,
      borderRadius: "50%",
      background: "rgba(45,62,110,0.12)",
      filter: "blur(100px)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: "10%",
      left: "5%",
      width: 350,
      height: 350,
      borderRadius: "50%",
      background: "rgba(245,166,35,0.06)",
      filter: "blur(80px)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "yc-container",
    style: {
      position: "relative",
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 80,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement(StatusPill, null, "Available for freelance projects")), /*#__PURE__*/React.createElement("h1", {
    className: "yc-h1"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--yc-text)"
    }
  }, "Hi, I'm"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "yc-gradient-text"
  }, "Yare Cruz")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 36,
      display: "flex",
      alignItems: "center",
      gap: 6,
      marginTop: 20,
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontFamily: "var(--yc-font-mono)",
      color: "var(--yc-navy-light)",
      fontWeight: 500
    }
  }, text), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 2,
      height: 22,
      background: "var(--yc-gold)",
      display: "inline-block",
      borderRadius: 1,
      animation: "yc-blink 1s step-end infinite"
    }
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.75,
      color: "var(--yc-text-muted)",
      marginBottom: 40,
      maxWidth: 440
    }
  }, "I turn ideas into digital products that", " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--yc-text)",
      fontWeight: 500
    }
  }, "actually work"), ". Self-taught developer passionate about building clean interfaces and robust backends. Every project is a story worth telling."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      flexWrap: "wrap",
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "gold",
    onClick: () => onGo("projects")
  }, "View my projects"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => onGo("contact")
  }, "Hire me")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "var(--yc-text-muted)"
    }
  }, /*#__PURE__*/React.createElement(GithubIcon, {
    size: 19
  })), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "var(--yc-text-muted)"
    }
  }, /*#__PURE__*/React.createElement(LinkedinIcon, {
    size: 19
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 16,
      background: "rgba(90,118,184,0.3)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontFamily: "var(--yc-font-mono)",
      color: "var(--yc-text-muted)"
    }
  }, "yarecruz.dev"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 380
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      borderRadius: 20,
      background: "var(--yc-grad-brand)",
      transform: "translate(10px, 10px)",
      opacity: 0.3,
      zIndex: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 20,
      overflow: "hidden",
      aspectRatio: "4/5",
      border: "1px solid rgba(90,118,184,0.25)",
      zIndex: 1,
      background: "linear-gradient(135deg, #1a2540 0%, #0c1628 100%)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/me.jpg",
    alt: "Yare Cruz",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center top",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(to top, rgba(7,13,26,0.5) 0%, transparent 55%)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -48,
      top: 48,
      zIndex: 2,
      background: "rgba(12,22,40,0.95)",
      backdropFilter: "blur(12px)",
      border: "1px solid rgba(45,62,110,0.5)",
      borderRadius: 14,
      padding: "16px 20px",
      animation: "yc-float 4s ease-in-out infinite"
    }
  }, /*#__PURE__*/React.createElement(GradientStat, {
    value: "10+",
    label: "Projects"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: -40,
      bottom: 64,
      zIndex: 2,
      background: "rgba(12,22,40,0.95)",
      backdropFilter: "blur(12px)",
      border: "1px solid rgba(245,166,35,0.3)",
      borderRadius: 14,
      padding: "16px 20px",
      animation: "yc-float 4s ease-in-out 1.2s infinite"
    }
  }, /*#__PURE__*/React.createElement(GradientStat, {
    value: "15+",
    label: "Technologies"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 32,
      left: "50%",
      transform: "translateX(-50%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 8,
      color: "var(--yc-text-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      fontWeight: 500
    }
  }, "scroll"), /*#__PURE__*/React.createElement(ArrowDown, {
    size: 13
  })));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Icons.jsx
try { (() => {
// ── Lucide-style stroke icons (2px round) used across the kit ──
function Icon({
  d,
  size = 18,
  fill = "none",
  strokeWidth = 2,
  children
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: fill,
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, children || /*#__PURE__*/React.createElement("path", {
    d: d
  }));
}
const ArrowDown = p => /*#__PURE__*/React.createElement(Icon, {
  size: p.size || 14
}, /*#__PURE__*/React.createElement("path", {
  d: "M12 5v14M19 12l-7 7-7-7"
}));
const ArrowRight = p => /*#__PURE__*/React.createElement(Icon, {
  size: p.size || 14
}, /*#__PURE__*/React.createElement("path", {
  d: "M5 12h14M13 5l7 7-7 7"
}));
const Check = p => /*#__PURE__*/React.createElement(Icon, {
  size: p.size || 14,
  strokeWidth: 2.5
}, /*#__PURE__*/React.createElement("polyline", {
  points: "20 6 9 17 4 12"
}));
const Clock = p => /*#__PURE__*/React.createElement(Icon, {
  size: p.size || 14
}, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "10"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "12 6 12 12 16 14"
}));
const Mail = p => /*#__PURE__*/React.createElement(Icon, {
  size: p.size || 14
}, /*#__PURE__*/React.createElement("rect", {
  x: "2",
  y: "4",
  width: "20",
  height: "16",
  rx: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "m22 7-10 5L2 7"
}));
const Send = p => /*#__PURE__*/React.createElement(Icon, {
  size: p.size || 14
}, /*#__PURE__*/React.createElement("line", {
  x1: "22",
  y1: "2",
  x2: "11",
  y2: "13"
}), /*#__PURE__*/React.createElement("polygon", {
  points: "22 2 15 22 11 13 2 9 22 2"
}));
const ExternalLink = p => /*#__PURE__*/React.createElement(Icon, {
  size: p.size || 14
}, /*#__PURE__*/React.createElement("path", {
  d: "M15 3h6v6M10 14 21 3M21 14v7H3V3h7"
}));
const MenuIcon = p => /*#__PURE__*/React.createElement(Icon, {
  size: p.size || 20
}, /*#__PURE__*/React.createElement("line", {
  x1: "3",
  y1: "12",
  x2: "21",
  y2: "12"
}), /*#__PURE__*/React.createElement("line", {
  x1: "3",
  y1: "6",
  x2: "21",
  y2: "6"
}), /*#__PURE__*/React.createElement("line", {
  x1: "3",
  y1: "18",
  x2: "21",
  y2: "18"
}));
const X = p => /*#__PURE__*/React.createElement(Icon, {
  size: p.size || 20
}, /*#__PURE__*/React.createElement("line", {
  x1: "18",
  y1: "6",
  x2: "6",
  y2: "18"
}), /*#__PURE__*/React.createElement("line", {
  x1: "6",
  y1: "6",
  x2: "18",
  y2: "18"
}));
const Heart = p => /*#__PURE__*/React.createElement(Icon, {
  size: p.size || 12,
  fill: "currentColor"
}, /*#__PURE__*/React.createElement("path", {
  d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
}));
const ArrowUp = p => /*#__PURE__*/React.createElement(Icon, {
  size: p.size || 13
}, /*#__PURE__*/React.createElement("path", {
  d: "M12 19V5M5 12l7-7 7 7"
}));
const GithubIcon = ({
  size = 18
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, /*#__PURE__*/React.createElement("path", {
  d: "M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
}));
const LinkedinIcon = ({
  size = 18
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, /*#__PURE__*/React.createElement("path", {
  d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
}));
window.YCIcons = {
  ArrowDown,
  ArrowRight,
  Check,
  Clock,
  Mail,
  Send,
  ExternalLink,
  MenuIcon,
  X,
  Heart,
  ArrowUp,
  GithubIcon,
  LinkedinIcon
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Navbar.jsx
try { (() => {
// Fixed navbar that becomes opaque on scroll
function Navbar({
  active,
  onGo,
  scrolled
}) {
  const links = [{
    id: "about",
    label: "About me"
  }, {
    id: "projects",
    label: "Projects"
  }, {
    id: "services",
    label: "Services"
  }, {
    id: "blog",
    label: "Blog"
  }, {
    id: "contact",
    label: "Contact"
  }];
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: scrolled ? "rgba(7,13,26,0.95)" : "transparent",
      backdropFilter: scrolled ? "blur(18px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(45,62,110,0.25)" : "none",
      transition: "all 0.35s ease",
      padding: scrolled ? "12px 0" : "20px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "yc-container",
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onGo("hero"),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(Wordmark, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 36
    }
  }, links.map(l => /*#__PURE__*/React.createElement("button", {
    key: l.id,
    onClick: () => onGo(l.id),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: "4px 0",
      fontSize: 14,
      fontWeight: 500,
      letterSpacing: "0.01em",
      color: active === l.id ? "var(--yc-text)" : "var(--yc-text-muted)",
      position: "relative",
      transition: "color 0.2s"
    }
  }, l.label, active === l.id && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      bottom: -2,
      left: 0,
      right: 0,
      height: 1.5,
      borderRadius: 1,
      background: "var(--yc-grad-rule)"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 2,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      fontSize: 11,
      fontWeight: 800,
      letterSpacing: "0.15em",
      textTransform: "uppercase",
      padding: "2px 5px",
      color: "var(--yc-text-muted)"
    }
  }, "ES"), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.3,
      margin: "0 2px",
      color: "var(--yc-text-muted)"
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("button", {
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      fontSize: 11,
      fontWeight: 800,
      letterSpacing: "0.15em",
      textTransform: "uppercase",
      padding: "2px 5px",
      color: "var(--yc-gold)"
    }
  }, "EN")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 16,
      background: "rgba(90,118,184,0.3)"
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "gold",
    onClick: () => onGo("contact"),
    style: {
      padding: "10px 22px",
      fontSize: 13
    }
  }, "Let's Talk \u2726"))));
}
window.Navbar = Navbar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Navbar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Projects.jsx
try { (() => {
// Projects section — filterable grid of project cards
const PROJECTS = [{
  id: 1,
  title: "SuperFresh Market",
  category: "Full Stack",
  featured: true,
  description: "Full e-commerce for an online supermarket with product search, filters, smart cart, and order management system.",
  tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
  hue: "linear-gradient(135deg, #4a7a3a 0%, #2d4520 100%)"
}, {
  id: 2,
  title: "Brew & Bean Coffee Shop",
  category: "Full Stack",
  featured: true,
  description: "Landing page + online ordering system for a specialty coffee shop. Real-time menu, loyalty program and reservations.",
  tags: ["React", "Node.js", "MongoDB", "Tailwind"],
  hue: "linear-gradient(135deg, #6b4423 0%, #2c1810 100%)"
}, {
  id: 3,
  title: "FitTrack Fitness App",
  category: "Full Stack",
  featured: false,
  description: "Workout tracking app with custom routines, progress charts, weekly goals and social challenges.",
  tags: ["React Native", "Expo", "Supabase", "Recharts"],
  hue: "linear-gradient(135deg, #1a4d5c 0%, #0a2030 100%)"
}, {
  id: 4,
  title: "TaskFlow Manager",
  category: "Full Stack",
  featured: false,
  description: "Task management app with drag & drop, categories, filters, and real-time sync.",
  tags: ["React", "TypeScript", "Node.js", "Socket.io"],
  hue: "linear-gradient(135deg, #3a3a5c 0%, #1a1a30 100%)"
}, {
  id: 5,
  title: "StyleCo Fashion Store",
  category: "Frontend",
  featured: false,
  description: "Modern fashion e-commerce with size filters, wishlists, and a smooth mobile-first checkout.",
  tags: ["Next.js", "Shopify API", "Tailwind", "TypeScript"],
  hue: "linear-gradient(135deg, #5c2d4f 0%, #2a1020 100%)"
}, {
  id: 6,
  title: "Blog REST API",
  category: "Backend",
  featured: false,
  description: "Complete API for a blog system: JWT auth, posts, comments, likes, and pagination.",
  tags: ["Node.js", "Express", "MongoDB", "JWT"],
  hue: "linear-gradient(135deg, #2d4a6e 0%, #101e35 100%)"
}];
function ProjectCard({
  p
}) {
  const {
    GithubIcon,
    ExternalLink
  } = window.YCIcons;
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: "var(--yc-bg-card)",
      border: "1px solid var(--yc-border)",
      borderRadius: 16,
      overflow: "hidden",
      transform: hover ? "translateY(-5px)" : "translateY(0)",
      boxShadow: hover ? "var(--yc-shadow-card-hover)" : "none",
      transition: "transform .3s ease, box-shadow .3s ease"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 200,
      overflow: "hidden",
      background: p.hue
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(to top, rgba(7,13,26,0.85) 0%, rgba(7,13,26,0.1) 55%, transparent 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 12,
      opacity: hover ? 1 : 0,
      transition: "opacity .3s",
      background: "rgba(7,13,26,0.8)",
      backdropFilter: "blur(6px)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      padding: "10px 18px",
      borderRadius: 9,
      fontSize: 13,
      fontWeight: 600,
      color: "white",
      background: "rgba(45,62,110,0.9)",
      border: "1px solid rgba(90,118,184,0.4)",
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement(GithubIcon, {
    size: 14
  }), " Code"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      padding: "10px 18px",
      borderRadius: 9,
      fontSize: 13,
      fontWeight: 600,
      color: "var(--yc-bg)",
      background: "var(--yc-gold)",
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement(ExternalLink, {
    size: 14
  }), " Live")), p.featured && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 12,
      right: 12,
      padding: "4px 10px",
      borderRadius: 99,
      fontSize: 11,
      fontWeight: 600,
      color: "var(--yc-gold)",
      background: "rgba(245,166,35,0.15)",
      border: "1px solid rgba(245,166,35,0.4)",
      backdropFilter: "blur(6px)"
    }
  }, "Featured")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 22px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 10,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: "var(--yc-text)",
      lineHeight: 1.3,
      margin: 0
    }
  }, p.title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      padding: "3px 8px",
      borderRadius: 6,
      fontWeight: 500,
      color: "var(--yc-text-muted)",
      background: "rgba(45,62,110,0.2)",
      border: "1px solid rgba(45,62,110,0.3)",
      whiteSpace: "nowrap",
      flexShrink: 0
    }
  }, p.category)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      lineHeight: 1.7,
      color: "var(--yc-text-muted)",
      marginBottom: 16
    }
  }, p.description), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 6
    }
  }, p.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t
  }, t)))));
}
function Projects() {
  const {
    GithubIcon
  } = window.YCIcons;
  const filters = ["All", "Frontend", "Full Stack", "Backend"];
  const [active, setActive] = React.useState(0);
  const filtered = active === 0 ? PROJECTS : PROJECTS.filter(p => p.category === filters[active]);
  return /*#__PURE__*/React.createElement("section", {
    id: "projects",
    style: {
      padding: "110px 0",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "yc-container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: 20,
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "yc-eyebrow",
    style: {
      display: "block",
      marginBottom: 14
    }
  }, "03. Projects"), /*#__PURE__*/React.createElement("h2", {
    className: "yc-h2"
  }, "What I've built"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 2,
      borderRadius: 2,
      background: "var(--yc-grad-rule)",
      marginTop: 18
    }
  })), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      fontSize: 14,
      color: "var(--yc-text-muted)",
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement(GithubIcon, {
    size: 15
  }), " See more on GitHub")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4,
      marginBottom: 40,
      padding: 4,
      borderRadius: 12,
      width: "fit-content",
      background: "rgba(7,13,26,0.7)",
      border: "1px solid rgba(45,62,110,0.25)"
    }
  }, filters.map((f, i) => /*#__PURE__*/React.createElement("button", {
    key: f,
    onClick: () => setActive(i),
    style: {
      padding: "8px 20px",
      borderRadius: 9,
      border: "none",
      cursor: "pointer",
      fontSize: 14,
      fontWeight: 500,
      fontFamily: "inherit",
      transition: "all .2s",
      background: active === i ? "var(--yc-grad-brand)" : "transparent",
      color: active === i ? "white" : "var(--yc-text-muted)"
    }
  }, f))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 20
    }
  }, filtered.map(p => /*#__PURE__*/React.createElement(ProjectCard, {
    key: p.id,
    p: p
  })))));
}
window.Projects = Projects;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Projects.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Services.jsx
try { (() => {
// Services — pricing cards + extras row + CTA banner
const PLANS = [{
  title: "Landing Page",
  subtitle: "For your business or personal brand",
  price: "$250",
  priceNote: "USD · one-time payment",
  popular: false,
  color: "var(--yc-navy-light)",
  features: ["Custom responsive design", "Animations and transitions", "Functional contact form", "Basic SEO optimization", "Deployment included (Vercel)", "1 round of revisions"]
}, {
  title: "Full Stack Web App",
  subtitle: "Complete application with backend",
  price: "$800",
  priceNote: "USD · custom quote",
  popular: true,
  color: "var(--yc-gold)",
  features: ["Frontend in React / Next.js", "Backend with Node.js + Express", "Database (PostgreSQL / MongoDB)", "User authentication", "Admin panel", "Documented REST API", "Production deployment", "2 weeks post-delivery support"]
}, {
  title: "API / Backend",
  subtitle: "Just the engine of your application",
  price: "$400",
  priceNote: "USD · starting from",
  popular: false,
  color: "var(--yc-gold-light)",
  features: ["REST API with Node.js", "Database + migrations", "JWT authentication", "Swagger documentation", "Deploy on Railway / Render", "1 week of support"]
}];
function PricingCard({
  p,
  onContact
}) {
  const {
    ArrowRight,
    Check
  } = window.YCIcons;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 20,
      padding: 32,
      display: "flex",
      flexDirection: "column",
      background: p.popular ? "var(--yc-bg-elevated)" : "var(--yc-bg-card)",
      border: p.popular ? "1px solid rgba(245,166,35,0.5)" : "1px solid var(--yc-border)",
      boxShadow: p.popular ? "0 0 0 1px rgba(245,166,35,0.1), 0 24px 60px rgba(0,0,0,0.25)" : "none"
    }
  }, p.popular && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: -1,
      left: 32,
      right: 32,
      height: 1,
      background: "linear-gradient(90deg, transparent, var(--yc-gold), transparent)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: -12,
      left: "50%",
      transform: "translateX(-50%)",
      padding: "3px 14px",
      borderRadius: 99,
      fontSize: 11,
      fontWeight: 700,
      color: "var(--yc-bg)",
      letterSpacing: "0.05em",
      background: "linear-gradient(90deg, var(--yc-navy), var(--yc-gold))",
      whiteSpace: "nowrap"
    }
  }, "\u2726 Most popular")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      color: "var(--yc-text)",
      marginBottom: 4
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: "var(--yc-text-muted)"
    }
  }, p.subtitle)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 28,
      paddingBottom: 28,
      borderBottom: "1px solid rgba(45,62,110,0.25)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 36,
      fontWeight: 900,
      color: "var(--yc-text)"
    }
  }, p.price), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      marginLeft: 8,
      color: "var(--yc-text-muted)"
    }
  }, p.priceNote)), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      flex: 1,
      marginBottom: 28,
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, p.features.map(f => /*#__PURE__*/React.createElement("li", {
    key: f,
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 18,
      height: 18,
      borderRadius: "50%",
      flexShrink: 0,
      marginTop: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: `${p.color}18`,
      border: `1px solid ${p.color}55`
    }
  }, /*#__PURE__*/React.createElement(Check, {
    size: 10
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--yc-text-muted)",
      lineHeight: 1.5
    }
  }, f)))), /*#__PURE__*/React.createElement("a", {
    href: "#contact",
    onClick: e => {
      e.preventDefault();
      onContact();
    },
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      padding: "12px 20px",
      borderRadius: 12,
      fontWeight: 600,
      fontSize: 14,
      textDecoration: "none",
      ...(p.popular ? {
        background: "var(--yc-gold)",
        color: "var(--yc-bg)"
      } : {
        border: `1px solid ${p.color}55`,
        color: p.color,
        background: `${p.color}0a`
      })
    }
  }, "Request a quote ", /*#__PURE__*/React.createElement(ArrowRight, {
    size: 14
  })));
}
function Services({
  onGo
}) {
  const {
    ArrowRight
  } = window.YCIcons;
  const extras = [{
    label: "UI Redesign",
    price: "from $150 USD"
  }, {
    label: "Monthly maintenance",
    price: "from $80 USD/mo"
  }, {
    label: "External API integration",
    price: "from $120 USD"
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "services",
    style: {
      padding: "110px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "yc-container"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "04. Services",
    title: "How can I help you?",
    subtitle: "I work with you from idea to deployment. No agencies, no middlemen \u2014 you talk directly to the dev.",
    center: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 24,
      marginBottom: 48
    }
  }, PLANS.map(p => /*#__PURE__*/React.createElement(PricingCard, {
    key: p.title,
    p: p,
    onContact: () => onGo("contact")
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      textAlign: "center",
      marginBottom: 20,
      color: "var(--yc-text-muted)"
    }
  }, "I also offer:"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 14
    }
  }, extras.map(({
    label,
    price
  }) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "14px 20px",
      borderRadius: 12,
      background: "var(--yc-bg-card)",
      border: "1px solid rgba(45,62,110,0.25)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: "var(--yc-text)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: "var(--yc-gold)"
    }
  }, price))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 20,
      overflow: "hidden",
      position: "relative",
      padding: "48px 40px",
      background: "var(--yc-grad-banner)",
      border: "1px solid rgba(90,118,184,0.2)",
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 22,
      fontWeight: 900,
      color: "var(--yc-text)",
      marginBottom: 6
    }
  }, "Have a project in mind?"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--yc-text-muted)",
      fontSize: 15
    }
  }, "Tell me your idea and we'll build something amazing together.")), /*#__PURE__*/React.createElement(Button, {
    variant: "gold",
    onClick: () => onGo("contact")
  }, "Write to me now ", /*#__PURE__*/React.createElement(ArrowRight, {
    size: 15
  })))));
}
window.Services = Services;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Services.jsx", error: String((e && e.message) || e) }); }

__ds_ns.GithubIcon = __ds_scope.GithubIcon;

__ds_ns.LinkedinIcon = __ds_scope.LinkedinIcon;

__ds_ns.XTwitterIcon = __ds_scope.XTwitterIcon;

})();

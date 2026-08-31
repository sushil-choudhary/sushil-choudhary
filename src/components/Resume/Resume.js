import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { motion } from "framer-motion";
import { AiOutlineDownload } from "react-icons/ai";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillPhone,
  AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const skillGroups = [
  {
    label: "Mobile",
    color: "#4ade80",
    skills: [
      "React Native",
      "iOS & Android",
      "App Store & Play Store",
      "React Navigation",
      "NativeBase",
      "BLE Manager",
    ],
  },
  {
    label: "Frontend",
    color: "#60a5fa",
    skills: [
      "ReactJS",
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "Zustand",
      "Micro Frontends",
      "Webpack MF",
    ],
  },
  {
    label: "Backend",
    color: "#f87171",
    skills: [
      "NodeJS",
      "NestJS",
      "REST APIs",
      "gRPC",
      "JWT / OAuth 2.0",
      "WebSocket",
    ],
  },
  {
    label: "UI / Styling",
    color: "#e879f9",
    skills: ["Material UI", "Tailwind CSS", "Formik / Yup", "React Hook Form"],
  },
  {
    label: "Testing",
    color: "#facc15",
    skills: ["Jest", "Vitest", "React Testing Library"],
  },
  {
    label: "DevOps & Tools",
    color: "#fb923c",
    skills: [
      "Docker",
      "Kubernetes",
      "GitLab CI/CD",
      "SonarQube",
      "JIRA",
      "Confluence",
    ],
  },
  {
    label: "Leadership",
    color: "#c770f0",
    skills: [
      "Team Leadership",
      "Project Auditing",
      "Project Ownership",
      "Agile / Scrum",
      "AI-Augmented Dev",
    ],
  },
];

function Resume() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Sushil_Choudhary_Resume.pdf";
    link.setAttribute("download", "Sushil-Choudhary-Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section>
      <Container fluid className="resume-section" id="resume">
        <Particle />
        <Container className="resume-content">
          {/* ── Hero Header ── */}
          <Row
            className="align-items-center justify-content-center"
            style={{ paddingBottom: "10px" }}
          >
            <Col
              md={8}
              className="d-flex flex-column align-items-center text-center"
            >
              <motion.h1
                custom={0}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="heading-name"
                style={{ paddingBottom: 8 }}
              >
                <strong className="main-name gradient-name">
                  SUSHIL CHOUDHARY
                </strong>
              </motion.h1>
              <motion.p
                custom={1}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                style={{ color: "#bbbbbb", fontSize: "1.1em", marginBottom: 0 }}
              >
                Team Lead · React Native &amp; React JS Developer
              </motion.p>
            </Col>
          </Row>

          {/* ── Social + Download ── */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <Row>
              <Col md={12} className="resume-social">
                <ul className="resume-social-links">
                  {[
                    {
                      href: "https://github.com/sushil-choudhary",
                      icon: <AiFillGithub />,
                      target: true,
                    },
                    {
                      href: "https://twitter.com/sushil_chotiya",
                      icon: <AiOutlineTwitter />,
                      target: true,
                    },
                    {
                      href: "https://www.linkedin.com/in/sushil-choudhary-0545211b3/",
                      icon: <FaLinkedinIn />,
                      target: true,
                    },
                    {
                      href: "https://www.instagram.com/sushil.choudhary4/#",
                      icon: <AiFillInstagram />,
                      target: true,
                    },
                    {
                      href: "tel:7340321143",
                      icon: <AiFillPhone />,
                      target: false,
                    },
                    {
                      href: "mailto:sushilchoudhary9871@gmail.com",
                      icon: <AiFillMail />,
                      target: false,
                    },
                  ].map((s, i) => (
                    <li key={i} className="resume-social-icons">
                      <a
                        href={s.href}
                        target={s.target ? "_blank" : undefined}
                        rel="noreferrer"
                        className="icon-colour home-social-icons"
                      >
                        {s.icon}
                      </a>
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: "16px" }}>
                  <motion.button
                    onClick={handleDownload}
                    className="btn-cta-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <AiOutlineDownload style={{ fontSize: "1.2em" }} /> Download
                    Resume
                  </motion.button>
                </div>
              </Col>
            </Row>
          </motion.div>

          {/* ── Skills ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <Row className="mt-5">
              <Col md={12}>
                <h3 className="purple resume-section-title">
                  Skills &amp; Tools
                </h3>
                <Row style={{ gap: "0" }}>
                  {skillGroups.map((group, gi) => (
                    <Col
                      key={gi}
                      xs={12}
                      sm={6}
                      md={4}
                      style={{ marginBottom: "18px" }}
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: gi * 0.08, duration: 0.45 }}
                        className="skill-group-card"
                        style={{ borderTop: `3px solid ${group.color}` }}
                      >
                        <p
                          style={{
                            color: group.color,
                            fontSize: "0.72em",
                            fontWeight: "700",
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                            marginBottom: "10px",
                          }}
                        >
                          {group.label}
                        </p>
                        <div
                          style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "6px",
                          }}
                        >
                          {group.skills.map((skill, si) => (
                            <span
                              key={si}
                              className="skill-pill"
                              style={{
                                background: `rgba(${hexToRgb(group.color)}, 0.1)`,
                                color: "#dddddd",
                                border: `1px solid rgba(${hexToRgb(group.color)}, 0.25)`,
                              }}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </motion.div>

          {/* ── Work Experience ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <Row className="mt-5">
              <Col md={12}>
                <h3 className="purple resume-section-title">Work Experience</h3>

                {/* Company header */}
                <div className="company-header">
                  <div>
                    <h4
                      style={{
                        color: "#ffffff",
                        margin: 0,
                        fontSize: "1.25em",
                      }}
                    >
                      <strong>Sarvika Technologies</strong>
                    </h4>
                    <p
                      style={{
                        color: "#aaaaaa",
                        margin: "3px 0 0",
                        fontSize: "0.9em",
                      }}
                    >
                      Jaipur, India
                    </p>
                  </div>
                  <span className="timeline-badge">
                    Dec 2020 – Present · 5+ yrs
                  </span>
                </div>

                {/* Timeline of roles */}
                <div className="career-timeline">
                  {[
                    {
                      role: "Team Lead",
                      period: "Apr 2026 – Present",
                      color: "#c770f0",
                      isCurrent: true,
                      points: [
                        "👥 Leading a team of 8+ engineers — code reviews, sprint planning, architecture decisions, and delivery; 10+ engineers mentored across projects to date.",
                        "🔍 Serving as project auditor — conducting codebase and architecture audits across the company to identify technical risk and guide remediation.",
                        "🏗️ Driving adoption of Webpack Module Federation microfrontends across multiple enterprise platforms for independent deployments.",
                        "🤖 Integrated AI tools including Claude into the team workflow — accelerating code generation, reviews, and problem solving.",
                        "🛠️ Established component libraries, ESLint configs, Husky hooks, and CI/CD pipelines across all active projects.",
                      ],
                    },
                    {
                      role: "Senior Software Engineer",
                      period: "Jan 2025 – Apr 2026",
                      color: "#a855f7",
                      isCurrent: false,
                      points: [
                        "📱 Built and shipped cross-platform React Native apps to iOS App Store &amp; Google Play Store — BLE device integration, real-time health tracking, AI-powered features.",
                        "🎓 Led frontend architecture for large-scale Ed-Tech SIS + LMS microfrontend platforms serving thousands of users.",
                        "🏥 Independently delivered a full Healthcare RPM web platform — 200+ components, 15+ modules, HIPAA-aware design.",
                        "⚡ Introduced performance patterns: code splitting, lazy loading, Redux async injection — measurably improving load times.",
                      ],
                    },
                    {
                      role: "Software Engineer",
                      period: "Jan 2023 – Jan 2025",
                      color: "#818cf8",
                      isCurrent: false,
                      points: [
                        "Built complex feature modules end-to-end — took full ownership of multi-step workflows, data tables, and form systems.",
                        "Worked across React Native (mobile) and React JS (web) simultaneously on the RPM Healthcare platform.",
                        "Introduced TypeScript, Formik/Yup, and React Hook Form across the team for type-safety and consistent form handling.",
                        "Implemented unit and integration test suites using Jest, Vitest, and React Testing Library across multiple projects.",
                      ],
                    },
                    {
                      role: "Web Developer",
                      period: "Jan 2022 – Jan 2023",
                      color: "#60a5fa",
                      isCurrent: false,
                      points: [
                        "Developed reusable UI components and feature screens for the Online Tutoring Platform (TTB) and Enterprise Workflow Platform.",
                        "Gained deep experience in Redux state management, REST API integration, and multi-role authentication flows.",
                      ],
                    },
                    {
                      role: "Web Developer Trainee",
                      period: "Mar 2021 – Jan 2022",
                      color: "#34d399",
                      isCurrent: false,
                      points: [
                        "Ramped up on the full React ecosystem — hooks, routing, state management, and production-grade coding standards.",
                        "Contributed to real client projects from day one, building screens under senior guidance.",
                      ],
                    },
                    {
                      role: "React Developer Intern",
                      period: "Dec 2020 – Mar 2021 · 3 months",
                      color: "#94a3b8",
                      isCurrent: false,
                      points: [
                        "Joined fresh out of a History degree — self-taught React before the internship, learned professional development workflows.",
                        "The 3-month internship that started a career: proof that curiosity + consistency beats a CS degree every time.",
                      ],
                    },
                  ].map((entry, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-20px" }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      className="career-entry"
                    >
                      <div
                        className="career-dot"
                        style={{
                          background: entry.color,
                          boxShadow: `0 0 10px ${entry.color}`,
                        }}
                      />
                      <div className="career-content">
                        <div className="career-entry-header">
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "10px",
                              flexWrap: "wrap",
                            }}
                          >
                            <h5
                              style={{
                                color: entry.color,
                                margin: 0,
                                fontWeight: "700",
                              }}
                            >
                              {entry.role}
                            </h5>
                            {entry.isCurrent && (
                              <span className="current-badge">Current</span>
                            )}
                          </div>
                          <span className="career-period">{entry.period}</span>
                        </div>
                        <ul
                          className="timeline-list"
                          style={{ marginTop: "10px" }}
                        >
                          {entry.points.map((pt, j) => (
                            <li
                              key={j}
                              dangerouslySetInnerHTML={{ __html: pt }}
                            />
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Col>
            </Row>
          </motion.div>

          {/* ── Projects Overview ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <Row className="mt-5">
              <Col md={12}>
                <h3 className="purple resume-section-title">
                  Projects Overview
                </h3>
                <p style={{ color: "#aaaaaa", marginBottom: "20px" }}>
                  Projects I led and built independently — full details on the{" "}
                  <span className="purple">Projects</span> page.
                </p>

                {[
                  {
                    icon: "🎓",
                    title: "Student Information System (SIS)",
                    color: "#4ade80",
                    rgb: "74,222,128",
                    role: "Led Independently",
                    roleColor: "#a855f7",
                    roleBg: "rgba(168,85,247,0.15)",
                    desc: "Enterprise ed-tech microfrontend platform — Admin Portal (28+ modules, multi-tenant RBAC, WebSocket), Student & Parent Portal (multi-tenant routing, multi-gateway payments, LMS integration), and AI Assessment & Grading Module.",
                    tech: [
                      "React 18",
                      "TypeScript",
                      "Redux",
                      "MUI",
                      "Tailwind",
                      "Webpack MFE",
                      "Docker",
                      "K8s",
                    ],
                  },
                  {
                    icon: "📚",
                    title: "Learning Management System (LMS)",
                    color: "#60a5fa",
                    rgb: "96,165,250",
                    role: "Led Independently",
                    roleColor: "#a855f7",
                    roleBg: "rgba(168,85,247,0.15)",
                    desc: "LMS Admin Portal (14 modules, 683+ JS files, AI content generation, SIS assignment sync) and LMS Student Portal (quizzes, e-portfolio, gamification, real-time messaging) — both as Webpack MFE microfrontends.",
                    tech: [
                      "React 18",
                      "TypeScript",
                      "Redux",
                      "MUI v7",
                      "Webpack MFE",
                      "WebSocket",
                      "CKEditor 5",
                      "K8s",
                    ],
                  },
                  {
                    icon: "🏥",
                    title: "Healthcare Remote Monitoring (RPM)",
                    color: "#f87171",
                    rgb: "248,113,113",
                    role: "Led Independently",
                    roleColor: "#a855f7",
                    roleBg: "rgba(168,85,247,0.15)",
                    desc: "Healthcare RPM Web Platform (200+ components, Kanban CRM, rules engine, RBAC), Patient Mobile App (React Native, BLE medical device integration, Razorpay), and Provider Mobile App (React Native 0.81, deployed to App Store & Play Store).",
                    tech: [
                      "React 18",
                      "React Native",
                      "Redux",
                      "MUI",
                      "Recharts",
                      "BLE Manager",
                      "Firebase",
                      "Vitest",
                      "iOS",
                      "Android",
                    ],
                  },
                  {
                    icon: "⚙️",
                    title: "Enterprise Workflow Platform",
                    color: "#fb923c",
                    rgb: "251,146,60",
                    role: "Team Contribution",
                    roleColor: "#f59e0b",
                    roleBg: "rgba(245,158,11,0.15)",
                    desc: "Microfrontend enterprise platform — 6 independently deployable React modules: Form Builder, Ticket Management System, Certificate Manager, Gatekeeper, Workflow Manager, and Shell App integration.",
                    tech: [
                      "React",
                      "Redux",
                      "MUI v4/v5",
                      "Webpack MFE",
                      "Formik",
                      "Kubernetes",
                    ],
                  },
                  {
                    icon: "👨‍🏫",
                    title: "Online Tutoring Platform",
                    color: "#e879f9",
                    rgb: "232,121,249",
                    role: "Team Contribution",
                    roleColor: "#f59e0b",
                    roleBg: "rgba(245,158,11,0.15)",
                    desc: "Full-stack SaaS tutoring platform — multi-role (students, tutors, admin), real-time messaging via Socket.IO, timezone-aware scheduling, integrated payment and payout system, Dockerized multi-environment deployments.",
                    tech: [
                      "React 16",
                      "Redux",
                      "Socket.IO",
                      "Material UI",
                      "Recharts",
                      "Docker",
                      "Kubernetes",
                    ],
                  },
                  {
                    icon: "🛒",
                    title: "Internal Commerce & Order Management Platform",
                    color: "#34d399",
                    rgb: "52,211,153",
                    role: "Team Contribution",
                    roleColor: "#f59e0b",
                    roleBg: "rgba(245,158,11,0.15)",
                    desc: "Internal e-commerce order management platform built for account executives and order processing teams using the Next.js 14 App Router.",
                    tech: [
                      "Next.js 14",
                      "TypeScript",
                      "Zustand",
                      "TanStack Query",
                      "React Hook Form",
                      "Zod",
                    ],
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="resume-project-card"
                    style={{ borderLeft: `4px solid ${item.color}` }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        marginBottom: "8px",
                        flexWrap: "wrap",
                      }}
                    >
                      <span style={{ fontSize: "1.2em" }}>{item.icon}</span>
                      <h5 style={{ color: item.color, margin: 0 }}>
                        {item.title}
                      </h5>
                      <span
                        style={{
                          background: item.roleBg,
                          color: item.roleColor,
                          padding: "2px 10px",
                          borderRadius: "20px",
                          fontSize: "0.75em",
                        }}
                      >
                        {item.role}
                      </span>
                    </div>
                    <p
                      style={{
                        color: "#aaaaaa",
                        marginBottom: "8px",
                        fontSize: "0.9em",
                      }}
                    >
                      {item.desc}
                    </p>
                    <div
                      style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}
                    >
                      {item.tech.map((t) => (
                        <span
                          key={t}
                          style={{
                            background: `rgba(${item.rgb},0.1)`,
                            color: item.color,
                            padding: "2px 8px",
                            borderRadius: "4px",
                            fontSize: "0.72em",
                            border: `1px solid rgba(${item.rgb},0.25)`,
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </Col>
            </Row>
          </motion.div>

          {/* ── Certifications ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <Row className="mt-5">
              <Col md={12}>
                <h3 className="purple resume-section-title">Certifications</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  {[
                    "Claude Code Actions — Anthropic Certifications",
                    "Agent AI — Anthropic Certifications",
                    "MCP Servers — Anthropic Certifications",
                    "Claude API and Usage — Anthropic Certifications",
                  ].map((cert, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08, duration: 0.4 }}
                      className="skill-pill"
                      style={{
                        background: "rgba(199,112,240,0.1)",
                        color: "#dddddd",
                        border: "1px solid rgba(199,112,240,0.25)",
                      }}
                    >
                      🏅 {cert}
                    </motion.span>
                  ))}
                </div>
              </Col>
            </Row>
          </motion.div>

          {/* ── Education ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <Row className="mt-5" style={{ paddingBottom: "40px" }}>
              <Col md={12}>
                <h3 className="purple resume-section-title">Education</h3>
                {[
                  {
                    degree: "B.A. in History & Political Science",
                    school: "Maharshi Dayanand Saraswati University, Ajmer",
                    year: "2020 – 2023",
                    note: "The degree that 'shouldn't' lead to a tech career — but did. Studying history sharpened systems thinking, root-cause analysis, and storytelling: skills that make me a better engineer and leader every day.",
                    highlight: true,
                  },
                  {
                    degree: "XII — Science Stream",
                    school: "Jai Rana Senior Secondary School, Jasnagar",
                    year: "2018",
                    note: null,
                    highlight: false,
                  },
                  {
                    degree: "X",
                    school: "Jai Rana Senior Secondary School, Jasnagar",
                    year: "2016",
                    note: null,
                    highlight: false,
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.45 }}
                    className="education-card"
                    style={
                      item.highlight
                        ? {
                            borderLeft: "3px solid #c770f0",
                            background: "rgba(199,112,240,0.05)",
                          }
                        : {}
                    }
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        flexWrap: "wrap",
                        gap: "8px",
                      }}
                    >
                      <div style={{ flex: 1 }}>
                        <h5 style={{ color: "#ffffff", margin: 0 }}>
                          🎓 <strong>{item.degree}</strong>
                          {item.highlight && (
                            <span
                              style={{
                                marginLeft: "10px",
                                background: "rgba(199,112,240,0.15)",
                                color: "#c770f0",
                                padding: "2px 10px",
                                borderRadius: "20px",
                                fontSize: "0.65em",
                                fontWeight: "600",
                                verticalAlign: "middle",
                              }}
                            >
                              Non-Traditional Path ✨
                            </span>
                          )}
                        </h5>
                        <p
                          style={{
                            color: "#bbbbbb",
                            marginTop: "5px",
                            marginBottom: item.note ? "10px" : 0,
                          }}
                        >
                          {item.school}
                        </p>
                        {item.note && (
                          <p
                            style={{
                              color: "#888888",
                              fontSize: "0.88em",
                              fontStyle: "italic",
                              margin: 0,
                              lineHeight: "1.6",
                            }}
                          >
                            "{item.note}"
                          </p>
                        )}
                      </div>
                      <span className="timeline-badge">{item.year}</span>
                    </div>
                  </motion.div>
                ))}
              </Col>
            </Row>
          </motion.div>
        </Container>
      </Container>
    </section>
  );
}

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
    : "200, 200, 200";
}

export default Resume;

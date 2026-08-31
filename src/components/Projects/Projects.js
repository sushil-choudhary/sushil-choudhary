import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { motion } from "framer-motion";

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
    : "200, 200, 200";
}

const domains = [
  {
    id: "sis",
    name: "Student Information System",
    short: "SIS",
    icon: "🎓",
    accent: "#4ade80",
    tagline:
      "Enterprise ed-tech platforms for managing academic institutions, student lifecycles, and learning workflows at scale.",
    projects: [
      {
        title: "Ed-Tech Administration Portal",
        shortTag: "SIS · Admin",
        role: "Led Independently",
        types: ["Web", "Microfrontend", "Enterprise"],
        description:
          "Central administrative hub managing educational institutions across districts and schools — covering the full academic lifecycle from enrollment and programs to grading, reporting, and communication.",
        highlights: [
          "28+ feature modules: enrollment, academic programs, reporting, payments, and bulk communication",
          "Webpack Module Federation for independent deployment and lazy-loading of feature modules",
          "Real-time WebSocket notifications for live updates and collaborative workflows",
          "Custom report builder with query engine, executive dashboards, and analytics",
          "Multi-tenant RBAC with fine-grained permissions across users, groups, and policies",
        ],
        tech: [
          "React 18",
          "Redux",
          "MUI v6",
          "Tailwind CSS",
          "Webpack 5 MFE",
          "WebSocket",
          "CKEditor 5",
          "GrapesJS",
          "ECharts",
          "Docker",
          "Kubernetes",
        ],
        scale: "28+ modules · Multi-tenant · Kubernetes + GitLab CI/CD",
      },
      {
        title: "Student & Parent Portal",
        shortTag: "SIS · Student",
        role: "Led Independently",
        types: ["Web", "Microfrontend", "Multi-tenant"],
        description:
          "Production-grade multi-tenant portal serving students and parents across institutions — managing enrollments, payments, LMS integration, and academic communications under full tenant isolation.",
        highlights: [
          "Dynamic tenant routing (/:district/:school/*) isolating config, themes, and data per institution",
          "Multi-gateway payment system with wallet, subscriptions, and PDF ledger generation",
          "Canvas LMS integration for grade fetching, course history, and submission tracking",
          "Form.io-powered dynamic forms and surveys for enrollment agreements and planning",
          "ADA compliance, reCAPTCHA v3, FERPA agreements, and Google Analytics/GTM",
        ],
        tech: [
          "React 18",
          "TypeScript",
          "Redux",
          "MUI v7",
          "Tailwind CSS",
          "Formik",
          "Webpack 5",
          "i18next",
          "Form.io",
          "reCAPTCHA v3",
        ],
        scale:
          "15+ Redux slices · 9+ institutional themes · Multi-gateway payments",
      },
      {
        title: "AI Assessment & Grading Module",
        shortTag: "SIS · AI Grading",
        role: "Led Independently",
        types: ["Web", "Microfrontend", "AI-Powered"],
        description:
          "Production-grade microfrontend module automating student submission evaluation with AI/ML — featuring educator override capabilities, plagiarism detection, and multi-tenant hierarchy support.",
        highlights: [
          "AI-assisted grading with confidence scores, model attribution, and plagiarism detection",
          "Webpack Module Federation remote — zero coupling, independently deployable with shared singletons",
          "Analytics dashboard tracking grading accuracy, completion time, and score deviations",
          "9 dynamic UI themes (light/dark + 7 custom) with real-time switching",
          "District Admin, Registrar, and Root roles with granular permission management",
        ],
        tech: [
          "React 18",
          "Redux",
          "MUI v5",
          "Tailwind CSS",
          "Webpack 5 MFE",
          "Recharts",
          "CKEditor 5",
          "GrapesJS",
          "Docker",
          "Kubernetes",
        ],
        scale:
          "64+ reusable components · Districts → Schools hierarchy · OAuth 2.0",
      },
    ],
  },
  {
    id: "lms",
    name: "Learning Management System",
    short: "LMS",
    icon: "📚",
    accent: "#60a5fa",
    tagline:
      "Full-featured LMS platforms for course delivery, assessments, gamification, and real-time collaborative learning.",
    projects: [
      {
        title: "LMS Administration Portal",
        shortTag: "LMS · Admin",
        role: "Led Independently",
        types: ["Web", "Microfrontend", "Enterprise"],
        description:
          "Enterprise-grade LMS Admin Portal as a Webpack Module Federation microfrontend — supporting multi-tenant, multi-organization course management with deep SIS integration.",
        highlights: [
          "14 modules: course management, assessments, gamification, discussion forums, LTI integrations, and webhooks",
          "AI-powered content generation with WebSocket real-time generation status",
          "Course versioning, copying, merging, and archiving with gradebook history tracking",
          "SIS-level assignment sync across course instances for institution-wide consistency",
          "Redux async reducer injection for performance-optimized state loading",
        ],
        tech: [
          "React 18",
          "Redux",
          "MUI v7",
          "Tailwind CSS",
          "CKEditor 5",
          "GrapesJS",
          "WebSocket",
          "Webpack 5 MFE",
          "Docker",
          "Kubernetes",
        ],
        scale:
          "683+ JS files · 231+ components · 15+ microservices · 3 WebSocket channels",
      },
      {
        title: "LMS Student Portal",
        shortTag: "LMS · Student",
        role: "Led Independently",
        types: ["Web", "Multi-tenant", "Real-time"],
        description:
          "Full-featured LMS student portal for end-to-end digital learning from enrollment to assessment — in a multi-tenant, multi-school environment with real-time features.",
        highlights: [
          "Module-based course delivery with quizzes (multi-attempt), assignments, and rubric-based grading",
          "E-Portfolio with submissions, achievement badges, and public profile sharing",
          "Real-time WebSocket messaging, notifications, and live collaboration",
          "Game-based learning modules with drag-and-drop content and rich-text editing",
          "10+ configurable institutional themes with multi-language support",
        ],
        tech: [
          "React 18",
          "TypeScript",
          "Redux",
          "MUI v7",
          "Tailwind CSS",
          "WebSocket",
          "Recharts",
          "Webpack 5",
          "Docker",
          "Kubernetes",
        ],
        scale:
          "23 containers · 109+ components · 13 reducers · 10+ microservices",
      },
      {
        title: "License Management Dashboard",
        shortTag: "LMS · License",
        role: "Team Contribution",
        types: ["Web", "Next.js 15", "Admin"],
        description:
          "Full-stack multi-tenant License Management portal built with Next.js 15 — managing software licenses, tenant accounts, user access, and application feature configurations for enterprise SaaS.",
        highlights: [
          "Next.js 15 App Router with server/client component separation and protected API routes",
          "Multi-tenant architecture with tenant-scoped API requests via dynamic header injection",
          "AI-powered document indexing and semantic search for enterprise knowledge management",
          "OAuth auth gateway with session management and automatic token refresh",
          "Multi-stage Docker builds with SonarQube quality gates in GitLab CI/CD",
        ],
        tech: [
          "Next.js 15",
          "React 19",
          "TypeScript",
          "Redux Toolkit",
          "MUI v6",
          "Formik",
          "Axios",
          "Docker",
          "Kubernetes",
        ],
        scale: "Multi-tenant SaaS · Next.js App Router · Redux Toolkit",
      },
    ],
  },
  {
    id: "rpm",
    name: "Healthcare Remote Monitoring",
    short: "RPM",
    icon: "🏥",
    accent: "#f87171",
    tagline:
      "Comprehensive healthcare platforms for remote patient monitoring, wellness management, and provider-patient collaboration.",
    projects: [
      {
        title: "Healthcare RPM Web Platform",
        shortTag: "RPM · Web",
        role: "Led Independently",
        types: ["Web", "Healthcare SaaS", "Enterprise"],
        description:
          "Comprehensive Remote Patient Management platform enabling healthcare providers, doctors, and administrators to monitor patient health, manage treatment programs, and streamline clinical workflows.",
        highlights: [
          "Real-time vital signs dashboard (BP, Glucose, Pulse) with Recharts and date-range filtering",
          "Kanban-style CRM pipeline using @dnd-kit for patient lead management with scoring and analytics",
          "Flexible rules engine for medication adherence, prescriptions, and appointment follow-ups",
          "Fine-grained RBAC with 15+ permission types across user groups and policies",
          "Full audit trail logging for healthcare compliance (HIPAA-aware design)",
          "Unit and integration test coverage using Vitest and React Testing Library",
        ],
        tech: [
          "React 18",
          "Redux",
          "MUI v5",
          "Tailwind CSS",
          "Recharts",
          "@dnd-kit",
          "Axios",
          "i18next (EN/FR)",
          "Vitest",
          "Docker",
          "Kubernetes",
        ],
        scale:
          "200+ components · 15+ modules · ~182K lines · 10+ microservices",
      },
      {
        title: "Patient Healthcare Mobile App",
        shortTag: "RPM · Patient",
        role: "Led Independently",
        types: ["Mobile", "React Native", "iOS & Android"],
        description:
          "Cross-platform React Native app helping patients manage chronic conditions through real-time health tracking, Bluetooth medical device integration, medication adherence, and provider communication.",
        highlights: [
          "BLE Bluetooth integration with medical devices — BP monitors and glucose meters",
          "AI-powered meal identification with calorie tracking and nutritional analysis",
          "Prescription management with smart reminders and adherence reporting",
          "Razorpay payment gateway for subscription plan management",
          "Downloadable PDF health assessments, trend charts, and compliance summaries",
        ],
        tech: [
          "React Native 0.68",
          "Redux",
          "NativeBase",
          "BLE Manager",
          "Protobuf",
          "Firebase FCM",
          "Razorpay",
          "SQLite",
          "AsyncStorage",
          "Formik",
        ],
        scale: "iOS & Android · EN/HI multilingual · Bluetooth IoT integration",
      },
      {
        title: "Provider & Wellness Mobile App",
        shortTag: "RPM · Provider",
        role: "Led Independently",
        types: ["Mobile", "React Native", "Store Deployed"],
        description:
          "Cross-platform health and wellness management app for dietitians and fitness trainers — bridging providers and clients through unified remote monitoring with AI-assisted care plan creation.",
        highlights: [
          "Dual-role app: distinct workflows and dashboards for providers and clients",
          "AI-assisted diet plan creation with food search, nutritional tracking, and disliked food management",
          "Workout program builder with exercise catalogs, muscle targeting, and equipment filtering",
          "QR code scan-to-link for seamless provider-client onboarding",
          "Deployed and live on iOS App Store and Google Play Store",
        ],
        tech: [
          "React Native 0.81",
          "TypeScript",
          "Redux Toolkit",
          "React Navigation",
          "Axios",
          "React Hook Form",
          "Yup",
          "i18next",
          "Lottie",
          "SonarQube",
        ],
        scale:
          "iOS App Store · Google Play Store · 9 wellness goals · 8+ microservices",
      },
    ],
  },
  {
    id: "clowre",
    name: "Enterprise Workflow Platform",
    short: "Clowre",
    icon: "⚙️",
    accent: "#fb923c",
    tagline:
      "Microfrontend enterprise platform with independently deployable modules for workflow automation, form building, and team collaboration.",
    projects: [
      {
        title: "Enterprise Workflow Platform",
        shortTag: "Workflow · Suite",
        role: "Team Contribution",
        types: ["Web", "Microfrontend", "Enterprise"],
        description:
          "Enterprise platform built as a microfrontend architecture — 6 independently deployable React application modules for workflow management, form building, ticketing, certificate management, and access control.",
        highlights: [
          "Form Builder: UI redesign, sidebar navigation, form lock validation, and dashboard widget API integrations",
          "Ticket Management System: AllTickets, ArchivedTickets, CreateTicket screens with history and requester filters",
          "Certificate Manager: template API integration, Material-UI migration, and route management",
          "Gatekeeper & Workflow Manager: deployment config and health check endpoint updates",
          "Shell App: TMS module federation wiring and AGM permission verbiage management",
        ],
        tech: [
          "React",
          "Redux",
          "MUI v4/v5",
          "Formik",
          "Axios",
          "React Router",
          "i18next",
          "SCSS",
          "Webpack MFE",
          "Kubernetes",
        ],
        scale: "6 microfrontend modules · Multi-env: dev / UAT / stage / prod",
      },
    ],
  },
  {
    id: "ttb",
    name: "Online Tutoring Platform",
    short: "TTB",
    icon: "👨‍🏫",
    accent: "#e879f9",
    tagline:
      "Enterprise-grade SaaS platform connecting students with tutors through real-time scheduling, messaging, and integrated payments.",
    projects: [
      {
        title: "Online Tutoring Platform",
        shortTag: "Tutoring · SaaS",
        role: "Team Contribution",
        types: ["Web", "SaaS", "Real-time"],
        description:
          "Enterprise-grade online tutoring SaaS connecting students with tutors — two React web apps (user portal + admin dashboard) with full CI/CD, real-time class features, and integrated payment processing.",
        highlights: [
          "Multi-role platform: students, tutors, and administrators with distinct workflows",
          "Real-time messaging and class interaction via WebSocket / Socket.IO",
          "Timezone-aware class scheduling and tutor availability management",
          "Integrated payment system with wallet, subscriptions, and tutor payout tracking",
          "Admin dashboard with analytics, audit logs, and bulk user management",
        ],
        tech: [
          "React 16",
          "Redux",
          "Material UI",
          "Socket.IO",
          "Axios",
          "Recharts",
          "i18next",
          "Docker",
          "Kubernetes",
          "GitLab CI/CD",
        ],
        scale:
          "Multi-role SaaS · SSO integration · Dockerized multi-env deployments",
      },
    ],
  },
  {
    id: "commerce",
    name: "Internal Commerce & Order Management",
    short: "Commerce",
    icon: "🛒",
    accent: "#34d399",
    tagline:
      "Internal e-commerce order management platform built for account executives and order processing teams.",
    projects: [
      {
        title: "Internal Commerce & Order Management Platform",
        shortTag: "Commerce · Internal",
        role: "Team Contribution",
        types: ["Web", "Next.js 14", "Internal Tool"],
        description:
          "Internal order management platform for account executives and order processing teams, built on the Next.js 14 App Router with modern client-state and form-validation tooling.",
        highlights: [
          "Built with Next.js 14 App Router for server/client component separation",
          "Zustand for lightweight global state management",
          "TanStack Query for server-state caching and data synchronization",
          "React Hook Form with Zod schema validation for robust, type-safe forms",
        ],
        tech: [
          "Next.js 14",
          "TypeScript",
          "Zustand",
          "TanStack Query",
          "React Hook Form",
          "Zod",
        ],
        scale: "Next.js App Router · Order processing workflows",
      },
    ],
  },
];

function ProjectCard({ project, accent }) {
  const rgb = hexToRgb(accent);
  const roleIsIndependent = project.role === "Led Independently";

  return (
    <motion.div
      whileHover={{ y: -6, boxShadow: `0 16px 40px rgba(${rgb}, 0.25)` }}
      transition={{ duration: 0.25 }}
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.04)",
        borderRadius: "14px",
        padding: "24px",
        height: "100%",
        border: `1px solid rgba(${rgb}, 0.15)`,
        borderTop: `3px solid ${accent}`,
        display: "flex",
        flexDirection: "column",
        backdropFilter: "blur(6px)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: "8px",
          marginBottom: "10px",
        }}
      >
        <span
          style={{
            color: accent,
            fontSize: "0.75em",
            fontFamily: "monospace",
            fontWeight: "600",
            letterSpacing: "0.05em",
          }}
        >
          {project.shortTag}
        </span>
        <span
          style={{
            background: roleIsIndependent
              ? "rgba(168, 85, 247, 0.15)"
              : "rgba(245, 158, 11, 0.15)",
            color: roleIsIndependent ? "#a855f7" : "#f59e0b",
            padding: "2px 10px",
            borderRadius: "20px",
            fontSize: "0.72em",
            fontWeight: "600",
            whiteSpace: "nowrap",
          }}
        >
          {project.role}
        </span>
      </div>

      <h4
        style={{
          color: "#ffffff",
          fontSize: "1.1em",
          fontWeight: "600",
          marginBottom: "10px",
          lineHeight: "1.4",
        }}
      >
        {project.title}
      </h4>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "6px",
          marginBottom: "14px",
        }}
      >
        {project.types.map((type, i) => (
          <span
            key={i}
            style={{
              background: "rgba(255,255,255,0.07)",
              color: "#cccccc",
              padding: "2px 9px",
              borderRadius: "4px",
              fontSize: "0.7em",
              fontWeight: "500",
            }}
          >
            {type}
          </span>
        ))}
      </div>

      <p
        style={{
          color: "#999999",
          fontSize: "0.88em",
          lineHeight: "1.65",
          marginBottom: "16px",
        }}
      >
        {project.description}
      </p>

      <div style={{ marginBottom: "18px", flex: 1 }}>
        <p
          style={{
            color: "#cccccc",
            fontSize: "0.75em",
            fontWeight: "700",
            marginBottom: "8px",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
          }}
        >
          Key Highlights
        </p>
        <ul style={{ paddingLeft: "16px", margin: 0 }}>
          {project.highlights.map((h, i) => (
            <li
              key={i}
              style={{
                color: "#aaaaaa",
                fontSize: "0.84em",
                marginBottom: "6px",
                lineHeight: "1.5",
              }}
            >
              {h}
            </li>
          ))}
        </ul>
      </div>

      <div style={{ marginBottom: "14px" }}>
        <p
          style={{
            color: "#cccccc",
            fontSize: "0.75em",
            fontWeight: "700",
            marginBottom: "8px",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
          }}
        >
          Tech Stack
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
          {project.tech.map((t, i) => (
            <span
              key={i}
              style={{
                background: `rgba(${rgb}, 0.1)`,
                color: accent,
                padding: "3px 8px",
                borderRadius: "4px",
                fontSize: "0.7em",
                fontWeight: "500",
                border: `1px solid rgba(${rgb}, 0.22)`,
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <p
        style={{
          color: "#666666",
          fontSize: "0.75em",
          marginBottom: 0,
          fontStyle: "italic",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          paddingTop: "12px",
        }}
      >
        📊 {project.scale}
      </p>
    </motion.div>
  );
}

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <Row style={{ paddingBottom: "20px" }}>
            <Col md={12} className="text-center">
              <h1 className="project-heading">
                My <strong className="purple">Projects</strong>
              </h1>
              <p
                style={{
                  color: "#aaaaaa",
                  fontSize: "1.05em",
                  maxWidth: "680px",
                  margin: "0 auto",
                  lineHeight: "1.7",
                }}
              >
                Enterprise platforms I've architected and led across Ed-Tech,
                Healthcare, and Enterprise SaaS domains — from web
                microfrontends to mobile apps deployed on App Stores.
              </p>
            </Col>
          </Row>

          <Row style={{ paddingBottom: "40px" }}>
            <Col
              md={12}
              className="d-flex justify-content-center"
              style={{ gap: "24px", flexWrap: "wrap" }}
            >
              <span
                style={{
                  color: "#aaaaaa",
                  fontSize: "0.85em",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <span
                  style={{
                    background: "rgba(168,85,247,0.2)",
                    color: "#a855f7",
                    padding: "2px 10px",
                    borderRadius: "20px",
                    fontSize: "0.85em",
                  }}
                >
                  Led Independently
                </span>
                Full ownership, architecture &amp; delivery
              </span>
              <span
                style={{
                  color: "#aaaaaa",
                  fontSize: "0.85em",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <span
                  style={{
                    background: "rgba(245,158,11,0.2)",
                    color: "#f59e0b",
                    padding: "2px 10px",
                    borderRadius: "20px",
                    fontSize: "0.85em",
                  }}
                >
                  Team Contribution
                </span>
                Significant contribution in a team
              </span>
            </Col>
          </Row>
        </motion.div>

        {domains.map((domain, domainIdx) => {
          const rgb = hexToRgb(domain.accent);
          const colProps =
            domain.projects.length === 1
              ? { xs: 12, md: 10, lg: 8 }
              : domain.projects.length === 2
                ? { xs: 12, md: 6 }
                : { xs: 12, md: 6, lg: 4 };

          return (
            <motion.div
              key={domain.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, delay: 0.1 }}
              style={{ marginBottom: "64px" }}
            >
              <div
                style={{
                  borderLeft: `4px solid ${domain.accent}`,
                  paddingLeft: "20px",
                  marginBottom: "32px",
                  background: `rgba(${rgb}, 0.04)`,
                  borderRadius: "0 8px 8px 0",
                  padding: "16px 20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    flexWrap: "wrap",
                  }}
                >
                  <span style={{ fontSize: "1.8em" }}>{domain.icon}</span>
                  <div>
                    <h2
                      style={{
                        color: "#ffffff",
                        fontSize: "1.5em",
                        margin: 0,
                        fontWeight: "700",
                      }}
                    >
                      {domain.name}
                      <span
                        style={{
                          color: domain.accent,
                          fontSize: "0.6em",
                          marginLeft: "10px",
                          fontWeight: "600",
                          verticalAlign: "middle",
                          background: `rgba(${rgb}, 0.12)`,
                          padding: "2px 10px",
                          borderRadius: "20px",
                        }}
                      >
                        {domain.short}
                      </span>
                    </h2>
                    <p
                      style={{
                        color: "#999999",
                        margin: "4px 0 0",
                        fontSize: "0.9em",
                        lineHeight: "1.5",
                      }}
                    >
                      {domain.tagline}
                    </p>
                  </div>
                </div>
              </div>

              <Row
                className={
                  domain.projects.length === 1 ? "justify-content-center" : ""
                }
              >
                {domain.projects.map((project, idx) => (
                  <Col key={idx} {...colProps} style={{ marginBottom: "24px" }}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ delay: idx * 0.12, duration: 0.5 }}
                      style={{ height: "100%" }}
                    >
                      <ProjectCard project={project} accent={domain.accent} />
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </motion.div>
          );
        })}
      </Container>
    </Container>
  );
}

export default Projects;

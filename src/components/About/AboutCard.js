import React from "react";
import Card from "react-bootstrap/Card";
import { motion } from "framer-motion";
import { ImPointRight } from "react-icons/im";

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

function AboutCard() {
  return (
    <Card className="quote-card-view about-card-glass">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey! I'm <span className="purple">Sushil Choudhary</span> from{" "}
            <span className="purple">Jaipur, India</span> — and yes, I have a{" "}
            <b className="purple">B.A. in History &amp; Political Science</b>.
            Not exactly the degree you'd expect from a{" "}
            <b className="purple">Team Lead &amp; Full Stack Developer</b>,
            right?
            <br />
            <br />
            But here's the thing — studying History taught me to think in
            systems, trace root causes, and understand why things work the way
            they do. Those same skills drive how I architect software, lead
            teams, and debug complex problems. The subject changed; the mindset
            didn't.
            <br />
            <br />I taught myself to code, landed a{" "}
            <b className="purple">React internship</b>, and what started as a
            3-month experiment turned into a{" "}
            <b className="purple">5+ year career journey</b> — from intern to
            Team Lead, one promotion at a time. Today I lead{" "}
            <b className="purple">8+ engineers</b> at Sarvika Technologies,
            having mentored <b className="purple">10+ engineers</b> across
            projects to date, while staying hands-on as a{" "}
            <b className="purple">React Native &amp; React JS developer</b>,
            shipping real products to real App Stores.
            <br />
            <br />
            I've architected enterprise platforms across{" "}
            <b className="purple">Ed-Tech</b>,{" "}
            <b className="purple">Healthcare</b>, and{" "}
            <b className="purple">Enterprise SaaS</b> — and I also serve as{" "}
            <b className="purple">project auditor</b>, regularly reviewing
            codebases and architecture across the company for quality and
            technical risk. I integrate{" "}
            <b className="purple">AI tools including Claude</b> into my daily
            workflow to keep the team moving faster than ever.
          </p>

          <hr className="about-divider" />

          <p style={{ fontWeight: "bold" }} className="purple">
            ⚙️ Tech Toolbox:
          </p>
          <motion.ul
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              "React Native (iOS & Android, App Store & Play Store)",
              "ReactJS, Next.js, TypeScript, Redux Toolkit, Zustand",
              "Micro Frontends, Webpack Module Federation",
              "Node.js, NestJS, REST APIs, gRPC, JWT",
              "Material UI, Tailwind CSS, NativeBase, React Navigation",
              "Jest, Vitest, React Testing Library — unit & integration testing",
              "Docker, Kubernetes, GitLab CI/CD, SonarQube",
              "GitHub, GitLab, Bitbucket, VS Code, Postman, JIRA",
            ].map((item, i) => (
              <motion.li key={i} variants={itemVariants}>
                <ImPointRight /> {item}
              </motion.li>
            ))}
          </motion.ul>

          <p style={{ fontWeight: "bold" }} className="purple">
            💡 Leadership &amp; Soft Skills:
          </p>
          <motion.ul
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              "Team Leadership — leading 8+ engineers, mentored 10+ to date",
              "Project & Codebase Auditing — architecture and quality reviews across teams",
              "End-to-end Project Ownership & Delivery",
              "Agile / Scrum mindset with cross-functional collaboration",
              "AI-augmented development (Claude, Copilot)",
            ].map((item, i) => (
              <motion.li key={i} variants={itemVariants}>
                <ImPointRight /> {item}
              </motion.li>
            ))}
          </motion.ul>

          <hr className="about-divider" />

          <p style={{ fontWeight: "bold" }} className="purple">
            🧠 When I'm not coding...
          </p>
          <motion.ul
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              "Taking my bike out for soul-healing rides and sometimes just for chai 🏍️☕",
              "Cooking experiments — sometimes edible, always ambitious 🍳🔥",
            ].map((item, i) => (
              <motion.li
                key={i}
                variants={itemVariants}
                className="about-activity"
              >
                <ImPointRight /> {item}
              </motion.li>
            ))}
          </motion.ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

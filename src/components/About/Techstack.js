import React from "react";
import { Col, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import { SiTypescript, SiRedux, SiTailwindcss } from "react-icons/si";

const techItems = [
  { icon: <DiReact />, label: "React JS" },
  {
    icon: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
        alt="Next.js"
        title="Next.js"
        style={{ height: "50px", padding: "10px", filter: "invert(1)" }}
      />
    ),
    label: "Next.js",
  },
  { icon: <SiTypescript />, label: "TypeScript" },
  { icon: <SiRedux />, label: "Redux" },
  { icon: <DiJavascript1 />, label: "JavaScript" },
  { icon: <DiNodejs />, label: "Node.js" },
  {
    icon: (
      <img
        src="https://nestjs.com/img/logo-small.svg"
        alt="NestJS"
        title="NestJS"
        style={{ height: "50px", padding: "10px" }}
      />
    ),
    label: "NestJS",
  },
  {
    icon: (
      <img
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg"
        alt="Material UI"
        title="Material UI"
        style={{ height: "50px", padding: "10px" }}
      />
    ),
    label: "Material UI",
  },
  { icon: <SiTailwindcss />, label: "Tailwind CSS" },
  { icon: <DiGit />, label: "Git" },
  { icon: <DiHtml5 />, label: "HTML5" },
  { icon: <DiCss3 />, label: "CSS3" },
];

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techItems.map((item, i) => (
        <Col key={i} xs={4} md={2} style={{ textAlign: "center", marginBottom: "8px" }}>
          <motion.div
            style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
            initial={{ opacity: 0, y: 30, scale: 0.85 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.06, duration: 0.45, ease: "easeOut" }}
          >
            <div className="tech-icons">{item.icon}</div>
            <p className="tech-label">{item.label}</p>
          </motion.div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;

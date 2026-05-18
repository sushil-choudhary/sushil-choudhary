import React from "react";
import { Col, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiDocker,
  SiKubernetes,
  SiGithub,
  SiGitlab,
  SiJira,
  SiFigma,
} from "react-icons/si";

const toolItems = [
  { icon: <SiVisualstudiocode />, label: "VS Code" },
  { icon: <SiGithub />, label: "GitHub" },
  { icon: <SiGitlab />, label: "GitLab" },
  { icon: <SiDocker />, label: "Docker" },
  { icon: <SiKubernetes />, label: "Kubernetes" },
  { icon: <SiPostman />, label: "Postman" },
  { icon: <SiJira />, label: "JIRA" },
  { icon: <SiFigma />, label: "Figma" },
  { icon: <SiLinux />, label: "Linux" },
];

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {toolItems.map((item, i) => (
        <Col key={i} xs={4} md={2} style={{ textAlign: "center", marginBottom: "8px" }}>
          <motion.div
            style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
            initial={{ opacity: 0, y: 30, scale: 0.85 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.07, duration: 0.45, ease: "easeOut" }}
          >
            <div className="tech-icons">{item.icon}</div>
            <p className="tech-label">{item.label}</p>
          </motion.div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;

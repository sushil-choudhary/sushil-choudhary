import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.18, duration: 0.65, ease: "easeOut" },
  }),
};

const techStack = [
  "React JS",
  "React Native",
  "TypeScript",
  "Node.js",
  "Webpack MF",
  "AWS",
];

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <motion.h1
                custom={0}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                style={{ paddingBottom: 15 }}
                className="heading"
              >
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </motion.h1>

              <motion.h1
                custom={1}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="heading-name"
              >
                I'M
                <strong className="main-name gradient-name">
                  {" "}
                  SUSHIL CHOUDHARY
                </strong>
              </motion.h1>

              <motion.div
                custom={2}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                style={{ padding: 50, textAlign: "left" }}
              >
                <Type />
              </motion.div>

              <motion.div
                custom={3}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="tech-badges"
              >
                {techStack.map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </motion.div>

              <motion.div
                custom={4}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="home-cta-buttons"
              >
                <Link to="/project">
                  <button className="btn-cta-primary">View Projects</button>
                </Link>
                <Link to="/resume">
                  <button className="btn-cta-secondary">My Resume</button>
                </Link>
              </motion.div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <motion.img
                src={homeLogo}
                alt="home pic"
                className="img-fluid home-logo-animated"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;

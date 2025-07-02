import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
// import resumeImage from "../../Assets/resume.svg"; // use a minimal SVG or comment out
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillPhone,
  AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Resume() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Sushil.pdf";
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
          <Row
            className="align-items-center justify-content-center"
            style={{ minHeight: "1vh" }}
          >
            <Col
              md={7}
              className="d-flex flex-column align-items-center text-center"
            >
              <h1 className="heading-name" style={{ paddingBottom: 10 }}>
                <strong className="main-name">SUSHIL CHOUDHARY</strong>
              </h1>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="resume-social">
              <ul className="resume-social-links">
                <li className="resume-social-icons">
                  <a
                    href="https://github.com/sushil-choudhary"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="resume-social-icons">
                  <a
                    href="https://twitter.com/sushil_chotiya"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiOutlineTwitter />
                  </a>
                </li>
                <li className="resume-social-icons">
                  <a
                    href="https://www.linkedin.com/in/sushil-choudhary-0545211b3/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="resume-social-icons">
                  <a
                    href="https://www.instagram.com/sushil.choudhary4/#"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
                <li className="resume-social-icons">
                  <a
                    href="tel:7340321143"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiFillPhone />
                  </a>
                </li>
                <li className="resume-social-icons">
                  <a
                    href="mailto:sushilchoudhary9871@gmail.com"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiFillMail />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md={12}>
              <h3 className="purple">Skills & Tools</h3>
              <div
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "12px",
                  padding: "25px",
                  borderLeft: "4px solid #a855f7",
                }}
              >
                <Row>
                  {[
                    "ReactJS",
                    "Next.js",
                    "Micro frontends",
                    "Module Federation",
                    "Redux",
                    "Zustand",
                    "TypeScript",
                    "React Native",
                    "NodeJS",
                    "NestJS",
                    "JavaScript",
                    "Material UI",
                    "PrimeReact",
                    "JWT",
                    "REST APIs",
                    "JIRA",
                    "Confluence",
                    "GitLab",
                    "GitHub",
                    "Bitbucket",
                    "VS Code",
                    "Postman",
                    "Team Leadership",
                    "Problem Solving",
                    "Project Management",
                  ].map((skill, idx) => (
                    <Col key={idx} xs={12} sm={6} md={4} className="mb-2">
                      <span style={{ color: "white" }}>🔹 {skill}</span>
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md={12}>
              <h3 className="purple">Work Experience</h3>
              <div
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "12px",
                  padding: "25px",
                  borderLeft: "4px solid #a855f7", // a nice purple accent
                }}
              >
                <h4 style={{ color: "#ffffff" }}>
                  <strong>Senior React Developer</strong>
                  <span
                    style={{
                      color: "#aaaaaa",
                      fontSize: "0.9em",
                      marginLeft: "10px",
                    }}
                  >
                    @ Sarvika Technologies, Jaipur
                  </span>
                </h4>
                <p
                  style={{
                    color: "#bbbbbb",
                    marginTop: "-5px",
                    fontStyle: "italic",
                  }}
                >
                  Dec 2020 – Present
                </p>

                <ul
                  style={{
                    color: "white",
                    paddingLeft: "20px",
                    marginTop: "15px",
                  }}
                >
                  <li style={{ marginBottom: "10px" }}>
                    🚀 Pioneered the adoption of{" "}
                    <strong>micro frontends</strong> and{" "}
                    <strong>module federation</strong> to build scalable,
                    independently deployable UI modules.
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    🧠 Led frontend architecture for high-impact{" "}
                    <strong>ed-tech and e-commerce platforms</strong> using
                    React, Redux, and Next.js.
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    🎨 Transformed UI/UX wireframes into polished, responsive
                    interfaces in close collaboration with designers.
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    🛠️ Created a library of <strong>reusable components</strong>{" "}
                    with Material UI & PrimeReact to speed up development and
                    enforce consistency.
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    🤝 Mentored junior developers, enforced best practices, and
                    elevated team-wide frontend code standards.
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md={12}>
              <h3 className="purple">Projects</h3>
              <div
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "12px",
                  padding: "25px",
                  borderLeft: "4px solid #a855f7",
                }}
              >
                <ul
                  style={{
                    color: "white",
                    paddingLeft: "20px",
                    marginBottom: 0,
                  }}
                >
                  <li style={{ marginBottom: "15px" }}>
                    🎓 <strong>LearnStage:</strong> A full-featured{" "}
                    <strong>
                      cloud-based Student Information System (SIS)
                    </strong>{" "}
                    and LMS helping schools manage online learning, reporting,
                    analytics, and tutoring — built with React, Next.js &
                    PrimeReact.
                  </li>
                  <li style={{ marginBottom: "15px" }}>
                    🛒 <strong>Halo Connect:</strong> A{" "}
                    <strong>drop-shipping e-commerce platform</strong> for
                    managing orders, products, customers, and billing workflows
                    using <strong>Next.js, TypeScript</strong>, and scalable
                    frontend architecture.
                  </li>
                  <li style={{ marginBottom: "15px" }}>
                    🍷 <strong>Pernod:</strong> A robust{" "}
                    <strong>inventory management system</strong> for the liquor
                    industry, streamlining product tracking, distribution, and
                    logistics — inspired by operations like{" "}
                    <em>Pernod Ricard</em>.
                  </li>
                  <li>
                    ⚙️ <strong>Clowre:</strong> A modular,{" "}
                    <strong>microservices-driven platform</strong> for deploying
                    applications of any scale — built to support both standalone
                    services and extendable systems.
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md={12}>
              <h3 className="purple">Education</h3>

              {[
                {
                  degree: "X",
                  school: "Jai Rana Senior Secondary School, Jasnagar",
                  year: "2016",
                },
                {
                  degree: "XII",
                  school: "Jai Rana Senior Secondary School, Jasnagar",
                  year: "2018",
                },
                {
                  degree: "B.A. in History & Political Science",
                  school: "Maharshi Dayanand Saraswati University, Ajmer",
                  year: "2020 – 2023",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    borderRadius: "12px",
                    padding: "25px",
                    borderLeft: "4px solid #a855f7",
                    marginBottom: "16px",
                  }}
                >
                  <h5 style={{ color: "#ffffff" }}>
                    🎓 <strong>{item.degree}</strong>
                  </h5>
                  <p style={{ color: "#bbbbbb", marginTop: "5px" }}>
                    {item.school}
                  </p>
                  <p
                    style={{
                      color: "#aaaaaa",
                      fontStyle: "italic",
                      marginTop: "-10px",
                    }}
                  >
                    {item.year}
                  </p>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Resume;

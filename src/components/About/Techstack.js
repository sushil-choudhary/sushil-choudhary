import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import { SiTypescript, SiRedux, SiTailwindcss } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      {/* Next.js */}
      <Col xs={4} md={2} className="tech-icons">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
          alt="Next.js"
          title="Next.js"
          style={{ height: "50px", padding: "10px", filter: "invert(1)" }}
        />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>

      {/* NestJS */}
      <Col xs={4} md={2} className="tech-icons">
        <img
          src="https://nestjs.com/img/logo-small.svg"
          alt="NestJS"
          title="NestJS"
          style={{ height: "50px", padding: "10px" }}
        />
      </Col>

      {/* Material UI */}
      <Col xs={4} md={2} className="tech-icons">
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg"
          alt="Material UI"
          title="Material UI"
          style={{ height: "50px", padding: "10px" }}
        />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
    </Row>
  );
}

export default Techstack;

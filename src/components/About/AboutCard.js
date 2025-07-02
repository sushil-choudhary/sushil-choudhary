import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello! I'm <span className="purple">Sushil Choudhary</span> from{" "}
            <span className="purple">Jaipur, India</span>. My path into tech
            wasn’t your typical CS-grad story — I earned a{" "}
            <b className="purple">B.A. in History & Political Science</b> and
            took a leap into code through self-learning and a React internship.
            <br />
            <br />
            That internship turned into a trainee role, then into a full-time
            web developer job. Over time, I worked my way up to{" "}
            <b className="purple">Software Engineer</b> and now proudly work as
            a <b className="purple">Senior Software Engineer</b> at Sarvika
            Technologies — leading frontend architecture and building scalable
            products with React, Next.js, TypeScript, and more.
            <br />
            <br />I believe in building things that are not just functional, but
            also elegant, efficient, and user-focused. My mission as a developer
            is to craft clean, maintainable code that empowers teams and
            improves lives. And when I’m not writing code, I’m usually
            mentoring, learning something new, or finding a better way to do
            both.
          </p>

          <hr />

          <p style={{ fontWeight: "bold" }} className="purple">
            ⚙️ Tech Toolbox:
          </p>
          <ul>
            <li>
              <ImPointRight /> ReactJS, Next.js, TypeScript, Redux, Zustand
            </li>
            <li>
              <ImPointRight /> Node.js, NestJS, REST APIs, JWT
            </li>
            <li>
              <ImPointRight /> Micro Frontends, Module Federation
            </li>
            <li>
              <ImPointRight /> Material UI, PrimeReact, React Native
            </li>
            <li>
              <ImPointRight /> GitHub, GitLab, Bitbucket, VS Code, Postman
            </li>
            <li>
              <ImPointRight /> JIRA, Confluence | Linux + Windows environments
            </li>
          </ul>

          <p style={{ fontWeight: "bold" }} className="purple">
            💡 Soft Skills:
          </p>
          <ul>
            <li>
              <ImPointRight /> Project Ownership & Agile Mindset
            </li>
            <li>
              <ImPointRight /> Mentorship & Team Collaboration
            </li>
            <li>
              <ImPointRight /> Empathy-Driven Problem Solving
            </li>
          </ul>

          <hr />

          <p style={{ fontWeight: "bold" }} className="purple">
            🧠 When I'm not coding...
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Taking my bike out for soul-healing rides and
              sometimes just for chai 🏍️☕
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking experiments — sometimes edible, always
              ambitious 🍳🔥
            </li>
          </ul>

          {/* <p
            style={{
              marginBlockEnd: 0,
              color: "rgb(155 126 172)",
              fontStyle: "italic",
            }}
          >
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer">Sushil Choudhary</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

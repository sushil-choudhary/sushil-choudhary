import React, { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillPhone,
  AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const stats = [
  { end: 5, suffix: "+", label: "Years Experience" },
  { end: 8, suffix: "+", label: "Engineers Led" },
  { end: 10, suffix: "+", label: "Engineers Mentored" },
  { end: 10, suffix: "+", label: "Projects Shipped" },
];

function StatCard({ end, suffix, label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="stat-card">
      <h2 className="stat-number">
        {isInView ? <CountUp end={end} duration={2.2} suffix={suffix} /> : "0"}
      </h2>
      <p className="stat-label">{label}</p>
    </div>
  );
}

function Home2() {
  const bodyRef = useRef(null);
  const avatarRef = useRef(null);
  const socialRef = useRef(null);

  const bodyInView = useInView(bodyRef, { once: true, margin: "-80px" });
  const avatarInView = useInView(avatarRef, { once: true, margin: "-80px" });
  const socialInView = useInView(socialRef, { once: true, margin: "-60px" });

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="justify-content-center stats-row">
          {stats.map((stat, i) => (
            <Col key={i} xs={6} sm={3} md={2}>
              <StatCard {...stat} />
            </Col>
          ))}
        </Row>
      </Container>

      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <motion.h1
              ref={bodyRef}
              initial={{ opacity: 0, y: 30 }}
              animate={bodyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              style={{ fontSize: "2.6em" }}
            >
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </motion.h1>
            <motion.p
              className="home-about-body"
              initial={{ opacity: 0, y: 30 }}
              animate={bodyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              I'm a <b className="purple">Team Lead & Full Stack Developer</b>{" "}
              leading a team of <b className="purple">8+ engineers</b>, having
              mentored <b className="purple">10+ engineers</b> across projects
              to date, while actively building enterprise-grade products. My
              journey started with curiosity and grew into a deep obsession with
              crafting things that actually work at scale 🚀
              <br />
              <br />I specialize in{" "}
              <i>
                <b className="purple">React Native</b>
              </i>{" "}
              (iOS &amp; Android, including{" "}
              <b className="purple">App Store &amp; Play Store deployments</b>)
              and{" "}
              <i>
                <b className="purple">React JS</b>
              </i>{" "}
              — building everything from complex microfrontend architectures to
              cross-platform mobile apps from scratch.
              <br />
              <br />
              I've led and independently delivered large-scale platforms in{" "}
              <b className="purple">Ed-Tech</b>,{" "}
              <b className="purple">Healthcare</b>, and{" "}
              <b className="purple">Enterprise SaaS</b> — architecting
              microfrontends with{" "}
              <b className="purple">Webpack Module Federation</b>, integrating
              real-time features, and shipping production apps to App Stores.
              <br />
              <br />
              I'm also the <b className="purple">project auditor</b> for our
              engineering org — regularly reviewing codebases and architecture
              across teams for quality, risk, and technical debt — and I
              integrate <b className="purple">AI tools including Claude</b> into
              my daily workflow, accelerating development, code reviews, and
              problem solving at the team level.
            </motion.p>
          </Col>
          <Col md={4} className="myAvtar">
            <motion.div
              ref={avatarRef}
              initial={{ opacity: 0, scale: 0.75 }}
              animate={avatarInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
            >
              <Tilt>
                <div className="avatar-glow-wrapper">
                  <img src={myImg} className="img-fluid" alt="avatar" />
                </div>
              </Tilt>
            </motion.div>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <motion.div
              ref={socialRef}
              initial={{ opacity: 0, y: 20 }}
              animate={socialInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <h1>FIND ME ON</h1>
              <p>
                Feel free to <span className="purple">connect </span>with me
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/sushil-choudhary"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://twitter.com/sushil_chotiya"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiOutlineTwitter />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/sushil-choudhary-0545211b3/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.instagram.com/sushil.choudhary4/#"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="tel:7340321143"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiFillPhone />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="mailto:sushilchoudhary9871@gmail.com"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiFillMail />
                  </a>
                </li>
              </ul>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;

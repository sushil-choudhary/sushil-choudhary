import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillPhone,
  AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a <b className="purple">Senior React Developer</b> with a
              strong passion for building scalable, performant, and intuitive
              web applications. My journey in programming began with curiosity
              and turned into a full-blown obsession 🚀
              <br />
              <br />I specialize in modern JavaScript frameworks like{" "}
              <i>
                <b className="purple">React.js, Next.js, and TypeScript</b>
              </i>
              , and have led front-end architecture using{" "}
              <b className="purple">micro frontends</b> and{" "}
              <b className="purple">module federation</b> across multiple
              enterprise-grade platforms.
              <br />
              <br />
              I'm deeply interested in building end-to-end digital products, and
              I occasionally dive into <b className="purple">
                Deep Learning
              </b>{" "}
              and <b className="purple">Natural Language Processing</b> to
              explore new challenges.
              <br />
              <br />
              Whether it's working with{" "}
              <b className="purple">Node.js, Redux, Zustand</b>, or designing
              component libraries with <b className="purple">Material UI</b> and{" "}
              <b className="purple">PrimeReact</b> — I thrive on clean code,
              design systems, and collaboration.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
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
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/sushil_chotiya"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sushil-choudhary-0545211b3/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
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

            {/* Resume Download Button */}
            {/* <a
              href="/Sushil.pdf"
              download
              className="btn btn-outline-light mt-4"
            >
              📄 Download Resume
            </a> */}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;

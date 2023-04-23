import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
             <span className="purple"> About me </span>
            </h1>
            <p className="home-about-body">
              I believe programming is one of the finest ways to bring an idea into reality!
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Python , Javascript and Java </b>
              </i>
              <br />
              <br />
              Currently working as a Java backend developer with a techstack that involves Springboot,Couchbase,Kafka,Mongo,Elastic,Grafana etc &nbsp;
              <i>
                {/* <b className="purple">Springboot,Couchbase,Kafka,Mongo,Elastic,Grafana etc </b> {" "}
                <b className="purple"> */}
                  
                {/* </b> */}
              </i>
              <br />
              <br />
              Checkout my previous work and feel free to connect with me if you have a fresh idea or opportunity! :)  <b className="purple"></b>
              <i>
                <b className="purple">
                  {" "}
                </b>
              </i>
              &nbsp;
              <i>
                <b className="purple"></b>
              </i>
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
         
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/kruthikakalmali"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
       
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/kkruthika/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/kruuked_/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit
} from "react-icons/di";
import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,SiPrometheus,SiSpringboot,SiSpring,SiApachekafka,SiCouchbase,SiApachecassandra,SiApachespark,SiElasticsearch,SiElastic
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpringboot />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpring />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachekafka />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCouchbase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiElastic />
      </Col>   <Col xs={4} md={2} className="tech-icons">
        <SiElasticsearch />
      </Col>   <Col xs={4} md={2} className="tech-icons">
        <SiApachespark />
      </Col>   <Col xs={4} md={2} className="tech-icons">
        <SiApachecassandra />
      </Col>
    </Row>
  );
}

export default Techstack;

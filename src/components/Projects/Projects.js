import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import a6 from "../../Assets/Projects/6.png";
import a1 from "../../Assets/Projects/1.png";
import a2 from "../../Assets/Projects/2.png";
import a3 from "../../Assets/Projects/3.png";
import a4 from "../../Assets/Projects/4.png";
import a5 from "../../Assets/Projects/5.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on!
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={a5}
              isBlog={false}
              title="Real-Time Translation of Indian Sign Language to Assist the Hearing and Speech Impaired"
              description="Indian Sign Language (ISL) is one of the most used sign languages in the Indian subcontinent. This project aims at developing a simple Indian sign language recognition system based on convolutional neural network (CNN). The proposed system needs webcam and laptop. CNN is used for image classification. Scale invariant feature transformation (SIFT) is hybridized with adaptive thresholding and Gaussian blur image smoothing for feature extraction. Due to unavailability of ISL dataset, a dataset of 5000 images, 100 images each for 50 gestures, has been created. The system is implemented and tested using python-based library Keras. The proposed CNN with hybrid SIFT implementation achieves 92.78% accuracy, whereas the accuracy of 91.84% was achieved for CNN with adaptive thresholding."
              ghLink="https://github.com/kruthikakalmali/IndianSignLanguage_To_Speech"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={a2}
              isBlog={false}
              title="Scene Understanding Challenge for Autonomous Navigation in Unstructured Environments"
              description="In this paper we perform semantic segmentation on Indian Driving Dataset which has been recently compiled on the urban and rural roads of Bengaluru and Hyderabad. This dataset is more challenging compared to other datasets like Cityscapes, since it is based on unstructured driving environments. It has a four level hierarchy and in this paper we perform segmentation on the first level. Five different models have been trained and their performance has been compared using the Mean Intersection over Union. These are UNET, UNET+RESNET50, DeepLabsV3, PSPNet and SegNet. The highest MIOU of 0.6496 has been achieved. The paper discusses the dataset, exploratory data analysis, preparation, implementation of the five models and studies the performance and compares the results achieved in the process."
              ghLink="https://github.com/kruthikakalmali/Solving-Scene-Understanding-for-Autonomous-Navigation-in-Unstructured-Environments-FY-PROJECT-2021"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={a6}
              isBlog={false}
              title="Smart store replenishment system and POC for Lowe's Hackathon                                                             "
              description="
              A smart store replenishment system solution and POC for Lowe's hackathon
              -We propose a system where the supervisor is able to view a comprehensive study of the store sales and inventory
              -The supervisor is informed of the stocks present and the items that need to be restocked urgently
              -He/she is also provided with an analysis of the various customers visiting the store with the top customers and customer segments
              -We also provide recommendations to restock inventory based on the current demand and price to give the most optimal solution to the supervisor and thus ensuring the store’s best interest
              -The supervisor is also provided with a direct restock option and the optimum amount to restock based on demand, price and expiration date"
              ghLink="https://github.com/kruthikakalmali/Smart--Store-replenishment-system"
                     
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={a4}
              isBlog={false}
              title="Legal document analysis and summarization"
              description="To improve the way Legal Documents and Terms and Conditions contracts are presented and analyzed. Provide a comprehensive and easy to understand summary of legal documents and analytics of the text, allowing a deeper insight into it for the reader"
              ghLink="https://github.com/kruthikakalmali/Legal-document-analysis-and-summarization"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={a3}
              isBlog={false}
              title="Econfai - Reduce emissions by optimizing event locations and travel"
              description="Arranging logistics for any event is a challenge. Especially, when you factor in the huge amount of participants flying in from different parts of the world. This usually leads to unnecessary travel which adds to extra flight costs and burden on the environment in the form of carbon emissions.
              Our platform factors in organizers’ preferred locations and the participants’ locations, and recommends the optimal location to host the event, which has the lowest flight costs and emissions.
              The organizer can also generate and send QR codes for the participants to reduce the paper trail in these events."
              ghLink="https://docs.google.com/document/d/1NyY5LnRU1chk6pvWmYWJ__gCUs90vlxgdX_IDJoF5Ok/edit?usp=sharing"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={a1}
              isBlog={false}
              title="Fund it - Democratize access to capital"
              description="A platform that democratizes access to capital for small businesses via crowdfunding"
              ghLink="https://github.com/kruthikakalmali/Fund-It--Democratize-access-to-capital"
             
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

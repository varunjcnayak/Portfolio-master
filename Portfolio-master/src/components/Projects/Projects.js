import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import oracleERP from "../../Assets/Projects/oracle_erp_cloud.png";
import bloodbank from "../../Assets/Projects/bloodbank.png";
import suicide from "../../Assets/Projects/suicide.png";
import instaclone from "../../Assets/Projects/instaclone.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bloodbank}
              isBlog={false}
              title="Blood Bank Website"
              description="Real-Time Blood Bank Website with 2 factor authentication and notifier based on nearby radius."
              ghLink="https://github.com/varunjcnayak/Blood_Bank"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={instaclone}
              isBlog={false}
              title="Instagram Clone"
              description="Instagram Clone Built using ReactJS and tailwind CSS and deployed on FireBase. Allows Like, Comment and Direct Message after signing up => signing in"
              demoLink="https://instagram-clone-react1-87a50.web.app/"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={oracleERP}
              isBlog={false}
              title="Oracle ERP"
              description="ERP solutions to client using Oracle VBCS, PL/SQL and Oracle SaaS"
                            
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

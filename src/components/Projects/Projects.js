import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import tasmeal from "../../Assets/Projects/b.png";
import ai from "../../Assets/Projects/ai.png";
import codesync from "../../Assets/Projects/a.png";
import dict from "../../Assets/Projects/c.png";

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
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={codesync}
              isBlog={false}
              title="Code Sync"
              description="A full Stack Realtime Code Editor Made using React.js Node.js, Express.js and Socket.io.Here You and your friends can together  write code for your next javascript project.Here realtime coding feature is made using Socket.io"
              link="https://github.com/thearnabsaha/code-sync-realtime-code-editor"
              website="https://code-sync-realtime-code-editor.vercel.app/"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={tasmeal}
              isBlog={false}
              title="TAS MEAL"
              description="A Frontend Website for a food Website.I have use Html, Sass, JavaScript to make this website’s Frontend.Also I have google maps embaded code there to find our resturant’s current location."
              link="https://github.com/thearnabsaha/tasmeal.github.io"
              website="https://tasmeal-github-io.vercel.app/"
            />
          </Col>

          {/* <Col md={6} className="project-card">
            <ProjectCard
              imgPath={ai}
              isBlog={false}
              title="AI New Reader"
              description="We have used React Js to design the app. This app is designed for web users. AI New Reader is a platform through which you can search latest news by your voice command. You can also open specific news by giving a command."
              link="https://github.com/rht-singh/A.I-news.git"
            />
          </Col> */}

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={dict}
              isBlog={false}
              title="Dictonary Website"
              description="A Website ehich acts a Dictonary. I have use Html, Sass, JavaScript to make this website’s Frontend. Also I have used Oxford Dictonary API for getting the words meaning."
              link="https://github.com/thearnabsaha/tasmeal.github.io"
              website="https://dictonary-github-io.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

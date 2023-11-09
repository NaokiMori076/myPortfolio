import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const webProjects = [
    {
      description: "Design & Development",
      imgUrl: "/assets/img/portfolio/web/1.png",
      link: "https://turn2me.ie",
    },
    {
      description: "Design & Development",
      imgUrl: "/assets/img/portfolio/web/2.png",
      link: "https://applypk12.fau.edu",
    },
    {
      description: "Design & Development",
      imgUrl: "/assets/img/portfolio/web/4.png",
      link: "https://kaspersky.com",
    },
    {
      description: "Design & Development",
      imgUrl: "/assets/img/portfolio/web/5.png",
      link: "https://privacy.xing.com",
    },
    {
      description: "Design & Development",
      imgUrl: "/assets/img/portfolio/web/6.png",
      link: "https://support.gameloft.com",
    },
    {
      description: "Design & Development",
      imgUrl: "/assets/img/portfolio/web/7.png",
      link: "https://trendmicro.com",
    },
  ];
  const CMSProjects = [
    {
      description: "Design & Development",
      imgUrl: "/assets/img/portfolio/CMS/1.png",
      link: "https://blogs.verisign.com",
    },
    {
      description: "Design & Development",
      imgUrl: "/assets/img/portfolio/CMS/2.png",
      link: "https://journal.tinkoff.ru",
    },
    {
      description: "Design & Development",
      imgUrl: "/assets/img/portfolio/CMS/3.png",
      link: "https://smartadserver.com",
    },
    {
      description: "Design & Development",
      imgUrl: "/assets/img/portfolio/CMS/4.png",
      link: "https://spotify.com",
    },
  ];
  const appProjects = [
    {
      description: "Design & Development",
      imgUrl: "/assets/img/portfolio/app/1.png",
      link: "https://apps.apple.com/app/joi-live-video-chat/id1497699883",
    },
    {
      description: "Design & Development",
      imgUrl: "/assets/img/portfolio/app/2.png",
      link: "https://apps.apple.com/us/app/between-the-app-couples-love/id458035189",
    },
    {
      description: "Design & Development",
      imgUrl: "/assets/img/portfolio/app/3.png",
      link: "https://apps.apple.com/us/app/gaffl/id1470182395",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    I show you to all the big and small websites, apps, CMS I
                    have done so far
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Web Development</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">CMS Development</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">
                          Android Development
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {webProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {CMSProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {appProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  );
};

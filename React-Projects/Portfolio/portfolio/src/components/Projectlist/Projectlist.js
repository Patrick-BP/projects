import React from 'react'
import '../../pages/style.css';
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from 'react-bootstrap'
import socialmedia from '../../Assets/socialmedia.png'
import goalTrimage from '../../Assets/goaltracker.png'
import gofliximage from '../../Assets/goflix.png'
import restaurentManagnemnt from '../../Assets/restaurant.jpg'
import movienight from '../../Assets/movienight.png'
import course from '../../Assets/course.png'

function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={socialmedia}
                isBlog={false}
                title="Social Media App"
                description="simular to facebook user can add/delete a post, follow/unfollow friends, see how is online"
                ghLink=""
                technologies={["react", "nodejs", "mongodb","html","css"]}
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={goalTrimage}
                isBlog={false}
                title="Goal Tracker"
                description="Olx-clone builds with react js. using firebase as a backend and deploying in firebase. Olx-Clone is a potential classified advertisement website that categorizes objects in a user-friendly manner & displays them as advertisements.. Classifieds can be posted that involve selling, and buying using React-router, context, react hooks."
                ghLink=""
                technologies={["angular", "nodejs", "mongodb","html","css"]}
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={gofliximage}
                isBlog={false}
                title="GoFlix"
                description="This project is a simplified front-end clone of Netflix. It was created with React js. It uses TMDB (The Movie Data Base ) API and uses the Axios tool. Users can click movie images with embedded YouTube trailers or related videos about the movie."
                ghLink=""
                technologies={["angular","materialui", "nodejs", "mongodb","html"]}
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={movienight}
                isBlog={false}
                title="Movie Night"
                description="Charlestown pizza is a static website completely build with bootstrap with fully responsive."
                ghLink=""
                technologies={["react", "nodejs", "mongodb","html","css"]}
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={restaurentManagnemnt}
                isBlog={false}
                title="Rectaurent Management"
                description="Grid line builders is a static webpage built with HTML, CSS, and JavaScript. Users can see images of their work and contact information that helps to connect the home builders through a webpage. webpage builds responsive to multiple sizes of devices."
                ghLink=""
                technologies={["react-native", "nodejs", "mongodb"]}
              />
            </Col>

           

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={course}
                isBlog={false}
                title="Course Review App"
                description=" To-Do App that build will allow a user to add a task to a list of to-do items. Once the task is added, the user will be able to delete it as completed once it has done."
                ghLink="https://todolist-rahul81.netlify.app/"
                technologies={["react-native", "nodejs", "mongodb","html","css"]}

              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  )
}
export default Projectlist
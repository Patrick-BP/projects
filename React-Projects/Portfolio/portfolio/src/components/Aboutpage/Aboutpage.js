import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'


function Aboutpage() {
    return (
        <div className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                    <Col md={7} >
                        <h3 className='aboutmetext'>About <span>Me</span></h3>
                        <p className='aboutdetails'> 
                        I am an accomplished full stack developer with a deep enthusiasm for crafting robust front and back-end applications. 
                        With an unwavering drive to thrive in the dynamic and constantly evolving tech industry, I eagerly seek an environment 
                        where I can collaborate with other exceptional engineers.

                        My expertise lies in my ability to swiftly acquire new skills and programming languages, tackle complex problem-solving challenges,
                         and seamlessly collaborate with team members. My genuine passion for working alongside others fuels my desire to continuously learn 
                         and innovate, consistently seeking novel approaches to problem-solving.                        
                         </p>
                        <ul className='skilllist'>
                            <Row>
                                <h3>Skills</h3>
                                <Col md={7}>
                                    <li>HTML5/CSS3</li>
                                    <li>JavaScript</li>
                                    <li>jQuery</li>
                                    <li>React</li>
                                    <li>Angular</li>
                                    <li>Bootsrap</li>
                                    <li>Material-ui</li>
                                </Col>
                                <Col md={5}>
                                    <li>Node Js</li>
                                    <li>Express</li>
                                    <li>Mongodb</li>
                                    <li>SQL</li>
                                    <li>Git/Github</li>
                                </Col>
                            </Row>
                        </ul>
                    </Col>
                    <Col md={5}>
                        <div className="webimage"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Aboutpage

import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import imgreact from "../../Assets/react.png"
import imgangular from "../../Assets/angular.png"
import imghtml from "../../Assets/html.png"
import imgcss from "../../Assets/css.png"
import imgnodejs from "../../Assets/nodejs.png"
import imgmaterialui from "../../Assets/materialui.png"
import imgmongodb from "../../Assets/mongodb.png"


function ProjectCard(props) {
  const react = imgreact
  const angular = imgangular
  const html = imghtml
  const css = imgcss
  const nodejs = imgnodejs
  const materialui = imgmaterialui
  const mongodb = imgmongodb
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        <div className="techContainer">
          
          {props.technologies && props.technologies.map((item, index)=>{
            let img
            if(item ==="react" || item ==="react-native") {img = react}
            if(item ==="angular") {img = angular}
            if(item ==="html") {img = html}
            if(item ==="css") {img = css}
            if(item ==="nodejs") {img = nodejs}
            if(item ==="materialui") {img = materialui}
            if(item ==="mongodb") {img = mongodb}

            return(
            <div key={index} className="techItems">
              <span className="techname">{item}</span>
              <img src={img} className="techImg" alt={item}/>
              </div>)
          }) }
        </div>

        <Button className="viewbtn" variant="primary" href={props.ghLink} target="_blank">
          View
        </Button>
        {"\n"}
        {"\n"}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >

            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCard;
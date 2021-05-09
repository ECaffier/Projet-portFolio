import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from "react";
import ProjectsData from "./ProjectsData";


// This const create card for each element in my json array
export const Project = () => {
    return(
        <div id="projects" className="bg-darkGrey textWhite text-center">
        <h2 className="py-5">Mes Projets</h2>
        <Row className="projectSize">
            {ProjectsData.map((data) => {
                return (
                    <Col xs={12} lg={4} className="py-5">
                    <div id="wrapper">
                        <h3>{data.Title}</h3>
                        <a href={data.Link} target='_blank'>
                            <img src={data.Image} className="projectImg hover" />
                        </a>
                        <p className="textHover">{data.Detail}</p>
                    </div>
                    </Col> 
                );
            })}
        </Row>
        </div>
    );
}

export default Project;

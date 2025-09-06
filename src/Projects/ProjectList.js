import React from "react";
import "./projects.css";

const ProjectList = ({
  name,
  des,
  projectlink,
  techused,
  image
}) => {
  return (
    <div className="project-list">
      <div className="project-content">
        <div className="title-with-dropdown">
          <h5>{name}</h5>
        </div>

        <div className="tech-section">
          <div className="row">
            {techused && techused.map((tec, index) => (
              <div key={index} className="tech-used-in-projects" style={{backgroundColor: "#e7f1fd", color:"#0473ea"}}>
                <p>{tec.techname}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="description">{des}</div>
        
        <div className="github-section">
          <div className="live-demo-button">
            <p>
              <a target="_" href={projectlink}>
                Github Link
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
      
      <div className="project-image-section">
        <div className="project-image-container">
          <img 
            src={`${process.env.PUBLIC_URL}/${image}`} 
            alt={name}
            className="project-image"
            onError={(e) => {
              console.log('Image failed to load:', e.target.src);
              e.target.style.display = 'none';
            }}
            onLoad={() => console.log('Image loaded successfully:', `${process.env.PUBLIC_URL}/${image}`)}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectList;

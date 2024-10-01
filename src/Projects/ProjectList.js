import React, { useState } from "react";
import "./projects.css";
import { FcExpand, FcCollapse } from "react-icons/fc";

const ProjectList = ({
  name,
  des,
  projectlink,
  techused,
}) => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };


  return (
    <div
      className={show ? "project-list-opened project-list":"project-list"}
      onClick={handleClick}
      // onMouseLeave={() => setShow(false)}
      // onMouseEnter={() => setShow(true)}
    >
      <div className="title-with-dropdown">
        <h5>{name}</h5>
        <p>{show ? <FcCollapse size={20} /> : <FcExpand size={20} />}</p>
      </div>

      <div className="row">
        {techused && techused.map((tec, index) => (
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
            <div key={index} className="tech-used-in-projects" style={{backgroundColor: "#e7f1fd", color:"#0473ea"}}>
              <p>{tec.techname}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="live-demo-button">
        <p>
          <a target="_" href={projectlink}>
            Github Link
          </a>{" "}
        </p>
      </div>
      {show ? <p className="description">{des}</p> : null}
    </div>
  );
};

export default ProjectList;

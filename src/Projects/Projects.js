import React from "react";
import "./projects.css";
import ProjectList from "./ProjectList";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
const Projects = () => {
  const projectList = [
    {
      name: "Classifier Visualizer",
      des: (
        <ul>
          <li> Developed an interactive visualizer with ReactJs, Tailwind CSS, and Flask for real-time ML data charts, integrating KNN, least
          squares with adjustable parameters. </li>
          <li>Established seamless frontend-to-model communication using scikit-learn, numpy, and Flask, while working on developing the random
          forest classifier and a caching system for 50% faster result rendering.</li>
        </ul>
      ),

      techused: [
        {
          techname: "Pandas",
        },
        {
          techname: "Numpy",
        },
        {
          techname: "Matplotlib",
        },
        {
          techname: "scikit-learn"
        },
        {
          techname: "ReactJs",
        },
        {
          techname: "Tailwind CSS",
        },
        {
          techname: "Flask",
        }
      ],
      projectlink: "https://github.com/kalpalathika/Classifier-Visualizer/tree/master",
    },
    {
      name: "Accountax",
      des: (
        <ul>
          <li>Developed a responsive financial website for chartered accountant agents using ReactJS, TypeScript, Tailwind CSS, and NestJS.</li>
          <li>Integrated interactive Google Maps using google-maps-react library for office locations and implemented a robust Nodemailer-based
              mailing system to manage potential leads.</li>
        </ul>
      ),
      techused: [
        {
          techname: "ReactJS",
        },
        {
          techname: "TypeScript",
        },
        {
          techname: "Tailwind CSS",
        },
        {
          techname: "NestJS",
        },
        {
          techname: "node-mailer",
        },
      ],
      projectlink: "https://github.com/kalpalathika/Accountax",
    }
  ];

  return (
    <div className="container" id="project">
      <div className="section-title">
        <Flip left>
          <h5>Projects</h5>
          <span className="line"></span>
        </Flip>
      </div>
      <div className="row">
        {projectList.map((item, index) => (
          <Fade right>
            <div className="col-xl-6, col-lg-6, col-md-6, col-sm-6">
              <ProjectList key={index} {...item} index={index} />
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default Projects;

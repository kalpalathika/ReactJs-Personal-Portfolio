import React from "react";
import "./AcademicExperience.css";
import Flip from "react-reveal/Flip";
import { GrWorkshop } from "react-icons/gr";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const AcademicItem = ({ item }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#19132b", color: "white", border: "1px solid #7b7cf1" }}
      contentArrowStyle={{ borderRight: "7px solid #7b7cf1" }}
      date={item.year}
      dateClassName="date"
      iconStyle={{ background: "#7b7cf1", color: "#fff" }}
      icon={<GrWorkshop color="white" />}
    >
      <h3 className="vertical-timeline-element-titles">{item.name}</h3>
      <h4 className="vertical-timeline-element-subtitles">{item.position}</h4>

      <div className="row mb-4">
        {item.techused.map((tec, idx) => (
          <div key={idx} className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <div className="tech-used-at-work">
              <p>{tec.techname}</p>
            </div>
          </div>
        ))}
      </div>

      <ul className="desc-list">{item.des}</ul>
    </VerticalTimelineElement>
  );
};

const AcademicExperience = () => {
  const data = [
    {
      name: "Rochester Institute of Technology",
      position: "Data Mining Principles Teaching Assistant",
      year: "Aug, 2024 - May, 2025",
      des: (
        <ul>
          <li>
            Engineered solution sets for data mining assignments including clustering, classification, and feature selection.
          </li>
          <li>
            Built scalable MongoDB analysis pipeline processing 1M+ IMDb records, cutting retrieval time by 40%.
          </li>
          <li>
            Performed extensive data cleaning with null handling and normalization, reducing preprocessing effort by 30%.
          </li>
        </ul>
      ),
      techused: [
        { techname: "Python" },
        { techname: "NumPy" },
        { techname: "pandas" },
        { techname: "scikit-learn" },
        { techname: "MongoDB" },
        { techname: "Jupyter" },
        { techname: "SQL" },
        { techname: "matplotlib" }
      ]
    },
    {
      name: "Rochester Institute of Technology",
      position: "Java Teaching Assistant",
      year: "Aug, 2023 - Dec, 2023",
      des: (
        <ul>
          <li>
            Engineered reference solutions for 10+ Java assignments covering OOP, threads, collections, and JavaFX GUI programming.
          </li>
          <li>
            Reviewed student code against edge cases, ensuring alignment with Java best practices and course specifications.
          </li>
          <li>
            Provided 1-on-1 weekly mentoring sessions, improving class-wide assignment performance through targeted guidance.
          </li>
        </ul>
      ),
      techused: [
        { techname: "Java" },
        { techname: "JavaFX" },
        { techname: "OOP" },
        { techname: "Multithreading" }
      ]
    }
  ];

  return (
    <div className="container" id="academicexperience">
      <div className="section-title">
        <Flip left>
          <h5>Academic Excellence</h5>
          <span className="line"></span>
        </Flip>
      </div>

      <VerticalTimeline>
        {data.map((item, index) => (
          <AcademicItem key={index} item={item} />
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default AcademicExperience;

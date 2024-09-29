import React, { useState } from "react";
import "./WorkExperience.css";
import Flip from "react-reveal/Flip";

import { GrWorkshop } from "react-icons/gr";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const WorkExperience = () => {
  const data = [
    {
      name: "Rochester Institute of Technology",
      position: "Data Mining Principles Grader",
      year: "Aug,2024 - Present",
      des: <ul>
            <li>Evaluated assignments for 20+ students by analyzing graphs generated from their code, ensuring proper use of data mining techniques.</li>
            <li>Conducted weekly office hours to address doubts and provide guidance.</li>
          </ul>,
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
      ],
    },

    {
      name: "Ecolab",
      position: "Software Engineering Co-op",
      year: "Jan, 2024 - Aug, 2024",
      des: "Normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",

      techused: [
        {
          techname: "C#",
        },
        {
          techname: ".Net",
        },
        {
          techname: "Typescript",
        },
        {
          techname: "AngularJS",
        },
        {
          techname: "Playwright Automation",
        }, 
        {
          techname: "Snowflake",
        },
        {
          techname: "Git",
        },
        {
          techname: "Karma Unit testing",
        },
        {
          techname: "Agile Methodologies",
        },
      ],
    },
    {
      name: "Rochester Institute of Technology",
      position: "Java Grader",
      year: "2020-2021",
      des: "Normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",

      techused: [
        {
          techname: "Java",
        },
      ],
    },
    {
      name: "Eszmeletlen Holding Co",
      position: "Software Engineer",
      year: "Feb, 2021 - Dec, 2022",
      des: "Normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",

      techused: [
        {
          techname: "ReactJs",
        },
        {
          techname: "Redux",
        },
        {
          techname: "Tailwind",
        },
        {
          techname: "Typescript",
        },
        {
          techname: "React Query",
        },
        {
          techname: "SCSS",
        },
        {
          techname: "mySQL"
        },
        {
          techname: "Agile Methodologies"
        }
      ],
    },
  ];

  return (
    <div className="container" id="workexperience">
      <div className="section-title">
        <Flip left>
          <h5>Work-Experience</h5>
          <span className="line"></span>
        </Flip>
      </div>

      <VerticalTimeline>
        {data.map((item, index) => (
          <VerticalTimelineElement
            contentStyle={{ background: "#fff", color: "#525355" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date={item.year}
            dateClassName="date"
            iconStyle={{ background: "rgb(56, 209, 3)", color: "#fff" }}
            icon={<GrWorkshop color="white"/>}
          >
            <h3 className="vertical-timeline-element-titles">{item.name}</h3>
            <h4 className="vertical-timeline-element-subtitles">
              {item.position}
            </h4>
            <div className="row">
              {item.techused.map((tec, index) => (
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                  <div key={index} className="tech-used-at-work">
                    <p>{tec.techname}</p>
                  </div>
                </div>
              ))}
            </div>
            <p>{item.des}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default WorkExperience;

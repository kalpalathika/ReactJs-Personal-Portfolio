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
      year: "Aug, 2024 - Present",
      des: (
        <ul>
          <li>
            Evaluated assignments for 20+ students by analyzing graphs generated
            from their code, ensuring proper use of data mining techniques.
          </li>
          <li>
            Conducted weekly office hours to address doubts and provide guidance.
          </li>
        </ul>
      ),
      techused: [
        { techname: "Pandas" },
        { techname: "Numpy" },
        { techname: "Matplotlib" },
      ],
    },
    {
      name: "Ecolab",
      position: "Software Engineering Co-op",
      year: "Jan, 2024 - Aug, 2024",
      des: (
        <ul>
          <li>
            Developed reusable Angular components using Chart.js for interactive
            line, doughnut, and bar charts with customized tooltips, logging MixPanel
            events to analyze Ecolab sales data for 500+ Customer Account Managers
            (CAMs).
          </li>
          <li>
            Developed full-stack features using Snowflake queries, .NET endpoints,
            Angular frontend, along with Karma unit testing and Playwright automation
            scripts.
          </li>
          <li>
            Developed optimized Snowflake queries, improving data retrieval
            efficiency by 30%.
          </li>
          <li>
            Followed Agile processes to ensure iterative development, timely
            delivery, and continuous improvement in project execution.
          </li>
        </ul>
      ),
      techused: [
        { techname: "C#" },
        { techname: ".Net" },
        { techname: "Typescript" },
        { techname: "AngularJS" },
        { techname: "Playwright Automation" },
        { techname: "Snowflake" },
        { techname: "Git" },
        { techname: "Karma Unit testing" },
        { techname: "Agile Methodologies" },
      ],
    },
    {
      name: "Rochester Institute of Technology",
      position: "Java Grader",
      year: "2020-2021",
      des: (
        <ul>
          <li>
            Evaluated assignments and offered constructive feedback with detailed
            coding suggestions for 20+ students in Advanced OOP course.
          </li>
          <li>
            Conducted one-on-one discussions weekly to understand student’s logic
            and reasoning.
          </li>
        </ul>
      ),
      techused: [{ techname: "Java" }],
    },
    {
      name: "Eszmeletlen Holding Co",
      position: "Software Engineer",
      year: "Feb, 2021 - Dec, 2022",
      des: (
        <ul>
          <li>
            Developed and enhanced web applications using frontend technologies
            like ReactJS and Tailwind for creating and customizing web stories and
            interactive forms, serving a user base of over 1000+ users.
          </li>
          <li>
            Integrated APIs using NodeJS and MySQL to efficiently manage user
            information, ensuring seamless data storage and retrieval for web
            stories and forms.
          </li>
          <li>
            Enhanced functionalities to enable users to create and customize
            interactive forms with flexible input fields and templates.
          </li>
          <li>
            Increased application performance by 20% through optimization
            techniques like React Query, which reduced response times and improved
            caching and staleness management.
          </li>
        </ul>
      ),
      techused: [
        { techname: "ReactJs" },
        { techname: "Redux" },
        { techname: "Tailwind" },
        { techname: "Typescript" },
        { techname: "React Query" },
        { techname: "SCSS" },
        { techname: "mySQL" },
        { techname: "Agile Methodologies" },
      ],
    },
    {
      name: "Godrej Interio",
      position: "Graduate Engineering Trainee",
      year: "Sept, 2019 - Sept, 2020",
      des: (
        <ul>
          <li>
            Improved user experience by 20% on the Godrej Interio e-commerce site
            (B2C & B2B) by leveraging Google Analytics for actionable insights.
          </li>
          <li>
            Increased efficiency by 50% by automating bulk form filling for Google
            My Business using JavaScript.
          </li>
        </ul>
      ),
      techused: [
        { techname: "Google Analytics" },
        { techname: "Software Engineering Life Cycle" },
        { techname: "JavaScript" },
        { techname: "Figma" },
        { techname: "UI/UX" },
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

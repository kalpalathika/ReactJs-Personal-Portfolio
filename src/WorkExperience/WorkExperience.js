import React from "react";
import "./WorkExperience.css";
import Flip from "react-reveal/Flip";
import { GrWorkshop } from "react-icons/gr";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const WorkItem = ({ item }) => {
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

const WorkExperience = () => {
  const data = [
    {
      name: "Mindex",
      position: "Software Engineering Co-op",
      year: "Jan, 2025 -  May, 2025",
      des: (
        <ul>
          <li>
            Modernized invoice-driven corporate banking platform using React, C# .NET, and SQL Server with AWS CloudWatch monitoring.
          </li>
          <li>
            Implemented robust form error handling with React-Bootstrap, increasing form submission success rate by 20%.
          </li>
          <li>
            Integrated custom Zod schemas for 20+ input models, reducing front-end validation bugs by 30%.
          </li>
        </ul>
      ),
      techused: [
        { techname: "C# .Net" },
        { techname: "React" },
        { techname: "Typescript" },
        { techname: "MySQL" },
        { techname: "AWS" },
        { techname: "Playwright" },
        { techname: "Bootstrap" },  
        { techname: "Amazon Q" },
        { techname: "Unit Testing" }
      ]
    },    
    {
      name: "Rochester Institute of Technology",
      position: "Data Mining Principles Grader",
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
      name: "Ecolab",
      position: "Software Engineering Co-op",
      year: "Jan, 2024 - Aug, 2024",
      des: (
        <ul>
          <li>
            Replaced legacy ECharts with Angular Chart.js components, now used by 500+ Customer Account Managers with full accessibility support.
          </li>
          <li>
            Implemented comprehensive testing with Karma and Playwright, achieving zero post-release issues through CI/CD integration.
          </li>
          <li>
            Optimized Snowflake queries and created reusable analytics components, improving dashboard performance by 20%.
          </li>
        </ul>
      ),
      techused: [
        { techname: "C#" },
        { techname: ".NET" },
        { techname: "Typescript" },
        { techname: "Angular" },
        { techname: "Chart.js" },
        { techname: "Playwright " },
        { techname: "Snowflake" },
        { techname: "Git" },
        { techname: "Unit Testing" },
        { techname: "Agile" },
        { techname: "GitHub Copilot" }
      ]
    },    
    {
      name: "Rochester Institute of Technology",
      position: "Java Grader",
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
    },    
    {
      name: "Eszmeletlen Holding Co",
      position: "Software Engineer",
      year: "Feb, 2021 - Dec, 2022",
      des: (
        <ul>
          <li>
            Engineered full-stack features for <b>MakeStories.io</b> and <b>MakeForms.io</b>, serving 1,000+ users across publishing and enterprise clients.
          </li>
          <li>
            Designed 30+ scalable REST APIs with Node.js, MySQL, and Redis caching, optimizing response times and submission reliability.
          </li>
          <li>
            Increased application performance by 20% using React Query optimization and built real-time news feed for <b>CNBC-18</b>.
          </li>
        </ul>
      ),
      techused: [
        { techname: "React" },
        { techname: "Redux" },
        { techname: "Next.js" },
        { techname: "Node.js" },
        { techname: "Typescript" },
        { techname: "React Query" },
        { techname: "Tailwind" },
        { techname: "SCSS" },
        { techname: "MySQL" },
        { techname: "Redis" },
        { techname: "Agile" }
      ]
    },    
    {
      name: "Godrej Interio",
      position: "Graduate Engineering Trainee",
      year: "Sept, 2019 - Sept, 2020",
      des: (
        <ul>
          <li>
            Delivered end-to-end refund and returns module for Godrej Interio e-commerce platform, serving 1,000+ B2C and B2B customers.
          </li>
          <li>
            Conducted competitor analysis and leveraged Google Analytics to optimize site architecture, conversion funnels, and user engagement.
          </li>
          <li>
            Executed comprehensive SEO optimizations and automated bulk data updates, improving search visibility and operational efficiency.
          </li>
        </ul>
      ),
      techused: [
        { techname: "Google Analytics" },
        { techname: "Power BI" },
        { techname: "SDLC" },
        { techname: "JavaScript" },
        { techname: "Figma" },
        { techname: "UI/UX Design" },
        { techname: "Business Analytics" },
        { techname: "SEO" },
        { techname: "Excel Macros" }
      ]
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
          <WorkItem key={index} item={item} />
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default WorkExperience;


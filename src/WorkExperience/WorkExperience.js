import React, { useState } from "react";
import "./WorkExperience.css";
import Flip from "react-reveal/Flip";
import { GrWorkshop } from "react-icons/gr";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const WorkItem = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  const liNodes = React.Children.toArray(item.des.props.children); 

  const visible = expanded ? liNodes : liNodes.slice(0, 3);

  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#fff", color: "#525355" }}
      contentArrowStyle={{ borderRight: "7px solid rgb(33,150,243)" }}
      date={item.year}
      dateClassName="date"
      iconStyle={{ background: "rgb(56, 209, 3)", color: "#fff" }}
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

      <ul className={`desc-list ${expanded ? "expanded" : ""}`}>{visible}</ul>

      {liNodes.length > 3 && (
        <button className="read-more-btn" onClick={() => setExpanded(!expanded)}>
          {expanded ? "Read Less" : "Read More"}
        </button>
      )}
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
            Contributed to modernizing an invoice-driven corporate banking platform by developing with React, C# .NET, and SQL Server while monitoring test suites through AWS services such as CloudWatch.
          </li>
          <li>
            Implemented robust form error handling using React-Bootstrap with fallback components and conditional rendering, improving real-time user feedback and increasing form submission success rate by 20%.
          </li>
          <li>
            Integrated custom Zod schemas with React forms for 20+ input models to enforce strict type validation at runtime, reducing front-end validation-related bugs by 30%.
          </li>
          <li>
            Worked on a React/TypeScript repository structured around the Factory Method pattern, enabling clean separation of concerns and scalable API integration for over 10 business modules.
          </li>
          <li>
            Conducted 30+ code reviews to ensure adherence to best practices and improve code quality across the team.
          </li>
          <li>
            Investigated flaky test suites and led debugging initiatives using CloudWatch logs and Playwright traces, improving CI stability.
          </li>
          <li>
            Leveraged Amazon Q’s LLM features to boost code documentation, error tracing, and test case generation, reducing development turnaround time by 25%.
          </li>
          <li>
            Collaborated cross-functionally with backend and QA teams to define contract-first APIs and test plans, ensuring alignment.
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
            Engineered robust solution sets for key data mining assignments including Curses, Clusters, Classifications, Feature Selection, and Agglomerative Clustering to guide student understanding.
          </li>
          <li>
            Built a scalable analysis pipeline using MongoDB to process 1M+ IMDb records, involving data cleaning, indexing, and query optimization, cutting retrieval time by 40%.
          </li>
          <li>
            Performed extensive data cleaning including null handling, normalization, and deduplication, streamlining analysis and reducing preprocessing effort by 30%.
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
            Replaced legacy ECharts with modular Angular Chart.js components supporting dynamic accessibility features like tooltips and keyboard navigation, now used by 500+ Customer Account Managers (CAMs).
          </li>
          <li>
            Conducted thorough testing using Karma Unit Testing and Playwright Automation, fully integrated into the CI/CD pipeline to ensure smooth deployment with zero post-release issues.
          </li>
          <li>
            Researched and configured Playwright automation to run locally, enabling faster debugging without relying on post-merge checks, reducing troubleshooting time by 30%.
          </li>
          <li>
            Refactored backend code by removing an unnecessary layer between service and factory, reducing complexity and improving backend maintainability by ~10%.
          </li>
          <li>
            Created reusable analytics components for line graphs, bar charts, and bubble charts that require minimal data input, improving consistency across 4+ analytics modules.
          </li>
          <li>
            Collaborated directly with users and product managers to gather functional requirements, validate workflows, and enhance user experience.
          </li>
          <li>
            Refined Snowflake queries to improve data retrieval performance by 20%, supporting faster dashboard loads.
          </li>
          <li>
            Participated in Agile ceremonies including daily stand-ups, retrospectives, and sprint planning across 3 full release cycles.
          </li>
          <li>
            Utilized GitHub Copilot to accelerate the development of boilerplate code and unit tests, resulting in a 15–20% improvement in story point completion rate.
          </li>
          <li>
            Developed an end-to-end photo gallery feature for CAMs to view sales complaint images, including functionality to zip and download all images, improving accessibility and reducing manual retrieval time by 40%.
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
            Engineered reference solutions for 10+ Java assignments covering OOP fundamentals, inheritance, interfaces, collections, exceptions, threads, file I/O, and JavaFX GUI programming.
          </li>
          <li>
            Reviewed and tested student code against edge cases, ensuring alignment with Java best practices and course specifications.
          </li>
          <li>
            Provided clarifications and walkthroughs on complex topics such as abstract classes, multithreading, and event-driven programming, contributing to improved class-wide assignment performance.
          </li>
          <li>
            Held 1-on-1 weekly sessions with students to understand their assignment challenges and suggested refactoring opportunities or alternative approaches for better code structure and logic.
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
            Engineered end-to-end features for <b>MakeStories.io</b> (a Canva-like platform for creating interactive web stories) and <b>MakeForms.io</b> (a dynamic form-building application), enhancing UX for 1,000+ active users across publishing and enterprise clients.
          </li>
          <li>
            Designed and implemented 30+ scalable REST APIs with Node.js and MySQL, incorporating Redis caching logic to handle dynamic user data, optimize response times, and improve form submission reliability.
          </li>
          <li>
            Increased application performance by 20% through optimization techniques using React Query, improving caching and staleness management while reducing unnecessary network calls.
          </li>
          <li>
            Built a real-time news feed feature for <b>CNBC-18</b> using Next.js, integrating client-side polling to auto-refresh news updates and maintain up-to-the-minute coverage for end users.
          </li>
          <li>
            Enhanced form customization capabilities by enabling flexible input fields, reusable templates, and drag-and-drop layout adjustments, streamlining the creation process for non-technical users.
          </li>
          <li>
            Followed Agile processes, participating in sprint planning, backlog grooming, and daily stand-ups to ensure timely delivery and continuous iteration on features.
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
            Collaborated with 5+ cross-functional teams including vendors, developers, and designers to deliver the end-to-end refund and returns module for the Godrej Interio e-commerce platform, now used by 1,000+ B2C and B2B customers.
          </li>
          <li>
            Evaluated and contributed to 20+ features and functionalities for the website experience, enhancing product discovery, checkout flow, and customer engagement.
          </li>
          <li>
            Conducted competitor analysis on platforms like Pepperfry, Urban Ladder, and IKEA, focusing on SEO strategy, product taxonomy, and UX patterns to improve site architecture and navigation.
          </li>
          <li>
            Leveraged Google Analytics to identify high-drop-off pages and implemented improvements to navigation, conversion funnels, and on-site engagement.
          </li>
          <li>
            Executed on-page SEO optimizations including meta tag refinements, internal linking enhancements, and keyword-aligned content updates, increasing search visibility.
          </li>
          <li>
            Automated bulk data updates using Excel macros, reducing manual work and improving update consistency.
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


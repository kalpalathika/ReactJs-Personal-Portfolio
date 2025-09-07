import React from "react";
import "./projects.css";
import ProjectList from "./ProjectList";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
const Projects = () => {
  const projectList = [
    {
      name: "Daily Win Sparkle",
      des: "A gamified personal achievement tracking application that helps users celebrate their daily wins with streaks, confetti animations, and motivational messages. Features secure authentication and real-time data synchronization.",
      image: "LittleWins.png",

      techused: [
        {
          techname: "React 18",
        },
        {
          techname: "TypeScript",
        },
        {
          techname: "Vite",
        },
        {
          techname: "React Query",
        },
        {
          techname: "React Hook Form",
        },
        {
          techname: "Zod",
        },
        {
          techname: "Supabase",
        },
        {
          techname: "PostgreSQL",
        },
        {
          techname: "Google OAuth 2.0",
        }
      ],
      projectlink: "https://github.com/kalpalathika/daily-win-sparkle",
    },
    {
      name: "Fetch App",
      des: "A web application designed for dog lovers to explore, filter, and interact with various dog listings. Features advanced filtering, interactive search, and comprehensive testing for optimal user experience.",
      image: "Fetch.png",
      techused: [
        {
          techname: "React",
        },
        {
          techname: "TypeScript",
        },
        {
          techname: "React Router DOM",
        },
        {
          techname: "Tailwind CSS",
        },
        {
          techname: "React Query",
        },
        {
          techname: "Recoil",
        },
        {
          techname: "react-select",
        },
        {
          techname: "react-paginate",
        },
        {
          techname: "Vitest",
        },
        {
          techname: "React Testing Library",
        }
      ],
      projectlink: "https://github.com/kalpalathika/fetch",
    },
    {
      name: "Air Pollution & Respiratory Health: A Geospatial Analysis",
      des: "Conducted a comprehensive geospatial analysis using ArcGIS Pro to examine correlations between PM2.5 air pollution levels and respiratory health outcomes (asthma, COPD, lung cancer) across North America. Applied hotspot analysis and demographic overlays to identify high-risk regions, with a focus on vulnerable populations under 18 and over 65. Findings highlighted strong spatial links between elevated PM2.5 levels and increased respiratory disease rates, emphasizing the need for targeted public health interventions and policy action.",
      image: "GIS.png",
      techused: [
        {
          techname: "ArcGIS Pro",
        },
        {
          techname: "Python",
        },
        {
          techname: "Geospatial Analysis",
        },
        {
          techname: "Hotspot Analysis",
        },
        {
          techname: "Statistical Modeling",
        },
        {
          techname: "Data Visualization",
        }
      ],
      projectlink: `${process.env.PUBLIC_URL}/GIS_Research.pdf`,
      linkType: 'pdf'
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
      <div className="projects-container">
        {projectList.map((item, index) => (
          <Fade right key={index}>
            <div className="project-unified-card">
              <ProjectList {...item} index={index} />
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default Projects;

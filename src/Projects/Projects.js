import React from "react";
import "./projects.css";
import ProjectList from "./ProjectList";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
const Projects = () => {
  const projectList = [
    {
      name: "Daily Win Sparkle",
      des: "A gamified personal achievement tracking application that helps users celebrate their daily wins with streaks, confetti animations, and motivational messages. Built with React 18, TypeScript, Vite, and Supabase backend with Google OAuth authentication.",
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
      des: "A web application designed for dog lovers to explore, filter, and interact with various dog listings. Built with React, TypeScript, and Tailwind CSS, featuring Redux state management and comprehensive testing with Vitest.",
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

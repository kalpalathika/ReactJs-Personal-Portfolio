import React from "react";
import "./projects.css";
import ProjectList from "./ProjectList";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
const Projects = () => {
  const projectList = [
    {
      name: "BrightMinds",
      des: "A responsive educational non-profit website with UI that actually matches the design, built with React, TypeScript, and Tailwind CSS.",
      image: "brightMinds.png",
      techused: [
        {
          techname: "React 18",
        },
        {
          techname: "TypeScript",
        },
        {
          techname: "Tailwind CSS",
        },
        {
          techname: "React Hook Form",
        },
        {
          techname: "Zod",
        },
        {
          techname: "Lucide React",
        }
      ],
      projectlink: "https://github.com/kalpalathika/BrightMinds",
      demoLink: "https://kalpalathika.github.io/BrightMinds/"
    },
    {
      name: "DocuFlow AI",
      des: "An AI-powered legal document automation platform that simplifies document filling through conversational interfaces. Upload a template document, answer questions naturally, and generate completed documents automatically.",
      image: "docuFlowAI.png",
      techused: [
        {
          techname: "Go",
        },
        {
          techname: "Gin Framework",
        },
        {
          techname: "React 19",
        },
        {
          techname: "TypeScript",
        },
        {
          techname: "Vite",
        },
        {
          techname: "Tailwind CSS",
        },
        {
          techname: "Gemini API",
        }
      ],
      projectlink: "https://github.com/kalpalathika/DocuFlow-AI",
      demoLink: "https://docu-flow-ai.vercel.app"
    },
    {
      name: "MCP Enhanced Data Retrieval System",
      des: "An MCP server that standardizes AI context sharing by integrating organizational knowledge sources (GitHub, internal docs, APIs) to enable domain-aware AI assistance for enterprise development workflows.",
      image: "RAG.png",
      techused: [
        {
          techname: "Python",
        },
        {
          techname: "FastAPI",
        },
        {
          techname: "ChromaDB",
        },
        {
          techname: "Sentence Transformers",
        },
        {
          techname: "OAuth 2.1",
        },
        {
          techname: "Vector Search",
        }
      ],
      projectlink: "https://github.com/kalpalathika/MCP-Enhanced-Data-Retrieval-System"
    },
    {
      name: "GoBooks",
      des: "A lightweight Go REST API for managing books with full CRUD operations. Built using Gorilla Mux, JSON helpers, and clean modular handlers.",
      image: "GoBooks.png",
      techused: [
        {
          techname: "Go 1.16+",
        },
        {
          techname: "Gorilla Mux",
        },
        {
          techname: "REST API",
        },
        {
          techname: "JSON",
        }
      ],
      projectlink: "https://github.com/kalpalathika/GoBooks"
    },
    {
      name: "Daily Win Sparkle",
      des: "A gamified personal achievement tracking application that helps users celebrate their daily wins with streaks, confetti animations, and motivational messages.",
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
      des: "A web application designed for dog lovers to explore, filter, and interact with various dog listings. Features advanced filtering, interactive search, and comprehensive testing.",
      image: "Fetch.png",
      techused: [
        {
          techname: "React",
        },
        {
          techname: "TypeScript",
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
          techname: "Vitest",
        }
      ],
      projectlink: "https://github.com/kalpalathika/fetch",
    },
    {
      name: "Air Pollution & Respiratory Health",
      des: "A comprehensive geospatial analysis using ArcGIS Pro examining correlations between PM2.5 air pollution and respiratory health outcomes across North America. Applied hotspot analysis to identify high-risk regions.",
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
          techname: "Statistical Modeling",
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

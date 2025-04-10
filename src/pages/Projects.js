import React, { useState } from "react";
import "../styles/Projects.css";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-commerce Website",
      description:
        "A full-featured e-commerce platform with shopping cart and payment integration.",
      image: "project1.jpg",
      tags: ["React", "Node.js", "MongoDB"],
      category: "web",
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A productivity app for managing tasks and projects with team collaboration features.",
      image: "project2.jpg",
      tags: ["React", "Firebase", "Redux"],
      category: "web",
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "A responsive portfolio website showcasing my work and skills.",
      image: "project3.jpg",
      tags: ["React", "CSS", "JavaScript"],
      category: "web",
      github: "https://github.com",
      live: "https://example.com",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section className="projects">
      <div className="projects-container">
        <h2 className="section-title">My Projects</h2>

        <div className="filter-buttons">
          <button
            className={`filter-btn ${activeFilter === "all" ? "active" : ""}`}
            onClick={() => setActiveFilter("all")}
          >
            All
          </button>
          <button
            className={`filter-btn ${activeFilter === "web" ? "active" : ""}`}
            onClick={() => setActiveFilter("web")}
          >
            Web
          </button>
          <button
            className={`filter-btn ${
              activeFilter === "mobile" ? "active" : ""
            }`}
            onClick={() => setActiveFilter("mobile")}
          >
            Mobile
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

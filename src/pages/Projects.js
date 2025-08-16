import React, { useState } from "react";
import "../styles/Projects.css";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Android Reverse Shell",
      description:
        "Demonstrated creating a malicious APK with msfvenom and Metasploit to establish a reverse shell via Meterpreter, enabling remote control of Android devices for ethical hacking and penetration testing purposes.",
      image: "/assets/android-reverse-shell.jpg",
      tags: ["msfvenom", "Metasploit", "Kali Linux"],
      category: "mobile",
      github: "https://github.com/amitcode0/Shadow-APK-CYBERSECURITY",
      live: "https://github.com/amitcode0/Shadow-APK-CYBERSECURITY",
    },
    {
      id: 2,
      title: "Paytm UPI Analyzer",
      description:
        "A Python-based tool for analyzing Paytm UPI transaction statements, categorizing spending (e.g., food, travel, shopping), and visualizing monthly trends.",
      image: "/assets/paytm-upi-analyzer.png",
      tags: ["Jupyter Notebook / JupyterLab", "Pandas", "Matplotlib", "NumPy"],
      category: "web",
      github: "https://github.com/amitcode0/paytm-upi-analyzer",
      live: "https://github.com/amitcode0/paytm-upi-analyzer",
    },
    {
      id: 3,
      title: "Gym Management System",
      description:
        "A complete Gym Management System built with React.js for the frontend and MySQL as the database. This system allows gym owners or staff to manage gym members, track attendance, handle payments, and assign workout plans efficiently.",
      image: "/assets/gym.png",
      tags: ["React", "CSS", "JavaScript", "MySQL"],
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

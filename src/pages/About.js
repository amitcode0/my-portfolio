import React from "react";
import "../styles/About.css";

const About = () => {
  const skills = [
    {
      name: "Programming Languages:C++, Python (NumPy, Pandas, Matplotlib, SciPy, Scikit-learn)",
    },
    { name: "Frontend Development:HTML, CSS, JavaScript, React.js" },
    { name: "Backend Development: PHP (Basic), MySQL        " },
    {
      name: "Additional Skills: Data Analysis, Visualization, Cybersecurity",
    },
    { name: "Node.js", level: 70 },
    { name: "MongoDB", level: 65 },
  ];

  const experiences = [
    {
      title: "cybersecurity",
      company: "Phoenix Cybersecurity Form",
      period: "2024 - Present",
      description:
        "Focused on mobile security, contributing to app and web interface enhancements.Collaborated with teams to ensure security and design compliance for mobile applications.",
    },
    {
      title: "Data Analysis",
      company: "",
      period: "",
      description:
        "As a data analyst, I specialize in collecting, cleaning, transforming, and interpreting data to uncover valuable insights and support informed decision-making.",
    },
    {
      title: "Web Developer",
      company: "",
      period: "",
      description:
        "As a web developer, I design and build responsive, user-friendly websites.",
    },
  ];

  return (
    <section className="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I’m a Web Designer and Developer with a strong background in data
              science and cybersecurity. I enjoy building modern, responsive
              websites that are both beautiful and easy to use. My focus is on
              writing clean code, creating smooth user experiences, and making
              sure everything works well on all devices.
            </p>
            <p>
              Along with design and development, I’m passionate about learning
              new technologies and improving my skills. I’ve worked on several
              projects where I’ve collaborated with different teams to solve
              real-world problems. Whether it's designing a user-friendly
              interface or improving a site’s performance, I always aim to
              create something meaningful and impactful.
            </p>
          </div>
          <div className="skills">
            <h3>Skills</h3>
            <div className="skills-grid">
              {skills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}:)</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="experience">
            <h3>Experience</h3>
            <div className="experience-timeline">
              {experiences.map((exp, index) => (
                <div key={index} className="experience-item">
                  <div className="experience-header">
                    <h4>{exp.title}</h4>
                    <span className="company">{exp.company}</span>
                    <span className="period">{exp.period}</span>
                  </div>
                  <p>{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from "react";
import "../styles/About.css";

const About = () => {
  const skills = [
    { name: "HTML5", level: 90 },
    { name: "CSS3", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 75 },
    { name: "Node.js", level: 70 },
    { name: "MongoDB", level: 65 },
  ];

  const experiences = [
    {
      title: "Frontend Developer",
      company: "Tech Company",
      period: "2020 - Present",
      description:
        "Developing and maintaining web applications using React and modern JavaScript.",
    },
    {
      title: "Web Developer",
      company: "Digital Agency",
      period: "2018 - 2020",
      description: "Created responsive websites and implemented UI/UX designs.",
    },
  ];

  return (
    <section className="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate web developer with a strong focus on creating
              exceptional digital experiences. My journey in web development
              started with a curiosity about how things work on the internet,
              and that curiosity has grown into a deep passion for building
              beautiful, functional, and user-friendly applications.
            </p>
            <p>
              I specialize in building modern web applications using React and
              JavaScript, with a strong emphasis on clean code, performance, and
              accessibility. I'm always eager to learn new technologies and
              techniques to improve my skills and create better products.
            </p>
          </div>
          <div className="skills">
            <h3>Skills</h3>
            <div className="skills-grid">
              {skills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
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

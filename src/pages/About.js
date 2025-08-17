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
    { name: "Node.js", level: "" },
    { name: "MongoDB", level: "" },
  ];

  const experiences = [
    {
      title: "cybersecurity",
      company: "Phoenix Cybersecurity Form",
      period: "2024 - Present",
      description:
        "Focused on mobile security,Conducted a hands-on session on Android Exploitation as part of a cybersecurity workshop.Delivered practical demonstrations of real-world Android vulnerabilities and exploitation techniques.Engaged over 100+ participants, guiding them through reverse engineering, APK analysis, and defense strategies.Represented with Phoenix-Cybersecurity to promote awareness of Android app security.",
    },
    {
      title: "Data Analysis",
      company: "",
      period: "",
      description:
        "As a Data Analyst, I specialize in collecting, cleaning, transforming, and interpreting data to uncover valuable insights and support informed decision-making.I also served as a Coordinator for the “PromptCraft” event, where I led planning and execution, fostering innovation in prompt engineering.Additionally, I developed a Car Price Prediction Model, leveraging machine learning to accurately estimate vehicle prices based on key features and trends in the dataset.",
    },
    {
      title: "Web Developer amitwa",
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
              Hi! I’m a Data Analyst with a deep interest in AI/ML,
              cybersecurity, and web development. I enjoy working with data —
              from analyzing trends and building predictive models to creating
              dashboards that turn raw information into meaningful insights. At
              the same time, I love building modern, responsive websites that
              are fast, clean, and user-friendly. I also pay close attention to
              security, making sure everything I create follows cybersecurity
              best practices.
            </p>
            <p>
              Some of my recent projects include a Phishing Link Detection
              Model, which classifies URLs as malicious or legitimate to help
              protect users online, and a Car Price Prediction Model that uses
              machine learning to estimate vehicle prices based on various
              features like brand, year, mileage, and fuel type. I’m always
              exploring new tools and technologies to improve my skills and stay
              ahead. Whether it’s related to data, design, development, or
              security — I’m always ready to learn, build, and solve real-world
              problems
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

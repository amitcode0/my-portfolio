import React, { useEffect } from "react";
import "../styles/Home.css";

const Home = () => {
  useEffect(() => {
    const text = document.querySelector(".typing-text");
    const words = ["Developer", "Designer", "Creator"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 200;

    const type = () => {
      const currentWord = words[wordIndex];
      const currentChar = currentWord.substring(0, charIndex);
      text.textContent = currentChar;

      if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        typeSpeed = 200;
      } else if (isDeleting && charIndex > 0) {
        charIndex--;
        typeSpeed = 100;
      } else if (isDeleting) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500;
      } else {
        isDeleting = true;
        typeSpeed = 2000;
      }

      setTimeout(type, typeSpeed);
    };

    type();
  }, []);

  const achievements = [
    {
      title: "Hackathon Winner",
      description: "Won first place in the CodeFest 2023 hackathon",
      date: "2023",
    },
    {
      title: "Open Source Contributor",
      description: "Contributed to multiple open-source projects on GitHub",
      date: "2022-Present",
    },
    {
      title: "Tech Conference Speaker",
      description: "Spoke at ReactConf 2023 about modern web development",
      date: "2023",
    },
  ];

  const timeline = [
    {
      year: "2023",
      events: [
        {
          title: "Senior Software Engineer",
          company: "TechCorp",
          description: "Leading frontend development team",
        },
        {
          title: "React Advanced Course",
          description: "Completed advanced React.js course",
        },
      ],
    },
    {
      year: "2022",
      events: [
        {
          title: "Software Engineer",
          company: "WebDev Solutions",
          description: "Full-stack development role",
        },
        {
          title: "AWS Certification",
          description: "Earned AWS Solutions Architect certification",
        },
      ],
    },
    {
      year: "2021",
      events: [
        {
          title: "Junior Developer",
          company: "StartUp Inc",
          description: "Frontend development position",
        },
        {
          title: "Graduation",
          description: "Completed Bachelor's in Computer Science",
        },
      ],
    },
  ];

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Your Name</span>
            </h1>
            <h2 className="hero-subtitle">
              I'm a <span className="typing-text"></span>
            </h2>
            <p className="hero-description">
              I create beautiful and functional websites with a focus on user
              experience and clean code.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn primary">
                View My Work
              </a>
              <a href="#contact" className="btn secondary">
                Contact Me
              </a>
            </div>
            <div className="social-links">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-container">
              <img
                src="/profile-photo.jpg"
                alt="Your Name - Developer"
                className="profile-photo"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="achievements">
        <h2 className="section-title">Achievements</h2>
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card">
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
              <span className="date">{achievement.date}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="timeline-section">
        <h2 className="section-title">Professional Journey</h2>
        <div className="timeline">
          {timeline.map((yearData, index) => (
            <div key={index} className="timeline-year">
              <div className="year-marker">{yearData.year}</div>
              <div className="events">
                {yearData.events.map((event, eventIndex) => (
                  <div key={eventIndex} className="event">
                    <h3>{event.title}</h3>
                    {event.company && (
                      <p className="company">{event.company}</p>
                    )}
                    <p>{event.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

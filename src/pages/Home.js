import React, { useEffect } from "react";
import "../styles/Home.css";

const Home = () => {
  useEffect(() => {
    const text = document.querySelector(".typing-text");
    const words = ["Developer", "Data Analyst", "Cybersecurity Enthusiast"];
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
      title: "HICAThon 1.0 – CTF",
      description:
        "Participated in the Capture The Flag (CTF) competition at HICAThon 1.0 as a dedicated member of Team ENCIPHERX. ",
      date: "25th–26th March 2025",
    },
    {
      title: "CTF Participant & Attendee – Hack The Box Meetup",
      description:
        "Participated in Hack The Box 2nd Meetup 2024 at Dream11 Technologies, BKC. Gained insights on privilege escalation, CTF strategies, and adversary emulation frameworks like CALDERA & MITRE.",
      date: "2024",
    },
    {
      title: "Android Security Workshop Speaker",
      description:
        "Conducted a hands-on session on Android Exploitation at TECHNEX SVPCET under Encipher-X, in collaboration with Phoenix-Cybersecurity.",
      date: "2025",
    },
  ];

  const timeline = [
    {
      year: "2025",
      events: [
        {
          title: "Domain: Android security / Media",
          company: "Phoenix-Cybersecurity",
          description:
            "Creating CTF challenges, conducting workshops, and exploring new tools and techniques in cybersecurity.",
        },
        {
          title: "AWS Certification",
          description: "Earned AWS Solutions Architect certification",
        },
      ],
    },
    {
      year: "Cert",
      events: [
        {
          title: "DeepLearning.AI Certification",

          description:
            "Supervised Machine Learning: Regression and Classification",
        },
        {
          title: "PromptCraft:Coordinator",
          company: "PromptCraft: AI Masters Event",
          description:
            "Organized and led the event successfully Date:October 5, 2024",
        },
      ],
    },
    {
      year: "2024",
      events: [
        {
          title: "Graduation",
          company: "SVPCET",
          description:
            "Bachelor of Technology (B.Tech) in Data Science [2022-2026]",
        },
        {
          title: "B.Sc.(CS) Honours",
          company: "Somaiya Vidyavihar University",
          description: "2021-2022",
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
              Hi, I'm <span className="highlight">Amit Prajapati</span>
            </h1>
            <h2 className="hero-subtitle">
              I'm a <span className="typing-text"></span>
            </h2>
            <p className="hero-description">
              I’m a passionate Data Analyst, Developer, and Cybersecurity
              Enthusiast with strong critical thinking and problem-solving
              skills
            </p>
            <div className="hero-buttons">
              <a href="https://amitcode0.page/projects" className="btn primary">
                View My Work
              </a>
              <a
                href="https://amitcode0.page/contact"
                className="btn secondary"
              >
                Contact Me
              </a>
            </div>
            <div className="social-links">
              <a
                href="https://github.com/amitcode0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/amitprajapaticode0/"
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
                src={require("../assets/1.jpg")}
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
          {achievements.map((achievement, index) => {
            // Add link only to the HICAThon 1.0 – CTF card and Android Security Workshop Speaker card
            const isHicathon = achievement.title === "HICAThon 1.0 – CTF";
            const isAndroidWorkshop =
              achievement.title === "Android Security Workshop Speaker";
            let link = null;
            if (isHicathon) {
              link =
                "https://www.linkedin.com/posts/phoenix-cybersec_phoenixcybersec-hicathon2025-capturetheflag-activity-7311460837901176833-5TjJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9BA4oBGeRelIBFUW_TE7CaPURYi16pZDY";
            } else if (isAndroidWorkshop) {
              link =
                "https://www.linkedin.com/posts/amitprajapaticode0_cybersecurity-androidexploitation-encipherx-activity-7290025823007395840-JRuR?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9BA4oBGeRelIBFUW_TE7CaPURYi16pZDY";
            }
            const cardContent = (
              <div key={index} className="achievement-card">
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
                <span className="date">{achievement.date}</span>
              </div>
            );
            return link ? (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {cardContent}
              </a>
            ) : (
              cardContent
            );
          })}
        </div>
      </section>

      <section className="timeline-section">
        <h2 className="section-title">Professional Journey</h2>
        <div className="timeline">
          {timeline.map((yearData, index) => (
            <div key={index} className="timeline-year">
              <div className="year-marker">{yearData.year}</div>
              <div className="events">
                {yearData.events.map((event, eventIndex) => {
                  // Add link only to the AWS Certification and DeepLearning.AI Certification events
                  const isAwsCert =
                    event.title === "AWS Certification" &&
                    event.description ===
                      "Earned AWS Solutions Architect certification";
                  const isDeepLearningCert =
                    event.title === "DeepLearning.AI Certification" &&
                    event.description ===
                      "Supervised Machine Learning: Regression and Classification";
                  // Alternate left/right by event index
                  const eventSide = eventIndex % 2 === 0 ? "left" : "right";
                  const eventContent = (
                    <div key={eventIndex} className={`event ${eventSide}`}>
                      <h3>{event.title}</h3>
                      {event.company && (
                        <p className="company">{event.company}</p>
                      )}
                      <p>{event.description}</p>
                    </div>
                  );
                  if (isAwsCert) {
                    return (
                      <a
                        key={eventIndex}
                        href="https://moonshot.scaler.com/s/li/2xe7LnYsdM"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        {eventContent}
                      </a>
                    );
                  } else if (isDeepLearningCert) {
                    return (
                      <a
                        key={eventIndex}
                        href="https://www.coursera.org/account/accomplishments/certificate/HR49RFVCOKI4"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        {eventContent}
                      </a>
                    );
                  } else {
                    return eventContent;
                  }
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

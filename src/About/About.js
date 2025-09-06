import React from "react";
import "./about.css";
import Fade from "react-reveal/Fade";
import Typewriter from "typewriter-effect";
import profile from "../images/a.jpg";

const About = () => {
  return (
    <div className="container about-section" id="about">
      <div className="row d-flex justify-content-around align-items-center">
        <Fade bottom disabled>
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
            <div className="about-image">
              <img
                src={profile}
                // src="https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="about_image"
              />
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="about-details">
              <div className="about-title">
                <h5>About me</h5>
                <span className="line"></span>
              </div>

              <Fade left>
              <p className="h4 text-primary fw-bold mb-2 text-left py-3 fade-in">
                  Hi, I am Kalpalathathika Ramanujam
                </p>
                <div className="animated-role-container">
                  <h3 className="animated-role-text">
                    I am a{" "}
                    <span className="typewriter-text">
                      <Typewriter
                        options={{
                          strings: [
                            "Full-Stack Developer",
                            "React/TypeScript Nerd",
                            "C# .NET Developer"
                          ],
                          autoStart: true,
                          loop: true,
                          delay: 75,
                          deleteSpeed: 50,
                        }}
                      />
                    </span>
                  </h3>
                </div>
                <p>
                    With 3+ years of experience developing scalable, accessible web applications using React, Angular, Next.js, C# .NET, Node.js, and both SQL and NoSQL databases. I've contributed to high-impact systems across fintech, publishing, and enterprise domains, deploying solutions on AWS with a strong focus on performance, testing, and maintainability.
                </p>

                <p>
                    During my recent internships, I worked with GitHub Copilot, Amazon Q, and ChatGPT prompt engineering to accelerate documentation, testing, and debugging. I’m currently expanding my knowledge in system design while deepening my exploration of prompt engineering, with the goal of building smarter, AI-augmented engineering systems that enhance design, development, and decision-making at scale.
                </p>

              </Fade>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default About;
import React from "react";
import "./about.css";
import Fade from "react-reveal/Fade";
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
              <p className="h4 text-primary fw-bold mb-2 text-center py-3 fade-in">
                  Hi, I am Kalpalathika Ramanujam
                </p>
                <p>
                  Motivated Software Engineer pursuing a Master of Science in Computer Science at Rochester Institute of Technology with a strong background in full-stack development and data analytics. Proficient in C#, Python, and JavaScript frameworks, with experience in developing scalable applications, optimizing performance, and leveraging automation technologies.
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
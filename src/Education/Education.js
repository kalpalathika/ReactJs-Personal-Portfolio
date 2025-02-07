import React, { useState } from "react";
import Flip from "react-reveal/Flip";
import { MdCastForEducation } from "react-icons/md";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";

const Education = () => {
  const data = [
    {
      name: "Masters of Science in Computer Science",
      position: "Rochester Institute of Technology",
      year: "Jan, 2023 - Dec, 2024",
      des: "Courses: Advanced Object Oriented Programming, Computational Problem Solving, Foundations of Algorithms, Big Data Analytics ",
    },

    {
      name: "Bachelor of Engineering in Computer Engineering",
      position: "SIES Graduate School of Technology",
      year: "Aug, 2016 - May, 2019",
      des: "Courses: Machine Learning, Software Development, Database Systems, Artificial Intelligence",
    }
  ];

  return (
    <div className="container" id="education">
      <div className="section-title">
        <Flip left>
          <h5>Education</h5>
          <span className="line"></span>
        </Flip>
      </div>

      <VerticalTimeline lineColor="#FF8042">
        {data.map((item, index) => (
          <VerticalTimelineElement
            contentStyle={{ background: "#fff", color: "#525355" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date={item.year}
            dateClassName="date"
            iconStyle={{ background: "rgb(56, 209, 3)", color: "#fff" }}
            icon={<MdCastForEducation />}
          >
            <h3 className="vertical-timeline-element-titles">{item.name}</h3>
            <h4 className="vertical-timeline-element-subtitles">
              {item.position}
            </h4>

            <p>{item.des}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Education;

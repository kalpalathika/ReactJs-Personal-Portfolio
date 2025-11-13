import React, { useEffect } from "react";
import "./sidebarlist.css";
import {
  FcNightPortrait,
  FcHome,
  FcTodoList,
  FcContacts,
  FcFactory,
  FcSalesPerformance,
  FcReading,
} from "react-icons/fc";


import { MdBiotech } from "react-icons/md";


import { Link } from "react-scroll";

import { MdCastForEducation } from "react-icons/md";

const SidebarList = () => {
  return (
    <div className="navbar-items-sliding">
      <ul>
        <li className="nav-item-slide">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}
          >
            <span className="nav-icon"><FcHome size={25} /></span>
            <span className="nav-text">Home</span>
          </Link>
        </li>

        <li className="nav-item-slide">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}
          >
            <span className="nav-icon"><FcNightPortrait size={25} /></span>
            <span className="nav-text">About</span>
          </Link>
        </li>

        <li className="nav-item-slide">
          <Link
            to="project"
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}
          >
            <span className="nav-icon"><FcTodoList size={25} /></span>
            <span className="nav-text">Projects</span>
          </Link>
        </li>

        <li className="nav-item-slide">
          <Link
            to="workexperience"
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}
          >
            <span className="nav-icon"><FcFactory size={25} /></span>
            <span className="nav-text">Work Exp</span>
          </Link>
        </li>

        <li className="nav-item-slide">
          <Link
            to="academicexperience"
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}
          >
            <span className="nav-icon"><FcReading size={25} /></span>
            <span className="nav-text">Academic</span>
          </Link>
        </li>

        <li className="nav-item-slide">
          <Link
            to="education"
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}
          >
            <span className="nav-icon"><MdCastForEducation size={25} color="yellow" /></span>
            <span className="nav-text">Education</span>
          </Link>
        </li>

        <li className="nav-item-slide">
          <Link
            to="testimonial"
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}
          >
            <span className="nav-icon"><FcSalesPerformance size={25} /></span>
            <span className="nav-text">Testimonial</span>
          </Link>
        </li>

        <li className="nav-item-slide">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}
          >
            <span className="nav-icon"><FcContacts size={25} /></span>
            <span className="nav-text">Contact</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SidebarList;

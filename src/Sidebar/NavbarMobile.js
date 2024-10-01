import React, { useState } from "react";
import "./navmobile.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll";
import profileImg from "../images/a.jpg";

import {
  FcNightPortrait,
  FcHome,
  FcTodoList,
  FcContacts,
  FcFactory,
  FcSalesPerformance,
} from "react-icons/fc";
import { MdBiotech } from "react-icons/md";
import { MdCastForEducation } from "react-icons/md";

const NavbarMobile = ({ toggleTheme, theme }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="responsivenav-for-frontclient">
      <div className="container-fluid mobile-view-header">
        <p>
          <GiHamburgerMenu size={25} onClick={handleClick} />
        </p>
      </div>

      {open ? (
        <div className="mobile-nav">
          <div className="mt-4">
            <img
              src={profileImg}
              alt="Profile"
              className="rounded-circle"
              style={{ width: '100px', height: '100px', objectFit: 'cover' }}
            />
          </div>
          <ul>

            <li className="nav-item-mobile">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcNightPortrait size={25} />
                About
              </Link>
            </li>

            <li className="nav-item-mobile">
              <Link
                to="workexperience"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcFactory size={25} />
                Work Experience
              </Link>
            </li>

            <li className="nav-item-mobile">
              <Link
                to="techstack"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <MdBiotech size={25} />
                Skills
              </Link>
            </li>

            <li className="nav-item-mobile">
              <Link
                to="education"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <MdCastForEducation size={25} color="yellow" />
                Education
              </Link>
            </li>

            <li className="nav-item-mobile">
              <Link
                to="project"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcTodoList size={25} />
                Projects
              </Link>
            </li>

            <li className="nav-item-mobile">
              <Link
                to="testimonial"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcSalesPerformance size={25} />
                Testimonial
              </Link>
            </li>

            <li className="nav-item-mobile">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcContacts size={25} />
                Contact
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default NavbarMobile;

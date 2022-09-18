import React from "react";
import "../styles/Navbar.css";
import { FaAlignJustify } from "react-icons/fa";
import resume from "../Resume/Sonu_Prasad_Resume.pdf";

export const Navbar = () => {
  const [state, setState] = React.useState(true);
  return (
    <div className="navbar">
      <div>
        <div className="navbar_container">
          <ul className="navbar_left">
            <div className="navbar_left_logo">
              <h2>
                SO<span>NU</span>
              </h2>
            </div>
          </ul>

          {state ? (
            <ul className="navbar_right">
              <li>
                <a href="#">HOME</a>
              </li>
              <li>
                <a href="#about"> ABOUT</a>
              </li>
              <li>
                <a href="#project">PROJECT</a>
              </li>
              <li>
                <a href="#skillspage">SKILLS</a>
              </li>
              <li>
                <a href="#contact">CONTACT</a>
              </li>
              <li>
                <a download href={resume}>
                  RESUME
                </a>
              </li>
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="toggle" onClick={() => setState(!state)}>
        <FaAlignJustify />
      </div>
    </div>
  );
};

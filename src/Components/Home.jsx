import React from "react";
import "../styles/Home.css";
import profile from "../Images/profile.png";
import { FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { TiArrowUp } from "react-icons/ti";
import { RiLinkedinFill } from "react-icons/ri";
import { Box, SimpleGrid } from "@chakra-ui/react";
import resume from "../Resume/Sonu_Prasad_Resume.pdf";

export const Home = () => {
  return (
    <div className="home_Container" id="home">
      <SimpleGrid columns={[1, 1, 1, 2]}>
        <Box height="auto">
          <div className="home_Container_box">
            <div className="home_box_content">
              <h5>Hello, my name is</h5>
              <h2>Sonu Prasad</h2>
              <p>
                I'm a <span>Full Stack Developer.</span>
              </p>
              <a download href={resume}>
                <button>Resume</button>
              </a>
            </div>
          </div>
        </Box>

        {/* -------------------------------------------------------------------------------- */}

        <Box height="auto">
          <div className="home_Container_box">
            <div className="home_box_img">
              <img src={profile} alt="Profile_image" />
            </div>
          </div>
        </Box>
      </SimpleGrid>

      <div className="home_box_ul">
        <ul className="header_ul">
          <li>
            <a
              href="https://github.com/sonuprasad66"
              rel="noopener norefferer"
              target="_blank"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/sonuprasad66"
              rel="noopener norefferer"
              target="_blank"
            >
              <RiLinkedinFill />
            </a>
          </li>

          <li>
            <a
              href="mailto:sp.srp1999@gmail.com"
              rel="noopener norefferer"
              target="_blank"
            >
              <FiMail />
            </a>
          </li>
        </ul>
      </div>

      <div className="home_up_arrow">
        <a href="#home">
          <TiArrowUp />
        </a>
      </div>
    </div>
  );
};

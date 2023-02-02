import React from "react";
import { Box, SimpleGrid, useColorMode } from "@chakra-ui/react";
import "./Projects.css";
import clockify from "../Images/clockify.png";
import rymo from "../Images/rymo.webp";
import urban from "../Images/landing.png";
import ndtv from "../Images/ndtv.jpg";
import zoomcar from "../Images/zoomcar.jpg";
import portfolio from "../Images/my_portfolio.png";
import weather_app from "../Images/weather_app.png";
import chat_app from "../Images/chat_app.png";
import tata1mg from "../Images/tata1mg.png";
import youtube from "../Images/youtube.png";
import language from "../Images/language.png";
import { FaGithub, FaEye } from "react-icons/fa";

export const Projects = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div
      id="project"
      className="project_main_container"
      style={{
        backgroundColor: colorMode == "light" ? "#edf2f8" : "#1a202c",
      }}
    >
      <div className="project_container">
        <div className="project_heading">
          <h2>
            <span>My</span> Creative <span>Projects </span>Section
          </h2>
        </div>

        <div className="project_grid">
          <SimpleGrid columns={[1, 1, 2, 3]} spacing="40px">
            <Box>
              <div
                className="project_box"
                style={{
                  backgroundColor: colorMode == "light" ? "white" : "#1a202c",
                }}
              >
                <div className="project_image">
                  <img src={tata1mg} alt="tata1mg" />
                </div>

                <div className="project_name">
                  <h2>Tata 1mg Clone</h2>
                </div>
                <div className="project_desc">
                  <p>
                    TATA 1mg.com is an e-commerce web application that widely
                    provides e-pharmacy, diagnostics, e-consultation, and
                    healthcare solutions related service all across India.
                  </p>
                </div>
                <div className="project_tech_stack">
                  <h5>
                    <span>Tech Stack :</span> React, Redux, JavaScript, CSS,
                    Chakra UI, Node, Express, MongoDB
                  </h5>
                </div>
                <div className="project_icon">
                  <div className="github_link">
                    <a
                      href="https://github.com/sonuprasad66/omniscient-sheet-6598"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <FaGithub />
                    </a>
                  </div>
                  <div className="deploy_link">
                    <a
                      href="https://tata-1mg-clone-sage.vercel.app/"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <FaEye />
                    </a>
                  </div>
                </div>
              </div>
            </Box>

            <Box>
              <div
                className="project_box"
                style={{
                  backgroundColor: colorMode == "light" ? "white" : "#1a202c",
                }}
              >
                <div className="project_image">
                  <img src={urban} alt="urban" />
                </div>

                <div className="project_name">
                  <h2>Urban Company</h2>
                </div>
                <div className="project_desc">
                  <p>
                    This website is a clone of "Urban Company" I implimented
                    some functionalities like login & signup for the
                    authentication, add services, buy services, blog page, etc.
                  </p>
                </div>
                <div className="project_tech_stack">
                  <h5>
                    <span>Tech Stack :</span> React, Redux, JavaScript, API,
                    CSS, Chakra UI
                  </h5>
                </div>
                <div className="project_icon">
                  <div className="github_link">
                    <a
                      href="https://github.com/sonuprasad66/tense-visitor-349"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <FaGithub />
                    </a>
                  </div>
                  <div className="deploy_link">
                    <a
                      href="https://urban-company-ruddy.vercel.app/"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <FaEye />
                    </a>
                  </div>
                </div>
              </div>
            </Box>

            <Box>
              <div
                className="project_box"
                style={{
                  backgroundColor: colorMode == "light" ? "white" : "#1a202c",
                }}
              >
                <div className="project_image">
                  <img src={clockify} alt="clockify" />
                </div>

                <div className="project_name">
                  <h2>Clockify Clone</h2>
                </div>
                <div className="project_desc">
                  <p>
                    Clockify is one of the best Time tracking websites. On this
                    website, you can easily track your time and manage also. A
                    individual project built by me executed in 5 days.
                  </p>
                </div>
                <div className="project_tech_stack">
                  <h5>
                    <span>Tech Stack :</span> React, JavaScript, Chakra UI, CSS,
                    React Icons
                  </h5>
                </div>
                <div className="project_icon">
                  <div className="github_link">
                    <a
                      href="https://github.com/sonuprasad66/brief-shirt-7318"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <FaGithub />
                    </a>
                  </div>
                  <div className="deploy_link">
                    <a
                      href="https://snazzy-semifreddo-553037.netlify.app/"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <FaEye />
                    </a>
                  </div>
                </div>
              </div>
            </Box>

            <Box>
              <div
                className="project_box"
                style={{
                  backgroundColor: colorMode == "light" ? "white" : "#1a202c",
                }}
              >
                <div className="project_image">
                  <img src={chat_app} alt="chat_app" />
                </div>

                <div className="project_name">
                  <h2>Chatting App</h2>
                </div>
                <div className="project_desc">
                  <p>
                    This is a Chatting Application . In this project I build and
                    deploy a real-time chat application within 2 days With
                    Authentication and Avtar. Using React.js, Socket.io, Nodejs
                  </p>
                </div>
                <div className="project_tech_stack">
                  <h5>
                    <span>Tech Stack :</span> React, Node, Express, MongoDB,
                    WebSocket, Styled-Components, CSS, JavaScript
                  </h5>
                </div>
                <div className="project_icon">
                  <div className="github_link">
                    <a
                      href="https://github.com/sonuprasad66/NoApp_Assignment"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <FaGithub />
                    </a>
                  </div>
                  <div className="deploy_link">
                    <a
                      href="https://real-time-chat-app-zeta.vercel.app/"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <FaEye />
                    </a>
                  </div>
                </div>
              </div>
            </Box>

            <Box>
              <div
                className="project_box"
                style={{
                  backgroundColor: colorMode == "light" ? "white" : "#1a202c",
                }}
              >
                <div className="project_image">
                  <img src={weather_app} alt="weather_app" />
                </div>

                <div className="project_name">
                  <h2>Weather App</h2>
                </div>
                <div className="project_desc">
                  <p>
                    It`s a web app to show the weather forecast details using
                    weather API & here you will be able to search for all the
                    weather details for any city. It is also detect your current
                    location.
                  </p>
                </div>
                <div className="project_tech_stack">
                  <h5>
                    <span>Tech Stack :</span> React, Redux, Chakra UI, CSS,
                    JavaScript, Rest API
                  </h5>
                </div>
                <div className="project_icon">
                  <div className="github_link">
                    <a
                      href="https://github.com/sonuprasad66/Weather_App"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <FaGithub />
                    </a>
                  </div>
                  <div className="deploy_link">
                    <a
                      href="https://sonu-weather-app.vercel.app/"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <FaEye />
                    </a>
                  </div>
                </div>
              </div>
            </Box>

            <Box>
              <div
                className="project_box"
                style={{
                  backgroundColor: colorMode == "light" ? "white" : "#1a202c",
                }}
              >
                <div className="project_image">
                  <img
                    style={{ width: "100%" }}
                    src={language}
                    alt="language"
                  />
                </div>

                <div className="project_name">
                  <h2>Language Translator App</h2>
                </div>
                <div className="project_desc">
                  <p>
                    This project is about building a web app for language
                    translation using language translator API. Here you will be
                    able to translate between multiple languages very easily.
                  </p>
                </div>
                <div className="project_tech_stack">
                  <h5>
                    <span>Tech Stack :</span> React, HTML, CSS, JavaScript,
                    Language-API, Font-Awesome
                  </h5>
                </div>
                <div className="project_icon">
                  <div className="github_link">
                    <a
                      href="https://github.com/sonuprasad66/Language_Translator_App"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <FaGithub />
                    </a>
                  </div>
                  <div className="deploy_link">
                    <a
                      href="https://sonu-language-translator-app.vercel.app/"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <FaEye />
                    </a>
                  </div>
                </div>
              </div>
            </Box>

            <Box>
              <div
                className="project_box"
                style={{
                  backgroundColor: colorMode == "light" ? "white" : "#1a202c",
                }}
              >
                <div className="project_image">
                  <img src={youtube} alt="youtube" />
                </div>

                <div className="project_name">
                  <h2>YouTube Clone</h2>
                </div>
                <div className="project_desc">
                  <p>
                    This website is a clone of "YouTube" I implimented some
                    functionalities like user can search any types of videos and
                    channel name also he can play video.
                  </p>
                </div>
                <div className="project_tech_stack">
                  <h5>
                    <span>Tech Stack :</span> HTML, CSS, JavaScript,
                    YouTube-API, Font-Awesome
                  </h5>
                </div>
                <div className="project_icon">
                  <div className="github_link">
                    <a
                      href="https://github.com/sonuprasad66/YouTube_Clone"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <FaGithub />
                    </a>
                  </div>
                  <div className="deploy_link">
                    <a
                      href="https://taupe-lily-fd39d4.netlify.app/"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <FaEye />
                    </a>
                  </div>
                </div>
              </div>
            </Box>

            <Box>
              <div
                className="project_box"
                style={{
                  backgroundColor: colorMode == "light" ? "white" : "#1a202c",
                }}
              >
                <div className="project_image">
                  <img src={rymo} alt="clockify" />
                </div>

                <div className="project_name">
                  <h2>Rymo Clone</h2>
                </div>
                <div className="project_desc">
                  <p>
                    This website is a clone of "Rymo.com" which is an e-commerce
                    store & here I implimented some functionalities like add to
                    cart etc.
                  </p>
                </div>
                <div className="project_tech_stack">
                  <h5>
                    <span>Tech Stack :</span> HTML, CSS, JavaScript, Boostrap,
                    Font-Awesome
                  </h5>
                </div>
                <div className="project_icon">
                  <div className="github_link">
                    <a
                      href="https://github.com/sonuprasad66/Rymo_Clone"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <FaGithub />
                    </a>
                  </div>
                  <div className="deploy_link">
                    <a
                      href="https://rad-kelpie-75b4db.netlify.app/index.html"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <FaEye />
                    </a>
                  </div>
                </div>
              </div>
            </Box>

            {/* <Box>
              <div
                className="project_box"
                style={{
                  backgroundColor: colorMode == "light" ? "white" : "#1a202c",
                }}
              >
                <div className="project_image">
                  <img src={ndtv} alt="clockify" />
                </div>

                <div className="project_name">
                  <h2>Ndtv Clone</h2>
                </div>
                <div className="project_desc">
                  <p>
                    This website is a clone of "Ndtv.com" which is a news
                    provider company here you can see all types of news. I
                    implemented some pages like shopping portal etc.
                  </p>
                </div>
                <div className="project_tech_stack">
                  <h5>
                    <span>Tech Stack :</span> HTML, CSS, JavaScript.
                  </h5>
                </div>
                <div className="project_icon">
                  <div className="github_link">
                    <a
                      href="https://github.com/rsoni2843/ndtv"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <FaGithub />
                    </a>
                  </div>
                  <div className="deploy_link">
                    <a
                      href="https://resilient-rolypoly-319f18.netlify.app/"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <FaEye />
                    </a>
                  </div>
                </div>
              </div>
            </Box> */}

            <Box>
              <div
                className="project_box"
                style={{
                  backgroundColor: colorMode == "light" ? "white" : "#1a202c",
                }}
              >
                <div className="project_image">
                  <img src={zoomcar} alt="clockify" />
                </div>

                <div className="project_name">
                  <h2>ZoomCar Clone</h2>
                </div>
                <div className="project_desc">
                  <p>
                    This website is a clone of "ZoomCar.com" which is a car
                    provided company here you can book car for traveling one
                    place to another place.
                  </p>
                </div>
                <div className="project_tech_stack">
                  <h5>
                    <span>Tech Stack :</span> HTML, CSS, Advance-JavaScript,
                    Font Awasome
                  </h5>
                </div>
                <div className="project_icon">
                  <div className="github_link">
                    <a
                      href="https://github.com/Abiramirajasekar/ZoomCar"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <FaGithub />
                    </a>
                  </div>
                  <div className="deploy_link">
                    <a
                      href="https://relaxed-axolotl-1b3408.netlify.app/"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <FaEye />
                    </a>
                  </div>
                </div>
              </div>
            </Box>

            {/* <Box>
              <div
                className="project_box"
                style={{
                  backgroundColor: colorMode == "light" ? "white" : "#1a202c",
                }}
              >
                <div className="project_image">
                  <img src={portfolio} alt="portfolio" />
                </div>

                <div className="project_name">
                  <h2>My Portfolio</h2>
                </div>
                <div className="project_desc">
                  <p>
                    This is my portfolio which I recently made using React,
                    JavaScript, CSS and Chakra UI.
                  </p>
                </div>
                <div className="project_tech_stack">
                  <h5>
                    <span>Tech Stack :</span> React, JavaScript, Chakra UI, CSS,
                    React Icons
                  </h5>
                </div>
                <div className="project_icon">
                  <div className="github_link">
                    <a
                      href="https://github.com/sonuprasad66/sonuprasad66.github.io/tree/master"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <FaGithub />
                    </a>
                  </div>
                  <div className="deploy_link">
                    <a
                      href="https://sonuprasad66.github.io/"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      <FaEye />
                    </a>
                  </div>
                </div>
              </div>
            </Box> */}
          </SimpleGrid>
        </div>
      </div>
    </div>
  );
};

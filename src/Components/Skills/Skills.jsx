import React from "react";
import { Box, SimpleGrid, useColorMode } from "@chakra-ui/react";
import "./Skills.css";
import html from "../Images/html.png";
import css from "../Images/css.png";
import boostrap from "../Images/boostrap.png";
import material from "../Images/materialui.png";
import js from "../Images/js.jpg";
import ts from "../Images/typescript.png";
import react from "../Images/react.svg";
import redux from "../Images/redux.png";
import chakra from "../Images/chakraui.png";
import postman from "../Images/postman.png";
import github from "../Images/github.png";
import gitlab from "../Images/gitlab.png";
import mongodb from "../Images/mongodb.png";
import dsa from "../Images/dsa.png";
import nodejs from "../Images/nodejs.png";
import expressjs from "../Images/expressjs.webp";
import netlify from "../Images/netlify.svg";
import vercel from "../Images/vercel.png";
import mocha from "../Images/mocha.png";
import docker from "../Images/docker.png";
import linux from "../Images/linux.png";
import render from "../Images/render.png";
import playwright from "../Images/playwright.png";
import vscode from "../Images/vscode.png";

import { useState } from "react";

export const Skills = () => {
  const [btn, setBtn] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  let skills_data = [
    {
      url: react,
      name: "React Js",
      category1: "frontend",
    },
    {
      url: redux,
      name: "Redux Js",
      category1: "frontend",
    },
    {
      url: nodejs,
      name: "Node Js",
      category2: "backend",
    },

    {
      url: expressjs,
      name: "Express Js",
      category2: "backend",
    },
    {
      url: mongodb,
      name: "MongoDB",
      category2: "backend",
    },
    {
      url: chakra,
      name: "Chakra UI",
      category1: "frontend",
    },
    {
      url: material,
      name: "Material UI",
      category1: "frontend",
    },
    {
      url: boostrap,
      name: "Boostrap",
      category1: "frontend",
    },
    {
      url: ts,
      name: "TypeScript",
      category1: "frontend",
    },
    {
      url: mocha,
      name: "Mocha",
      category2: "backend",
    },

    {
      url: playwright,
      name: "Playwright",
      category1: "frontend",
    },
    {
      url: js,
      name: "JavaScript",
      category1: "frontend",
    },
    {
      url: html,
      name: "HTML",
      category1: "frontend",
    },
    {
      url: css,
      name: "CSS",
      category1: "frontend",
    },
    {
      url: docker,
      name: "Docker",
      category3: "tools",
    },
    {
      url: linux,
      name: "Linux",
      category3: "tools",
    },
    {
      url: vscode,
      name: "VS Code",
      category3: "tools",
    },
    {
      url: postman,
      name: "Postman",
      category3: "tools",
    },
    {
      url: github,
      name: "GitHub",
      category3: "tools",
    },
    {
      url: gitlab,
      name: "GitLab",
      category3: "tools",
    },
    {
      url: render,
      name: "Render",
      category3: "tools",
    },
    {
      url: vercel,
      name: "Vercel",
      category3: "tools",
    },
    {
      url: netlify,
      name: "Netlify",
      category3: "tools",
    },
    {
      url: dsa,
      name: "DSA",
      category2: "backend",
    },
  ];

  const [skills, setSkills] = useState(skills_data);

  const handleAll = () => {
    setSkills(skills_data);
    setBtn(true);
  };

  const handleFrontend = () => {
    let data = skills_data.filter((elem, index) => {
      return elem.category1 === "frontend";
    });

    setSkills(data);
    setBtn(false);
  };

  const handleBackend = () => {
    let data = skills_data.filter((elem, index) => {
      return elem.category2 === "backend";
    });

    setSkills(data);
    setBtn(false);
  };

  const handleTools = () => {
    let data = skills_data.filter((elem, index) => {
      return elem.category3 === "tools";
    });

    setSkills(data);
    setBtn(false);
  };

  // console.log(skills);

  return (
    <div className="skills_container" id="skills">
      <div className="skills_heading">
        <h2>
          Tech <span>Stack</span>
        </h2>
      </div>

      <div className="skills_btn">
        <button onClick={handleAll}>All</button>
        <button onClick={handleFrontend}>Frontend</button>
        <button onClick={handleBackend}>Backend</button>
        <button onClick={handleTools}>Tools</button>
      </div>

      <div className="skills_grid">
        <SimpleGrid columns={[2, 3, 4, 8]} spacing="30px">
          {skills?.map((elem) => (
            <Box key={elem.name}>
              <div
                className={
                  colorMode == "light"
                    ? "skills_grid_box"
                    : "skills_grid_box_dark"
                }
              >
                <div className="skills_grid_box_img">
                  <img src={elem.url} alt="skills_logo" />
                </div>

                <div className="skills_grid_box_h3">
                  <h3>{elem.name}</h3>
                </div>
              </div>
            </Box>
          ))}
        </SimpleGrid>
      </div>
    </div>
  );
};

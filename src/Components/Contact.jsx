import "../styles/Contact.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { Box, SimpleGrid } from "@chakra-ui/react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5h90sgm",
        "template_u1tdmba",
        form.current,
        "hXcQ_GBwksMfhF8mb"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact_container" id="contact">
      <div className="contact_content">
        <div className="contact_heading">
          <h2>
            Take A <span>Coffee</span> And <span>Chat</span> With Me
          </h2>
        </div>

        {/* <div className="main_box"></div> */}

        <div className="input_box">
          <div className="contact_icon">
            <SimpleGrid columns={[1, 1, 2, 3]} spacing="20px">
              <Box>
                <a
                  href="https://www.linkedin.com/in/sonuprasad66/"
                  rel="noopener norefferer"
                  target="_blank"
                >
                  <div className="icon" id="icon1">
                    <FaLinkedin />
                    <h3>LinkedIn</h3>
                  </div>
                </a>
              </Box>
              <Box>
                <a
                  href="https://github.com/sonuprasad66"
                  rel="noopener norefferer"
                  target="_blank"
                >
                  <div className="icon" id="icon2">
                    <FaGithub />
                    <h3>GitHub</h3>
                  </div>
                </a>
              </Box>
              <Box>
                <a
                  href="mailto:sp.srp1999@gmail.com"
                  rel="noopener norefferer"
                  target="_blank"
                >
                  <div className="icon" id="icon3">
                    <FiMail />
                    <h3>Gmail</h3>
                  </div>
                </a>
              </Box>
            </SimpleGrid>
          </div>

          <div className="contact_information">
            <form ref={form} onSubmit={sendEmail}>
              <div>
                <input
                  required={true}
                  name="user_name"
                  className="input_tag"
                  type="text"
                  placeholder="Full Name"
                />
              </div>
              <div>
                <input
                  required={true}
                  name="user_email"
                  className="input_tag"
                  type="text"
                  placeholder="Email"
                />
              </div>
              <div>
                <input
                  required={true}
                  className="input_tag"
                  type="number"
                  placeholder="Number"
                />
              </div>
              <div className="input_message">
                <textarea
                  required={true}
                  name="message"
                  className="input_tag_text_message"
                  type="text"
                  placeholder="Your Message"
                />
              </div>
              <div>
                <button type="submit" className="input_btn">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="contact_last">
        <p>Designed and build by Sonu Prasad, 2022 All rights reserved.</p>
      </div>
    </div>
  );
};

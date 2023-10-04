import React, {useContext} from "react";
import "./App.css";
import "./styles/StyleMobile.css";
import "./styles/StyleNav.css";
import "./styles/StyleHome.css";
import "./styles/StyleAbout.css";
import "./styles/StyleContact.css";
import "./styles/StyleProjects.css";
import { opnenNav, closeNav } from "./Nav";
import {IntlProvider, FormattedMessage} from "react-intl";
import { langContext } from "./context/langContext";
import { ContactUs } from "./contactUs/ContactUs.js";
import ReactSwitch from "react-switch";
import { useState } from "react";
import { useThemeContext } from  "./context/themeContext.js";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsMoonStars, BsSun } from "react-icons/bs";
import { SiGithub, SiLinkedin } from "react-icons/si"
import Lottie from "lottie-react";
import Planet from "./lottieFiles/Planet.json";
import MakingProjects from "./lottieFiles/MakingProjects.json";
import { motion } from "framer-motion";

function App() {

  const idioma = useContext(langContext);

  const {contextTheme, setContextTheme} = useThemeContext()

  const [checked, setChecked] = useState(false)
  const handleSwitch = (nextChecked) => {
    setContextTheme((state) => (state === "Light" ? "Dark":"Light"))
    setChecked(nextChecked)
  }

  return (
      <div className="App" id={contextTheme}>
        <header className="header">
          <div className="nav">
            <div className="menu">
              <a onClick={opnenNav}>
                <AiOutlineMenu className="open-line-menu"/>
              </a>
            </div> 
            <div className="overlay" id="mobile-menu">
              <div className="overlay-container">
                <ul className="nav-links-phone">
                  <li><a href="#home" onClick={closeNav}>
                    <p><FormattedMessage 
                      id="app.home" 
                      defaultMessage="Home"/></p></a>
                  </li>
                  <li><a href="#about" onClick={closeNav}>
                    <p><FormattedMessage 
                      id="app.about" 
                      defaultMessage="About"/></p></a>
                  </li>
                  <li><a href="#projects" onClick={closeNav}>
                    <p><FormattedMessage 
                      id="app.projects" 
                      defaultMessage="Projects"/></p></a>
                  </li>
                  <li><a href="#contacts" onClick={closeNav}>
                    <p><FormattedMessage 
                      id="app.contacts" 
                      defaultMessage="Contacts"/></p></a>
                  </li>
                </ul>
              </div>
              <div className="close">
                <a onClick={closeNav}>
                  <AiOutlineClose className="close-line-menu"/>
                </a>
              </div>
            </div>
            <div className="languages">
              <p><FormattedMessage
                id="app.language"
                defaultMessage="Languages"/></p>
              <div className="flags-conteiner">
                <div><img onClick={() => idioma.setLanguage("es-ES")}
                  className="spain-flag"
                  src={require("./images/Spanish.png")}/></div>
                <div><img onClick={() => idioma.setLanguage("en-US")}
                  className="english-flag"
                  src={require("./images/English.png")}/></div>
              </div>
            </div>
            <div className="theme">
              <p><FormattedMessage
              id="app.theme"
              defaultMessage="Theme"/></p>
              <div className="switch">
                <BsSun className="sun"/>
                <ReactSwitch 
                  onChange={handleSwitch}
                  checked={checked}
                  onColor="#56848b"
                  onHandleColor="#34525e"
                  handleDiameter={20}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                  activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                  height={20}
                  width={48}
                  className="react-switch"
                  id="material-switch" />
                <BsMoonStars className="moon"/>
              </div>
            </div>
            <div className="nav-links">
              <ul>
                <li><a href="#home">
                  <FormattedMessage 
                    id="app.home" 
                    defaultMessage="Home"/></a>
                </li>
                <li><a href="#about">
                  <FormattedMessage 
                    id="app.about" 
                    defaultMessage="About"/></a>
                </li>
                <li><a href="#projects">
                  <FormattedMessage 
                    id="app.projects" 
                    defaultMessage="Projects"/></a>
                </li>
                <li><a href="#contacts">
                  <FormattedMessage 
                    id="app.contacts" 
                    defaultMessage="Contacts"/></a>
                </li>
                </ul>
            </div>  
          </div> 
        </header>
        <body className="section">
          <motion.div 
            initial= {{opacity: 0}}
            animate= {{opacity: 1}}
            transition={{duration: 1.2}}
            className="home-container" id="home">
            <div className="welcome">
              <div className="name">
                <h1>
                  <FormattedMessage 
                    id="app.name" 
                    defaultMessage="Rodrigo Santellan"/>
                </h1>
              </div>
              <div className="profession">
                <h2>
                  <FormattedMessage 
                    id="app.iam" 
                    defaultMessage="Web Developer"/>
                </h2>
              </div>
              <div className="images">
                <motion.img
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  className="css"
                  src={require("./images/CSS3.png")} />
                <motion.img 
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  className="css"
                  src={require("./images/HTML5.png")} />
                <motion.img 
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  className="css"
                  src={require("./images/js.png")} />
                <motion.img 
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  className="css"
                  src={require("./images/React-Js.png")} />
                <motion.img 
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  className="css"
                  src={require("./images/NodeJs.png")} />
                <motion.img 
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  className="css"
                  src={require("./images/PostgreSQL.png")} />
                <motion.img 
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  className="css"
                  src={require("./images/Python.png")} />
                <motion.img 
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  className="css"
                  src={require("./images/Git.png")} />
                <motion.img 
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  className="css"
                  src={require("./images/GitHub.png")} />
                <motion.img 
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  className="css"
                  src={require("./images/Illustreitor.png")} />
                <motion.img 
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  className="css"
                  src={require("./images/After-Effects.png")} />
              </div>
            </div>
            <div className="planet">
              <Lottie animationData={Planet} />
            </div>
          </motion.div>
          <motion.div 
            initial= {{opacity:0.5, scale:0.5}}
            whileInView={{opacity:1, scale:1}}
            transition={{duration:1.2}}
            viewport={{once:true}}
            className="about" id="about">
            <div className="container-about">
              <div className="about-me">
                <p>
                  <FormattedMessage
                  id="app.aboutmebody"
                  defaultMessage="About me"/>
                </p>
              </div>
              <div className="description">
                <p><FormattedMessage
                id="app.description"
                defaultMessage="Hello! I'm Rodrigo, a passionate programmer driven by the creation and problem-solving through code. Since I discovered the magic of programming, I've embarked on an exciting journey of learning and constant growth.
                On my website, I invite you to explore some of the projects I've worked on, as well as the technologies I feel most comfortable with. I firmly believe that learning never ends, so I'm always on the lookout for new opportunities to expand my knowledge and improve my skills.
                Thank you for visiting my page and getting to know a little more about me. I hope to have the chance to collaborate with you and share our passion for programming."/>
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial= {{opacity:0.5, scale:0.5}}
            whileInView={{opacity:1, scale:1}}
            transition={{duration:1.2}}
            viewport={{once:true}}
            className="projects" id="projects">
            <div className="projects-container">
              <div className="projects-tittle">
                <p>
                  <FormattedMessage
                    id="app.projects"
                    defaultMessage="Projects"/>
                </p>
              </div>
              <div className="container-desk">         
                  <p>
                    <FormattedMessage
                      id="app.next-projects"
                      defaultMessage="I am currently working on some personal projects that I have in mind, so I decided to dedicate this area of the page to post them here in the future." />
                  </p>
                <div>
                  <Lottie animationData= {MakingProjects} className="desk"/>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial= {{opacity:0.5, scale:0.5}}
            whileInView={{opacity:1, scale:1}}
            transition={{duration:1.2}}
            viewport={{once:true}}
            className="contact" id="contacts">
            <div className="contact-container">
              <ContactUs />
              <div className="social-media">
                <ul className="social-media-ul">
                  <li><a href="https://github.com/RodrigoSante" target="blanck"><SiGithub className="socialmediaicon"/></a></li>
                  <li><a href="https://www.linkedin.com/in/rodrigosantellanfrontenddeveloper/" target="blanck"><SiLinkedin className="socialmediaicon"/></a></li>
                </ul>
              </div>
            </div>
          </motion.div>
        </body>
      </div>
  );
}

export default App;
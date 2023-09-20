import React, {useContext} from "react";
import "./App.css";
import "./styles/StyleNav.css";
import "./styles/StyleHome.css";
import "./styles/StyleAbout.css";
import "./styles/StyleContact.css";
import "./styles/StyleProjects.css";
import {IntlProvider, FormattedMessage} from "react-intl";
import { langContext } from "./context/langContext";
import { ContactUs } from "./contactUs/ContactUs.js";
import ReactSwitch from "react-switch";
import { useState } from "react";
import { useThemeContext } from  "./context/themeContext.js";
import { BsMoonStars, BsSun } from "react-icons/bs";
import { SiGithub, SiLinkedin } from "react-icons/si"
import Lottie from "lottie-react";
import Planet from "./lottieFiles/Planet.json";
import MakingProjects from "./lottieFiles/MakingProjects.json";
import Email from "./lottieFiles/Email.json";
import { motion } from "framer-motion";
//import "./observer.js";

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
            <div className="languages">
              <FormattedMessage
                id="app.language"
                defaultMessage="Languages"/>
                  <img onClick={() => idioma.setLanguage("es-ES")}
                    className="spain-flag"
                    src={require("./images/Spanish.png")}/>
                  <img onClick={() => idioma.setLanguage("en-US")}
                    className="english-flag"
                    src={require("./images/English.png")}/>
            </div>
            <div className="theme">
              <FormattedMessage
              id="app.theme"
              defaultMessage="Theme"/>
              <div className="switch">
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
                  id="material-switch"
                  />
                  <BsMoonStars className="moon"/>
                  <BsSun className="sun"/>
              </div>
            </div>
            <ul className="nav-links">
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
        </header>
        <body className="body2">
          <motion.div 
            initial= {{opacity: 0}}
            animate= {{opacity: 1}}
            transition={{duration: 1.2}}
          className="home" id="home">
            <div className="welcome">
              <h2 className="name-and-firtname">
                <FormattedMessage 
                  id="app.name" 
                  defaultMessage="Rodrigo Santellan"/>
              </h2>
              <h2 className="iam">
                <FormattedMessage 
                  id="app.iam" 
                  defaultMessage="Web Developer"/>
              </h2>
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
              <div className="planet">
                <Lottie animationData={Planet} />
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial= {{opacity:0.5, scale:0.5}}
            whileInView={{opacity:1, scale:1}}
            transition={{duration:1.2}}
            viewport={{once:true}}
            className="about" id="about">
            <div className="about-me">
              <FormattedMessage
              id="app.aboutmebody"
              defaultMessage="About me"/>
            </div>
            <div className="description">
              <p><FormattedMessage
              id="app.description"
              defaultMessage="Hello! I'm Rodrigo, a passionate programmer driven by the creation and problem-solving through code. Since I discovered the magic of programming, I've embarked on an exciting journey of learning and constant growth.
              On my website, I invite you to explore some of the projects I've worked on, as well as the technologies I feel most comfortable with. I firmly believe that learning never ends, so I'm always on the lookout for new opportunities to expand my knowledge and improve my skills.
              Thank you for visiting my page and getting to know a little more about me. I hope to have the chance to collaborate with you and share our passion for programming."/>
              </p>
            </div>
          </motion.div>
          <motion.div 
            initial= {{opacity:0.5, scale:0.5}}
            whileInView={{opacity:1, scale:1}}
            transition={{duration:1.2}}
            viewport={{once:true}}
            className="projects" id="projects">
            <div className="projects-tittle">
              <FormattedMessage
                id="app.projects"
                defaultMessage="Projects"/>
            </div>
            <div className="conteiner-desk">
              <div>
                <FormattedMessage
                  id="app.next-projects"
                  defaultMessage="I am currently working on some personal projects that I have in mind, so I decided to dedicate this area of the page to post them here in the future." />
              </div>
              <div className="desk">
                <Lottie animationData= {MakingProjects} />
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial= {{opacity:0.5, scale:0.5}}
            whileInView={{opacity:1, scale:1}}
            transition={{duration:1.2}}
            viewport={{once:true}}
            className="contact" id="contacts">
            <ContactUs />
            <div className="social-media">
              <ul className="social-media-ul">
                <li><a href="https://github.com/RodrigoSante" target="blanck"><SiGithub className="socialmediaicon"/></a></li>
                <li><a href="https://www.linkedin.com/in/rodrigosantellanfrontenddeveloper/" target="blanck"><SiLinkedin className="socialmediaicon"/></a></li>
              </ul>
            </div>
          </motion.div>
        </body>
      </div>
  );
}

export default App;

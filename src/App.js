import React, {useContext} from "react";
import "./App.css";
import "./styles/StyleNav.css";
import "./styles/StyleBody.css";
import "./styles/StyleContact.css";
import {IntlProvider, FormattedMessage} from "react-intl";
import { langContext } from "./context/langContext";
import { ContactUs } from "./contactUs/ContactUs.js";

function App() {

  const idioma = useContext(langContext);

  return (
      <div className="App">
        <header className="header">
          <div className='nav'>
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
            </div>
            <ul className="nav-links">
              <li><a href="#">
                <FormattedMessage 
                  id="app.home" 
                  defaultMessage="Home"/></a>
              </li>
              <li><a href="#">
                <FormattedMessage 
                  id="app.about" 
                  defaultMessage="About"/></a>
              </li>
              <li><a href="#">
                <FormattedMessage 
                  id="app.projects" 
                  defaultMessage="Projects"/></a>
              </li>
              <li><a href="#">
                <FormattedMessage 
                  id="app.contacts" 
                  defaultMessage="Contacts"/></a>
              </li>
            </ul>
          </div> 
        </header>
        <body className="body2">
          <div className="home">
            <div className="welcome">
              <h2 className="tittle">
                <FormattedMessage 
                  id="app.welcome" 
                  defaultMessage="Welcome"/>
              </h2>
              <h2 className="iam">
                <FormattedMessage 
                  id="app.iam" 
                  defaultMessage="I'm Rodrigo"/>
              </h2>
            </div>
          </div>
          <div className="about">
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
            <div className="images">
              <img 
              className="css"
              src={require("./images/CSS3.png")} />
              <img 
              className="css"
              src={require("./images/HTML5.png")} />
              <img 
              className="css"
              src={require("./images/js.png")} />
              <img 
              className="css"
              src={require("./images/React-Js.png")} />
            </div>
          </div>
          <div className="contact">
            <ContactUs />
          </div>
        </body>
      </div>
  );
}

export default App;

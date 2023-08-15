import React, { useRef, useContext } from 'react';
import emailjs from '@emailjs/browser';
import "../styles/StyleContact.css";
import {IntlProvider, FormattedMessage} from "react-intl";
import { langContext } from "../context/langContext";

export const ContactUs = () => {
  
  const idioma = useContext(langContext);
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pqrpwnr', 'template_xtt7ihh', form.current, '3e0ECI0oMFS6P_F-5')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      }, e.target.reset());
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="form">
      <div class="form-conteiner">
        <h2 class="form-tittle">
          <FormattedMessage
              id="app.contactme"
              defaultMessage="Contact Me"/>
        </h2>
        <label className="label-contact"><FormattedMessage id="app.contactname" defaultMessage="Name"/></label>
        <input type="text" name="user_name" className="form-input" />
        <label className="label-contact"><FormattedMessage id="app.contactemail" defaultMessage="Email"/></label>
        <input type="email" name="user_email" className="form-input" />
        <label className="label-contact"><FormattedMessage id="app.contactmessage" defaultMessage="Message"/></label>
        <textarea name="message" className="form-input-message" />
        <button className="form-cta"><FormattedMessage id="app.sendmessage" defaultMessage="Send"/></button>
      </div>
    </form>
  );
};
/*import React, {useRef} from "react";
import emailjs from "@emailjs/browser";
import "../styles/StyleContact.css";

export const ContactUs = () => {

    const refForm = useRef();

    const hundleSubmit = (event) => {
        event.PreventDefault();
        
        const serviceId = "service_pqrpwnr";
        const templateId = "template_xtt7ihh";
        const apiKey = "3e0ECI0oMFS6P_F-5";

        emailjs.sendForm(serviceId, templateId, refForm.current, apiKey)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

    return(
        <form className="form" ref={refForm} action="" onSubmit={hundleSubmit}>
            <div class="form-conteiner">
                <h2 class="form-tittle">Contact Me</h2>
                <input name="user_name" type="text" className="form-input" placeholder="Name:"></input>
                <input type="email" name="user_email" className="form-input" placeholder="Email:"></input>
                <textarea name="message" className="form-input-message" placeholder="Message:"></textarea>   
                <input type="submit" value="Send" className="form-cta"/>
              </div>
        </form>
    );
}*/

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pqrpwnr', 'template_xtt7ihh', form.current, '3e0ECI0oMFS6P_F-5')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};
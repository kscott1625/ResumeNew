import React from 'react';
import './contact.css';
import { MdEmail } from 'react-icons/md';
import { HiLocationMarker } from 'react-icons/hi';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_ma823ua',
      'template_gckk4uo',
      form.current,
      '-0mjTOVFLnPCSZ1pI'
    );
    e.target.reset().then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <HiLocationMarker className="contact_option-icon" />
            <h4> Location </h4>
            <h5>Redmond, Wa </h5>
          </article>

          <article className="contact_option">
            <MdEmail className="contact_option-icon" />
            <h4> Email </h4>
            <h5>Kasc1625@gmail.com</h5>
            <a href="mailto:kasc1625@gmail.com">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Massage
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

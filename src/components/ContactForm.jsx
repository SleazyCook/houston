import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uz9ou2v', 'template_fqcn51m', form.current, '0MfovJdS9LXoR7xLU')
      .then((result) => {
          alert('Message sent successfully!');
          form.current.reset();
      }, (error) => {
          alert('Failed to send message, try again later.');
          console.error(error.text);
      });
  };

  return (
    <form className='contact-form' ref={form} onSubmit={sendEmail}>
      <h3>Contact Drewford</h3>

      <div className='sender-info'>
        <label>Name</label>
        <input type="text" name="user_name" required />
      </div>

      <div className='sender-info'>
        <label>Email</label>
        <input type="email" name="user_email" required />
      </div>

      <div className='message-block'>
        <label>Message</label>
        <textarea name="message" required />
      </div>

      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;

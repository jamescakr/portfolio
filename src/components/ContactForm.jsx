// ContactForm.jsx
import React, { useRef } from "react";
import emailjs from "emailjs-com";

function ContactForm() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    //아래 값 입력부터 시작하면됨
    emailjs
      .sendForm(
        "service_xxx", // Service ID
        "template_xxx", // Template ID
        formRef.current, // form element
        "user_xxx_publicKey" // Public key (User ID)
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Email sent!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form ref={formRef} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />

      <label>Email</label>
      <input type="email" name="user_email" />

      <label>Message</label>
      <textarea name="message" />

      <button type="submit">Send</button>
    </form>
  );
}

export default ContactForm;

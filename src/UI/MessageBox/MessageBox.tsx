import { useRef } from "react";
import emailjs from "@emailjs/browser";

import "./messageBox.scss";

function MessageBox() {
  const form = useRef<any>();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm("service_z3vcabo", "template_cqovj87", form.current, {
        publicKey: "ee0VY8K4bOuGT221o",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };
  return (
    <form className="message-form" ref={form} onSubmit={sendEmail}>
      <div className="input-fields">
        <input type="text" placeholder="Name" name="user_name" required />
        <input type="email" placeholder="Email" name="user_email" required />
        <textarea placeholder="Message" name="message" required />
      </div>
      <button className="send-button">Send Message</button>
    </form>
  );
}

export default MessageBox;

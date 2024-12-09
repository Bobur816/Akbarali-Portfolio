import CopyEmailButton from "../UI/CopyEmailButton";
import MessageBox from "../UI/MessageBox/MessageBox";

function Contact() {
  return (
    <div className="contact">
      <h2 className="section__title">Contact</h2>
      <p className="text_gray">Get in touch for design inquiries</p>
      <div className="contact-layout">
        <div className="contact-box">
          <div className="box">
            <p>akbaralixasanov2000@gmail.com</p>
            <p>email</p>
          </div>
          <div className="box">
            <p>+998 91 695 16 33</p>
            <p>Phone</p>
          </div>
        </div>

        <div className="button-box">
          <CopyEmailButton />
        </div>

        <h3 className="section__title_sm">Send a message</h3>
        <MessageBox />
      </div>
    </div>
  );
}

export default Contact;

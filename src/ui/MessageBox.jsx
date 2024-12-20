import React from "react";
import { useRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";

const StyledForm = styled.form`
  /* background-color: red; */
  width: 100%;
  margin-bottom: 48px;

  display: flex;
  flex-direction: column;
`;

const InputFields = styled.div`
  height: auto;
  max-width: 100%;
  display: grid;
  overflow-anchor: none;
  margin: 24px 0;
  grid-template-columns: auto;
  grid-template-rows: auto;
  gap: 20px;

  & input,
  textarea {
    transition: all 0.3s;
    outline: transparent;
    color: #fff;
    width: 100%;
    border: none;
    padding: 20px;
    border-radius: 12px;
    background-color: #282828;
  }

  & textarea {
    height: 160px;
    grid-column: span 2;
    resize: none;

    @media (max-width: 768px) {
      grid-column: span 1;
    }
  }

  & textarea:hover,
  textarea:focus,
  input:hover,
  input:focus {
    outline: 1px solid #17c871;
  }
`;

const SendButton = styled.button`
  outline: transparent;
  display: flex;
  padding: 20px;
  justify-content: center;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.2px;
  border: none;
  border-radius: 12px;
  background-color: #17c871;

  &:hover {
    background-color: #114d30;
  }

  &:hover,
  &:focus {
    outline: 1px solid #17c871;
  }
`;

function MessageBox() {
  const form = useRef();

  const sendEmail = (e) => {
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
    <StyledForm ref={form} onSubmit={sendEmail}>
      <InputFields>
        <input type="text" placeholder="name" name="user_name" required />
        <input type="email" placeholder="Email" name="user_email" required />
        <textarea placeholder="Message" name="message" required />
      </InputFields>
      <SendButton>Send Message</SendButton>
    </StyledForm>
  );
}

export default MessageBox;

import React, { useState, useRef } from "react";
import styles from "./EmailComponent.module.css";
import Mail from "../../assets/mail.svg";
import emailjs from '@emailjs/browser';
import AlertBox from "../AlertBox/AlertBox";
import Loader from "../Loader/Loader";

function EmailComponent() {
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [viewLoader, setViewLoader] = useState(false)
  const [viewAlert, setViewAlert] = useState(false)

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setViewLoader(true)


    // A new object that will  container the dynamic template parameters 
    const template = {
      name: fname,
      email: email,
      to_name: "Navya Sree",
      message: message
    }
    //  Now sending the email using email.js 

    emailjs.send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, template, import.meta.env.VITE_PUBLIC_KEY)
      .then((response) => {
        console.log("Sucessfull", response)
        setViewLoader(false)
        setViewAlert(true)
        setFname("")
        setEmail("")
        setMessage("")
      })
      .catch((error) => {
        console.log(error)
      })



  };
  return (
    <div className={styles.email_component}>
      <div className={styles.header}>
        <h1 className={styles.header_title}>Send me a Message</h1>
        <img src={Mail} alt="" className={styles.header_img} />
      </div>
      <form className={styles.form} onSubmit={sendEmail}>
        <div className={styles.row}>
          <div className={styles.col}>
            <label htmlFor="name">Full Name</label>
            <input
              className={styles.input}
              type="text"
              placeholder="Full Name"
              name="from_name"
              value={fname}
              required
              onChange={(e) => setFname(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.col}>
            <label htmlFor="email">Email Address</label>
            <input
              className={`${styles.input} ${styles.email_input}`}
              type="email"
              placeholder="Enter your email address"
              value={email}
              name="user_email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

        </div>
        <div className={styles.row}>
          <div className={`${styles.col} ${styles.message_input_section}`}>
            <label htmlFor="message"> Enter your Message</label>
            <textarea
              className={styles.input}
              name="message"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              cols="30"
              rows="10"
              required
              placeholder="This is my message for you"
            ></textarea>
          </div>
        </div>
        <button className={styles.submit_btn} type="submit">
          <i className="fa-solid fa-paper-plane"></i>
        </button>
      </form>

      {
        viewLoader && <Loader />
      }
      {
        viewAlert &&
        <AlertBox />
      }

    </div>
  );
}

export default EmailComponent;

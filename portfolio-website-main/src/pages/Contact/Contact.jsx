import Navbar from "../../Components/Navbar/Navbar";
import MainContainer from "../../Components/MainContainer/MainContainer";
import ComponentTitle from "../../Components/ComponentTitle/ComponentTitle";
import { motion } from 'framer-motion'
import styles from "./Contact.module.css";

import EmailComponent from "../../Components/EmailComponent/EmailComponent";
import Circle from "../../Components/Circle/Circle";

function Contact() {
  return (
    <div>
      <Navbar />
      <Circle top={"-5rem"} right={"-18rem"} />
      <MainContainer>
        <ComponentTitle title={"Get in touch"} />
        <div className={styles.box}>
          <div className={styles.left_section_indexing}>
            <EmailComponent />
          </div>
          <div className={styles.right_section_indexing}>

            <div className={styles.location_services}>
              <div className={styles.symbol}>
                <i className={`fa-solid fa-location-dot`}></i>
              </div>
              <p>Guntur, Andhra Pradesh</p>
            </div>

            {/* Phone Services  */}
            <div className={styles.location_services}>
              <div className={styles.symbol}>
                <i className={`fa-solid fa-phone`}></i>
              </div>

              <p>944-098-8370</p>
            </div>
            {/* Follow me Section  */}
            <div className={styles.follow_me_section}>
              <p>Follow me on </p>
              <div className={styles.account_box}>
                {/* this is my linked in platfrom  */}
                <div className={styles.account_icon}>
                  <a
                    href="https://www.linkedin.com/in/navya-sree-n/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </div>
                {/* This is my github platform  */}

                <div className={styles.account_icon}>
                  <a
                    href="https://github.com/navya-sree-2"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                </div>
                {/* This is my instagram handle  */}
                {/* <div className={styles.account_icon}>
                  <a
                    href="https://www.instagram.com/shivamsharma_1611/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </MainContainer>
    </div>
  );
}

export default Contact;

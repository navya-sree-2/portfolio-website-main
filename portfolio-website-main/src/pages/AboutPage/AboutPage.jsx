import React from "react";
import ActionBox from "../../Components/ActionBox/ActionBox";
import Circle from "../../Components/Circle/Circle";
import MainContainer from "../../Components/MainContainer/MainContainer";
import Navbar from "../../Components/Navbar/Navbar";
import style from "./AboutPage.module.css";
import ContainerTitle from "../../Components/ComponentTitle/ComponentTitle";
import { certificates } from "../../assets/index";

function AboutPage() {
  return (
    <div>
      <Navbar />
      <Circle bottom={"19rem"} right={"-25rem"} />
      <MainContainer>
        <div className={style.about_component}>
          <ContainerTitle title={"About me"} />

          {/* Education Section */}
          <div className={style.timeline_container}>
            <h1 className={style.timeline_title}>My Education</h1>
            <div className={style.timeline_box}>
              <div className={`${style.action_container} ${style.left_container}`}>
                <ActionBox
                  isleft={true}
                  timeline={"2018 - 2019"}
                  timeline_title={"Board of Secondary Education (10th)"}
                  location={"Success High School, Guntur"}
                  details={"Completed my High School Degree from State Board with 95%."}
                />
              </div>
              <div className={`${style.action_container} ${style.right_container}`}>
                <ActionBox
                  isleft={false}
                  timeline={"2019 - 2021"}
                  timeline_title={"Board of Intermediate Education (10+2)"}
                  location={"Sri Chaitanya Junior College, Guntur"}
                  details={"Completed my Intermediate from State Board with 95%."}
                />
              </div>
              <div className={`${style.action_container} ${style.left_container}`}>
                <ActionBox
                  isleft={true}
                  timeline={"2021 - 2025"}
                  timeline_title={"Bachelor of Technology"}
                  location={"KL University, Guntur"}
                  details={"Currently completing my Bachelors Degree in Computer Science and Engineering with CGPA of 9.75 from KL University."}
                />
              </div>
            </div>
          </div>

          {/* Certifications Section */}
          <div className={style.certifications_container}>
            <h1 className={style.timeline_title}>Certifications</h1>
            <div className={style.certifications_box}>
              {certificates.map((certificate, index) => (
                <div key={index} className={style.certificate_card}>
                  <div className={style.certificate_header}>
                    <img src={certificate.src} alt={certificate.title} />
                    <h2 className={style.certificate_title}>{certificate.title}</h2>
                  </div>
                  <div>
                    <p className={style.certificate_sponsor}>{certificate.sponsor}</p>
                    <p className={style.certificate_validity}>{certificate.validity}</p>
                    <p className={style.certificate_desc}>{certificate.desc}</p>
                    </div>
                    <div>
                    <a href={certificate.link} target="_blank" rel="noopener noreferrer" className={style.view_certificate_btn}>
                      View Certificate
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>



        </div>
      </MainContainer>
    </div>
  );
}

export default AboutPage;
import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import styles from "./Skills.module.css";
import { motion } from "framer-motion";
import ComponentTitle from "../../Components/ComponentTitle/ComponentTitle";
import MainContainer from "../../Components/MainContainer/MainContainer";
import Circle from "../../Components/Circle/Circle";
import { skills } from "../../assets/skills";

function SkillSet() {
  return (
    <div>
      <Navbar />
      <Circle top={"18rem"} right={"-18rem"} />
      <MainContainer>
        <ComponentTitle title={"My Skills"} />
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: ".5", duration: ".3", stiffness: "100" }}
          className={styles.skill_container}
        >
          {skills.map((skill, index) => (
            <div key={index} className={styles.skill_card}>
              <h2 className={styles.skill_title}>{skill.title}</h2>
              <div className={styles.skill_list}>
                {skill.skills.map((item, idx) => (
                  <div key={idx} className={styles.skill_item}>
                    <img src={item.image} alt={item.name} className={styles.skill_image} />
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </MainContainer>
    </div>
  );
}

export default SkillSet;

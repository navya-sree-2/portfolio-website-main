import Navbar from "../../Components/Navbar/Navbar";
import styles from "./ProjectPage.module.css";
import ProjectCard from "../../Components/ProjectCard/projectCard";
import taskEnhancerIMG from "../../assets/task_enhancer.png";
import chatAppImg from "../../assets/Chat_app.png";
import libraryImg from "../../assets/library-home.jpg";
import spamImg from "../../assets/spam-nspam.jpeg";
import EcommerceIMG from "../../assets/Ecom_collection.png";
import weatherAppImg from '../../assets/Weather_app.png'
import { motion } from "framer-motion";
import ComponentTitle from "../../Components/ComponentTitle/ComponentTitle";
import Circle from "../../Components/Circle/Circle";
import MainContainer from "../../Components/MainContainer/MainContainer";

function Projects() {
  return (
    <div>
      <Navbar />
      <Circle right={"-6rem"} top={"-8rem"} />
      <MainContainer>
        <div className={styles.project_page_component}>
          <ComponentTitle title={"My projects"} />
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: ".5", duration: ".3", stiffness: "100" }}
            className={styles.projects_component}
          >
            <ProjectCard
              previewLink={"https://forever-by-navya.vercel.app/"}
              githubLink={"https://github.com/navya-sree-2/E-Commerce-App"}
              projectName={"Ecommerce"}
              projectDetails={
                "Build a MERN-based eCommerce app with features like product catalog, cart, authentication, payment gateway, and admin dashboard for management."
              }
              demoImage={EcommerceIMG}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/react-2.svg",
                "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg",
                "https://cdn.worldvectorlogo.com/logos/mongodb-icon-2.svg",
                "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
                "https://cdn.worldvectorlogo.com/logos/razorpay.svg",
                "https://cdn.worldvectorlogo.com/logos/stripe-2.svg",
                "https://cdn.worldvectorlogo.com/logos/cloudinary-2.svg",
              ]}
            />
            <ProjectCard
              githubLink={"https://github.com/navya-sree-2/Weather-App"}
              projectName={"React Weather App"}
              projectDetails={
                "This is React Weather App for you to see how the day is going. Interactive Web Application based on API Data fetching."
              }
              demoImage={weatherAppImg}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/react-2.svg",
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
              ]}
            />

            <ProjectCard
              githubLink={"https://github.com/navya-sree-2/Personal_Task_Enhancer"}
              projectName={"Personal Task Enhancer"}
              projectDetails={
                "It is a web application built with Django for managing tasks efficiently, featuring secure authentication, deadline tracking, and in-app notifications."
              }
              demoImage={taskEnhancerIMG}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/django.svg",
                "https://cdn.worldvectorlogo.com/logos/python-5.svg",
                "https://cdn.worldvectorlogo.com/logos/sqlite.svg",
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
              ]}
            />
            <ProjectCard
              githubLink={
                "https://github.com/navya-sree-2/Chat-App"
              }
              projectName={"Real Time Chat Application"}
              projectDetails={
                "It is a full-stack real-time chat app featuring auth, profile management, image sharing, notifications, last seen, and a responsive UI with dynamic state management."
              }
              demoImage={chatAppImg}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/react-2.svg",
                "https://cdn.worldvectorlogo.com/logos/firebase-2.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
              ]}
            />
            <ProjectCard
              githubLink={"https://github.com/navya-sree-2/Email_Spam_Detection"}
              projectName={"Email Spam Detection"}
              projectDetails={
                "It is an Email Spam Detection system using Python, achieving 90% accuracy with TF-IDF and machine learning models for classification."
              }
              demoImage={spamImg}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/python-5.svg",
                "https://www.svgrepo.com/show/373718/jupyter.svg",
                "https://www.svgrepo.com/show/339328/machine-learning-01.svg",
              ]}
            />
            <ProjectCard
              githubLink={
                "https://github.com/navya-sree-2/JFSD-Project"
              }
              projectName={"Library Management System"}
              projectDetails={
                "Built a Library Management System using Spring Boot, MySQL with book checkout, search filters, Razorpay API for fine payment, and an MVC-based UI."
              }
              demoImage={libraryImg}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/java.svg",
                "https://cdn.worldvectorlogo.com/logos/mysql-2.svg",
                "https://cdn.worldvectorlogo.com/logos/spring-boot-1.svg",
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
                "https://cdn.worldvectorlogo.com/logos/hibernate.svg",
              ]}
            />
          </motion.div>
        </div>
      </MainContainer>
      <motion.div
        initial={{ y: -20, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: ".3", stiffness: "150" }}
        className="component_container"
      ></motion.div>
    </div>
  );
}

export default Projects;

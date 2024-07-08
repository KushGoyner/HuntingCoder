import React from 'react'
import styles from "@/styles/About.module.css";

const About = () => {
  return (
  <>
  <div className={styles.container}>
    <h1 className={styles.center}>About Hunting Coder</h1>
    <h2>Introduction</h2>
    <p>Welcome to Hunting Coder, your go-to hub for all things coding! Whether you're a seasoned developer or just starting your programming journey, our blog is designed to inspire, educate, and empower you. Happy coding!</p>
    <h2>Services Offered</h2>
    <p>
      Here are some services a Hunting Coder can offer:-
      <br/>
      &emsp;•&emsp;   Tutorials and Guides <br/>
      &emsp;•&emsp;   Code Snippets<br/>
      &emsp;•&emsp;   Career Advice<br/>
      &emsp;•&emsp;   Q&A Forums<br/>


    </p>
    
    <h2>Developed By</h2>
    <p>Kush Goyner</p>
  </div>
  </>
  )
}

export default About
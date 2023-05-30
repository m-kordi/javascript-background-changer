import React from 'react'
import "./Opening.css"
import main from "../../../assets/main.jpg"
import Float from '../cub/Float'
import {motion} from "framer-motion"
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";


function Opening() {
  return (
    <>
    <div className="landing-container">
        <div className="landing-text">
          <div className='i-h'>
            <img src={main} alt="#" />
            <div className='h'>
              <h1>Mohammad Alkordi</h1>
              <h3>Frontend Web Developer</h3>
            </div>
          </div>
          <p>I'm a 23 year old software engineer based in Syrea. I write in Javascript, talk to databases and make ui/ux designs. I am always open to exploring new opportunities. Please feel free to check out my work and let's have a <s>coffee</s> video chat if you'd like to hear more.{/* <p>I have more than 7 years of experience building software for clients all over the world. I started coding at a young age and have been at it ever since. Through code, I take a thought and turn it into a product. I am also a Tech Blogger who shares his experiences and philosophies to the world. Below is a quick overview of my main technical skill sets and technologies I use.</p> */}</p>
          <div className='social-btn'>
            <motion.button className='github'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}><a target='_blank' href="https://github.com/m-kordi"><FaGithub className='github-icon'/><span>veiw GitHub</span></a></motion.button>
            <motion.button className='linkedin'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}><a target='_blank' href="https://www.linkedin.com/in/mohammad-alkordi"><BsLinkedin className='linkedin-icon'/><span>veiw LinkedIn</span></a></motion.button>
          </div>
        </div>
        <div className="cub-image">
          <Float/>
        </div>
      </div>
    </>
  )
}

export default Opening
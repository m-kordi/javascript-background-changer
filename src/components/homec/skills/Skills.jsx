import React from 'react'
import "./Skills.css"
import { ImPlus } from "react-icons/Im";

function Skills() {
  return (
    <>
    <h2 className='skills-title'>technical skills</h2>
    <div className='skills-container'>

        <div className='skills-box'>
            <div className="skills-content">
                <h4>Programming Languages:</h4>
                <p>I have extensive experience in multiple programming languages such as Python, C++. However, JavaScript is my preferred language no matter what I am building.</p>
            </div>
        </div>

        <div className='skills-box'>
            <div className="skills-content">
                <h4>Javascript Libraries:</h4>
                <p>I have worked with a wide range of libraries and frameworks such as React js, Next js, Styled Components, Context API, Axios, Redux, React Router, React Icons, and more.</p>
            </div>
        </div>

        <div className='skills-box'>
            <div className="skills-content">
                <h4>CSS and UI libraries:</h4>
                <p>I have worked with a variety of libraries and frameworks such as Bootstrap, Tailwind, Sass, Framer Motion, Radix UI, and more.</p>
            </div>
        </div>

        <div className='skills-box'>
            <div className="skills-content">
                <h4>Mobile-First Websites:</h4>
                <p>Most of the world uses mobile to browse websites. I use a mobile-first, offline-first approach in creating frontend systems. I use Flexbox and CSS Grid to create beautiful responsive Interfaces.</p>
            </div>
        </div>

        <div className='skills-box'>
            <div className="skills-content">
                <h4>Databases:</h4>
                <p>MongoDB is my all-time favorite database solution. I have also worked with other Relational, Non-Relational and Realtime Databases such as MySQL and Firebase.</p>
            </div>
        </div>

        <div className='skills-box'>
            <div className="skills-content">
                <h4>Development Tools:</h4>
                <p>I use a variety of tools to be more productive while coding such as Git, Github, Vite, NPX and more. My main code editor is VS Code which I absolutely adore.</p>
            </div>
        </div>

        <div className='skills-box'>
            <div className="skills-content">
                <h4>?????? :</h4>
                <p><ImPlus/> MORE  SOON ...</p>
            </div>
        </div>
        
    </div>
    </>
  )
}

export default Skills
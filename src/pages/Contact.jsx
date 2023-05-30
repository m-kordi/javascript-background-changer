import React from 'react'
import "./Contact.css"
import Titleconta from '../components/contactc/titlec/Titleconta';
import { useRef } from "react";
import { useInView } from "framer-motion";

function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="container">
      <section ref={ref}>
      <div className='conta-title'
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
      }}>
        <Titleconta/>
      </div>
      {/* <div className='port-projects'
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
      }}>
        <Projectsport/>
      </div> */} 
      </section>
    </div>
  )
}

export default Contact
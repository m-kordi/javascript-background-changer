import React from 'react'
import "./Portfolio.css"
import Titleport from '../components/portfolioc/titlep/Titleport'
import Projectsport from '../components/portfolioc/projectsp/Projectsport'
import { useRef } from "react";
import { useInView } from "framer-motion";




function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
    <div className='container'>
      <section ref={ref}>
      <div className='port-title'
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
      }}>
        <Titleport/>
      </div>
      <div className='port-projects'
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
      }}>
        <Projectsport/>
      </div> 
      </section>
      </div>
    </>
    
      
  )
}

export default Portfolio
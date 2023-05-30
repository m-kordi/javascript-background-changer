import React from 'react'
import "./Resume.css"
import Resumeimg from '../components/resumec/resumeimg/Resumeimg';
import { useRef } from "react";
import { useInView } from "framer-motion";
import Titleres from '../components/resumec/resumet/Titleres.jsx'



function Resume() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
    <div className='container'>
      <section ref={ref}>
      <div className='res-title'
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
      }}>
        <Titleres/>
      </div>
      <div className='res-img'
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
      }}>
        <Resumeimg/>
      </div> 
      </section>
      </div>
    </>
  )
}

export default Resume
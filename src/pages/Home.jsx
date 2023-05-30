import React from 'react'
import "./Home.css"
import Opening from '../components/homec/op/Opening'
import Skills from '../components/homec/skills/Skills'
import Moving from '../components/homec/moving/Moving'
import { useRef } from "react";
import { useInView } from "framer-motion";

function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
    <div className='container'>
      <section ref={ref}>
      <div className='landing'
       style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
        }}>
        <Opening/>
      </div>
      <hr/>
      <div className='skills'
       style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s"
        }}>
        <Skills/>
        
      </div>
      </section>
    </div>
    <Moving/>
    
    </>

  )
}

export default Home
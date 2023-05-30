import React from 'react'
import "./Error.css"
import imgerorr from "../assets/myerror.gif"
import { useRef } from "react";
import { useInView } from "framer-motion";


function Error() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className='container'>
      <section ref={ref}>
      <div className='erorr-cont'
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
      }}>
        <img src={imgerorr} alt="#" />
        <h1>Page Not Found ...</h1>
      </div>
      </section>
    </div>
  )
}

export default Error
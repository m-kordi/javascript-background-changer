import React from 'react'
import ParallaxText from './ParallaxText'
/* import py from "../../../assets/py.png" */
import js from "../../../assets/js.png"
import react from "../../../assets/react.png"
import next from "../../../assets/next.png"
import bootstrap from "../../../assets/bootstrap.png"
/* import cplus from "../../../assets/cplus.png" */
import css from "../../../assets/css.png"
import es from "../../../assets/es.png"
/* import git from "../../../assets/git.png" */
/* import github from "../../../assets/github.png" */
import html from "../../../assets/html.png"
import ill from "../../../assets/ill.png"
/* import mongo from "../../../assets/mongo.png" */
import motion from "../../../assets/motion.png"
import mysql from "../../../assets/mysql.png"
import node from "../../../assets/node.png"
/* import pr from "../../../assets/pr.png" */
import ps from "../../../assets/ps.png"
import radix from "../../../assets/radix.png"
import typscript from "../../../assets/typscript.png"
/* import vite from "../../../assets/vite.png" */
import sass from "../../../assets/sass.png"



function Moving() {
  return (
    <section>
      <ParallaxText baseVelocity={-1}>. <img src={js} alt='#' className='tec-icon'/>javascript <img src={react} alt='#' className='tec-icon'/>react <img src={next} alt='#' className='tec-icon'/>next <img src={typscript} alt='#' className='tec-icon'/>typescript <img src={node} alt='#' className='tec-icon'/>node <img src={es} alt='#' className='tec-icon'/>ecmascript  </ParallaxText>
      <ParallaxText baseVelocity={1}>. <img src={html} alt='#' className='tec-icon'/>html <img src={css} alt='#' className='tec-icon'/>css  <img src={bootstrap} alt='#' className='tec-icon'/>bootstrap <img src={sass} alt='#' className='tec-icon'/>sass <img src={motion} alt='#' className='tec-icon'/>motion <img src={radix} alt='#' className='tec-icon'/>radix <img src={ps} alt='#' className='tec-icon'/>photoshop <img src={ill} alt='#' className='tec-icon'/>illustrator  </ParallaxText>
    </section>
    
  )
}

export default Moving
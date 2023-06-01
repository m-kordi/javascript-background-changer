import React from 'react'
import "./Resumeimg.css"
import myresumeimg from "../../../assets/Mohammad_Alkordi_Resume.jpg"

function Resumeimg() {
  return (
    <div className='resumejpg-img'>
        <img src={myresumeimg} loading='lazy' alt="..." style={{background:"white"}} />
    </div>
  )
}

export default Resumeimg
import React from 'react'
import "./Resumeimg.css"
import myresume from "../../../assets/Mohammad_Alkordi_Resume.jpg"

function Resumeimg() {
  return (
    <div className='resumejpg-img'>
        <img src={myresume} alt="#" style={{background:"white"}} />
    </div>
  )
}

export default Resumeimg
import React from 'react'
import "./Resumeimg.css"
import myresume from "../../../assets/Mohammad_Alkordi_Resume.jpg"
import loading from "../../../assets/loading.gif"

function Resumeimg() {
  return (
    <div className='resumejpg-img'>
        <img src={myresume} loading='lazy' alt={loading} style={{background:"white"}} />
    </div>
  )
}

export default Resumeimg
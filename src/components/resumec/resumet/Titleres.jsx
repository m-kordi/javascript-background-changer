import React from 'react'
import "./Titleres.css"
import {BsFiletypePdf} from "react-icons/bs"
import {motion} from "framer-motion"
import myresume from "/Mohammad_Alkordi_Resume.pdf"

function Titleres() {
  return (
    <div className="titleres">

        <h1>Resume</h1>

        <motion.button className='download-res'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}><a href={myresume}  download={myresume}><BsFiletypePdf/><span>download Resume</span></a></motion.button>
    </div>
  )
}

export default Titleres
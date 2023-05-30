import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'
import { FcHome, FcGallery, FcReading, FcInvite } from "react-icons/fc";
import {motion} from "framer-motion"

function Navbar() {
  return (
    <div className='nav-con'>
      <div className='nav-imp'>
        <ul className='nav-ul'>
          <motion.li className="box" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{duration: 0.5, delay: 0.1, ease: [0, 0.71, 0.2, 1.01]}}>
              <NavLink to="/"><FcHome className='icon'/><div className='text'>Home</div></NavLink>
          </motion.li>
          <motion.li className="box" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{duration: 0.6, delay: 0.2, ease: [0, 0.71, 0.2, 1.01]}}>
            <NavLink to="/portfolio"><FcGallery className='icon'/><div className='text'>Portfolio</div></NavLink>
          </motion.li>
          <motion.li className="box" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{duration: 0.7, delay: 0.3, ease: [0, 0.71, 0.2, 1.01]}}>
            <NavLink to="/resume"><FcReading className='icon'/><div className='text'>Resume</div></NavLink>
          </motion.li>
          <motion.li className="box" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{duration: 0.8, delay: 0.4, ease: [0, 0.71, 0.2, 1.01]}}>
            <NavLink to="/contact"><FcInvite className='icon'/><div className='text'>Contact</div></NavLink>
          </motion.li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
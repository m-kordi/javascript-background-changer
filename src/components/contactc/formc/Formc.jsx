import React from 'react'
import "./Formc.css"
import {useRef } from 'react';
import emailjs from '@emailjs/browser';
import {motion} from "framer-motion"
import {TfiEmail} from "react-icons/Tfi"
import {BsWhatsapp} from "react-icons/bs"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function Formc() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_072mkfw', 'template_lsyfg1r', form.current, 'Cp4TGhQqes5xO4tBx')
      .then((result) => {
          console.log(result.text);
          console.log("form submited")
          e.target.reset();
          notify();
      }, (error) => {
          console.log(error.text);
      });
  };

  /* validation */
  function handler(e){
    if(e.target.value.length<8){
      e.target.style.color="red";
    }else{
      e.target.style.color="green"
    }
    
  }

  function dealar(e){
    console.log("dealar")
    if(e.target.value.length<8){
      e.target.value="";
      e.target.placeholder="invalid data :(";
    }
  }

  /* toast notification */
  const notify = () => toast.success('Thank you for your email. I will reply as soon as possible.', {
    position: "top-center",
    autoClose: 9000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });

  return (
    <>
    <div className='comu'>


    <div className='comu-icon'>
      <TfiEmail  className='comu-im' />
      <span>mh.alkordi@gmail.com</span>
    </div>

    <div className='comu-icon'>
    <BsWhatsapp  className='comu-im'/>
      <span>0963959124014</span>
    </div>

    

    </div>

    
    <div className='conta-collact'>

      {/* number and email */}
      

      {/* form */}
      <form ref={form} onSubmit={sendEmail} >
        <input onChange={handler} onBlur={dealar} placeholder='full name' type="text" name="user-name" maxLength="33" required  />

        <input onChange={handler} onBlur={dealar} placeholder='Your Email' type="email" name="user-email"  maxLength="33" required/>

        <textarea  placeholder='your message' name="message" cols="30" rows="10" maxLength="250"  required/>

        <motion.input className='conta-submit' type="submit" value="Send Email" 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}/>
      </form>
      <ToastContainer />


    </div>
    
    </>
  )
}

export default Formc
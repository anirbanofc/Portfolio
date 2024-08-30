import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Anirban Mahata</h4>
      <div className='footerLinks'>
        <a href="https://github.com/avik-mandal" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/anirbanmahatabirihandi/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:anirbanmahataofficial@gmail.com' target='_blank'><GrMail/></a>
      </div>
    </footer>
  )
}

export default Footer
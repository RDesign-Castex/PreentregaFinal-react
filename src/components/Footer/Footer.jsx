import React from 'react'
import './StylesFooter.css'
import classics from "../../assets/img/brand/classics.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className='Footer-container text-center' >

        <div className='text-center p-5 fs-5'>
          
          <span className='p-1'>👉Contactame </span>
          <a
          href={'https://github.com/RDesign-Castex'}
          target={'_blank'}
          rel='noreferrer'
          >
            Github
          </a>
            <Link to={"/"}>
              <img src={classics} alt="classics" /> 
              RDesign
            </Link>
          <p className='fs-6 pt-5'>@RDesign Todos los Derechos Reservados 2023</p>
        </div>

    </div>
  )
}

export default Footer

import React, { useState } from 'react'
import img from '../img/20211224_114647.jpg'
import { NavLink } from 'react-router-dom'
import '../navigation/Header.css'

function Header() {
  
  const [mobil, SetMobile] = useState(false);
  return (
    <>
      <header className={mobil? "nav-link-mobile": "header-portfolio"} onClick={() => SetMobile(false)}>
        <div className='portfolio'>
          <img src={img} alt='' width={140} />
          <h3>nidhi prajapati</h3>

          <div className="social-icon">
          <NavLink to='https://www.instagram.com/n_i_d_h_u_1111?igsh=MWs1a3l2cGV3djZpbQ==' target='_blank'> <i className="fa-brands fa-instagram" /></NavLink> 
           <NavLink to='https://www.linkedin.com/in/nidhi-prajapati-79a190178/'  target='_blank'><i className="fa-brands fa-linkedin" /></NavLink> 
          <NavLink to='https://github.com/nidhiprajapati11'  target='_blank'><i className="fa-brands fa-github" /></NavLink>  
          </div>
        </div>

        <nav>
          <ul>
            <li><i className="fa-solid fa-house" /><NavLink to='/my-portfolio' >home</NavLink></li>
            <li> <i className="fa-solid fa-user" /><NavLink to='/about'>about</NavLink></li>
            <li> <i className="fa-solid fa-file" /><NavLink to='/resume'>resume</NavLink></li>
            <li>  <i className="fa-solid fa-server" /><NavLink to='/service'>services</NavLink></li>
            <li> <i className="fa-solid fa-envelope" /><NavLink to='/contact'>contact</NavLink></li>
          </ul>
        </nav>

        <div className="footer">
          <p>&copy; copyright 2023 <strong>All Right Reserved</strong><br />designed by <NavLink>me</NavLink></p>
        </div>

      </header>
      <div className='icon' onClick={() => SetMobile(!mobil)}>
          <i className={mobil ? 'fa-solid fa-xmark ' : 'fa-solid fa-bars'}/>
       
        </div>
    </>
  )
}

export default Header
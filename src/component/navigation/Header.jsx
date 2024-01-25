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
            <i className="fa-brands fa-instagram" />
            <i className="fa-brands fa-linkedin" />
            <i className="fa-brands fa-github" />
          </div>
        </div>

        <nav>
          <ul>
            <li><i className="fa-solid fa-house" /><NavLink to='/' >home</NavLink></li>
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
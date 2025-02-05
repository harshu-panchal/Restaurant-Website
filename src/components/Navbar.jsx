import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import logo from '/restaurant.png'


const Navbar = () => {
  function uncheck() {
    let checkboxx = document.querySelector('.checkbox')
    checkboxx.checked = false;
  }
  return (
    <div>
      <div className='navbar'>
        <div className="logo">
          <div className="logo-image">
            <img className='image-logo' src={logo} alt="" />
          </div>
          <div className="restro-name">
            <span className='name-restro'>ZaikaZest</span>
          </div>
        </div>

        <div className="nav-options">
          <NavLink to="/"><li className="option"><span className='hm'>Home</span></li></NavLink>
          <NavLink to='/Flavorprof'><li className='option'><span>Menu</span></li></NavLink>
          <NavLink to="/Aboutus" ><li className="option"><span>AboutUs</span></li></NavLink>
          <NavLink to='/Contact'><li className='option'><span>Contact</span></li></NavLink>
        </div>

      </div>
    </div>
  )
}

export default Navbar

import React from 'react'
import samosa from '/samosa.png'
import kachori from '/kachori.png'
import strtr_dhokla from '/starter_dhokla.png'
import './Starters.css'
import './Menu_responsive.css'

const Starters = () => {
  return (
    <div>
      <div className="about-heading">
        <span>Starters</span>
      </div>
      <div className="starter-page">

        <div className="first-menubox">
          <div className="leftside-img-div">
            <div className="side-img">
              <img className='samosa-img' src={samosa} alt="" />
            </div>
          </div>

          <div className="menu-list">
            <div className="dish-names">
              <li>Samosa</li>
              <li>Kachori</li>
              <li>Paneer Pakora</li>
            </div>
            <div className="dish-price">
              <li>&#8377;25</li>
              <li>&#8377;25</li>
              <li>&#8377;35</li>
            </div>
          </div>
        </div>


        <div className="second-menubox">
          <div className="menu-list">
            <div className="dish-names">
              <li>Vegspring Roll</li>
              <li>Aloo Chaat</li>
              <li>Paneer Tikka</li>
            </div>
            <div className="dish-price">
              <li>&#8377;25</li>
              <li>&#8377;25</li>
              <li>&#8377;35</li>
            </div>
          </div>

          <div className="rightside-img-div">
            <div className="side-img">
              <img className='samosa-img' src={kachori} alt="" />
            </div>
          </div>
        </div>



        <div className="first-menubox">
          <div className="leftside-img-div">
            <div className="side-img">
              <img className='dhokla-img' src={strtr_dhokla} alt="" />
            </div>
          </div>

          <div className="menu-list">
            <div className="dish-names">
              <li>Dhokla</li>
              <li>Kothimbir Vadi</li>
              <li>Masala Idli</li>
            </div>
            <div className="dish-price">
              <li>&#8377;25</li>
              <li>&#8377;25</li>
              <li>&#8377;35</li>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Starters

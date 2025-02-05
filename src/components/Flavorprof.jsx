import React from 'react'
import './Flavorprof.css'
import { NavLink } from 'react-router-dom'

const Flavorprof = () => {
    return (
        <div>
            <div className="flavor-profile-page">
                <div className="about-heading">
                    <span>Flavor Profile</span>
                </div>
                <div className="profile-buttons">
                    <div className="first-row">
                        <NavLink to='/Starters'><li className="buttonn button-blue"><span className="starter">Starter</span></li></NavLink>
                        <NavLink to='/Maincourse'><li className="buttonn button-pink"><span className="Main-Course">Main Course</span></li></NavLink>
                        <NavLink to='/Sidedishes'><li className="buttonn button-green"><span className="Side-Dishes">Side Dishes</span></li></NavLink>
                    </div>
                    <div className="second-row">
                        <NavLink to='/Desserts'><li className="buttonn button-orange"><span className="Desserts">Desserts</span></li></NavLink>
                        <NavLink to='/Beverages'><li className="buttonn button-purple"><span className="Beverages">Beverages</span></li></NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Flavorprof

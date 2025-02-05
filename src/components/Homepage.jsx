import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './Homepage.css'
import faluda from "/faluda.jpg"
import aloo_chaat from '/aloo-chaat.jpg'
import palak_paneer from '/palak_paneer.jpg'
import salad from '/salad.jpg'
import gulab_jamun from '/gulab_jamun.jpg'
import dhokla from '/dhokla.jpg'
import kadhai_paneer from '/kadhai_paneer.jpg'
import palak from '/palak.jpg'
import rasmalai from '/rasmalai.jpg'
import lassi from '/lassi.jpg'



const Homepage = () => {
    const images = [aloo_chaat, palak_paneer, salad, gulab_jamun, faluda];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (<>
        <div className="home-page">
            <div className="banner">
                <div className="banner-images">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt=""
                            className={`sliding-image ${index === currentIndex ? "active" : "inactive"
                                }`}
                        />
                    ))}
                </div>


            </div>
        </div>
        <div className="banner-button">
            <NavLink to='/Flavorprof'><li className="button"><span className="flavor-profile">Flavor Profile</span></li></NavLink>
        </div>

        <div className="line"></div>

        <div className="specials">
            <div className="specials-heading">
                <span>Specials</span>
            </div>
            <div className="special-images">
                <div className="special-card">
                    <img className='special-img' src={dhokla} alt="" />
                    <span>Dhokla</span>
                </div>
                <div className="special-card">
                    <img className='special-img' src={palak} alt="" />
                    <span>Palak Paneer</span>
                </div>
                <div className="special-card">
                    <img className='special-img' src={kadhai_paneer} alt="" />
                    <span>Kadhai Paneer</span>
                </div>
                <div className="special-card">
                    <img className='special-img' src={rasmalai} alt="" />
                    <span>Rasmalai</span>
                </div>
                <div className="special-card">
                    <img className='special-img' src={lassi} alt="" />
                    <span>Lassi</span>
                </div>
            </div>
        </div>


        <div className="catagory-buttons">
        <div className="line"></div>
            <div className="specials-heading">
                <span>Dish Varieties</span>
            </div>
            <div className="variety-buttons">
                <NavLink to="/Starters" ><li className="button-name button-blue"><span className="">Starters</span></li></NavLink>
                <NavLink to="/Maincourse"><li className="button-name button-pink"><span className="">Main Course</span></li></NavLink>
                <NavLink to="/Sidedishes"><li className="button-name button-green"><span className="">Side Dishes</span></li></NavLink>
                <NavLink to="/Desserts"><li className="button-name button-orange"><span className="">Desserts</span></li></NavLink>
                <NavLink to="/Beverages"><li className="button-name button-purple"><span className="">Beverages</span></li></NavLink>
            </div>
        </div>
        
        
       
    </>

    );
};

export default Homepage

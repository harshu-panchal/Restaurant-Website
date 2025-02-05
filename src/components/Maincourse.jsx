import React from 'react'
import Paneer from '/Paneer.png'
import naan from '/naan.png'
import rice from '/rice.png'
import './Menu_responsive.css'

const Maincourse = () => {
    return (
        <div>
            <div className="maincourse-page">
                <div className="about-heading">
                    <span>Main Course</span>
                </div>
                <div className="first-menubox">
                    <div className="leftside-img-div">
                        <div className="side-img">
                            <img className='samosa-img' src={Paneer} alt="" />
                        </div>
                    </div>

                    <div className="menu-list">
                        <div className="dish-names">
                            <li>Paneer Butter Masala</li>
                            <li>Palak Paneer</li>
                            <li>Kadhai Paneer</li>
                        </div>
                        <div className="dish-price">
                            <li>&#8377;250</li>
                            <li>&#8377;250</li>
                            <li>&#8377;280</li>
                        </div>
                    </div>
                </div>


                <div className="second-menubox">
                    <div className="menu-list">
                        <div className="dish-names">
                            <li>Malai Kofta</li>
                            <li>Baigan Bharta</li>
                            <li>Daal fry</li>
                        </div>
                        <div className="dish-price">
                            <li>&#8377;200</li>
                            <li>&#8377;200</li>
                            <li>&#8377;180</li>
                        </div>
                    </div>

                    <div className="rightside-img-div">
                        <div className="side-img">
                            <img style={{height: "255px"}} className='samosa-img' src={rice} alt="" />
                        </div>
                    </div>
                </div>



                <div className="first-menubox">
                    <div className="leftside-img-div">
                        <div className="side-img">
                            <img className='dhokla-img' src={naan} alt="" />
                        </div>
                    </div>

                    <div className="menu-list">
                        <div className="dish-names">
                            <li>Butter Naan</li>
                            <li>Tandoori Roti</li>
                            <li>Aloo Paratha</li>
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

export default Maincourse

import React from 'react'
import gulab_jamun from '/gulab_jamun.png'
import icecream from '/icecream.png'
import ladoo from '/ladoo.png'

const Desserts = () => {
    return (
        <div>
            <div className="desserts-page">
                <div className="about-heading">
                    <span>Desserts</span>
                </div>
                <div className="first-menubox">
                    <div className="leftside-img-div">
                        <div className="side-img">
                            <img style={{height: "255px"}} className='samosa-img' src={gulab_jamun} alt="" />
                        </div>
                    </div>

                    <div className="menu-list">
                        <div className="dish-names">
                            <li>Rasgulla</li>
                            <li>Gulab Jamun</li>
                            <li>Kalakand</li>
                        </div>
                        <div className="dish-price">
                            <li>&#8377;50</li>
                            <li>&#8377;50</li>
                            <li>&#8377;50</li>
                        </div>
                    </div>
                </div>


                <div className="second-menubox">
                    <div className="menu-list">
                        <div className="dish-names">
                            <li>Rabri</li>
                            <li>Rasmailai</li>
                            <li>Gajar Halwa</li>
                        </div>
                        <div className="dish-price">
                            <li>&#8377;80</li>
                            <li>&#8377;60</li>
                            <li>&#8377;90</li>
                        </div>
                    </div>

                    <div className="rightside-img-div">
                        <div className="side-img">
                            <img className='samosa-img' src={icecream} alt="" />
                        </div>
                    </div>
                </div>



                <div className="first-menubox">
                    <div className="leftside-img-div">
                        <div className="side-img">
                            <img className='dhokla-img' src={ladoo} alt="" />
                        </div>
                    </div>

                    <div className="menu-list">
                        <div className="dish-names">
                            <li>Besan Ladoo</li>
                            <li>Motichoor ladoo</li>
                            <li>Jalebi</li>
                        </div>
                        <div className="dish-price">
                            <li>&#8377;40</li>
                            <li>&#8377;40</li>
                            <li>&#8377;80</li>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Desserts

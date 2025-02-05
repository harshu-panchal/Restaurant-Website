import React from 'react'
import chai from '/chai.png'
import lassi1 from '/lassi1.png'
import juice from '/juice.png'

const Beverages = () => {
    return (
        <div>
            <div className="beverages-page">
                <div className="about-heading">
                    <span>Beverages</span>
                </div>
                <div className="first-menubox">
                    <div className="leftside-img-div">
                        <div className="side-img">
                            <img className='samosa-img' src={chai} alt="" />
                        </div>
                    </div>

                    <div className="menu-list">
                        <div className="dish-names">
                            <li>Masala Chai</li>
                            <li>Filter Coffee</li>
                            <li>Badam Milk</li>
                        </div>
                        <div className="dish-price">
                            <li>&#8377;25</li>
                            <li>&#8377;40</li>
                            <li>&#8377;50</li>
                        </div>
                    </div>
                </div>


                <div className="second-menubox">
                    <div className="menu-list">
                        <div className="dish-names">
                            <li>Lassi</li>
                            <li>Aam Panna</li>
                            <li>Rooh Afza</li>
                        </div>
                        <div className="dish-price">
                            <li>&#8377;60</li>
                            <li>&#8377;40</li>
                            <li>&#8377;35</li>
                        </div>
                    </div>

                    <div className="rightside-img-div">
                        <div className="side-img">
                            <img className='samosa-img' src={lassi1} alt="" />
                        </div>
                    </div>
                </div>



                <div className="first-menubox">
                    <div className="leftside-img-div">
                        <div className="side-img">
                            <img style={{width: "245px"}} className='dhokla-img' src={juice} alt="" />
                        </div>
                    </div>

                    <div className="menu-list">
                        <div className="dish-names">
                            <li>Falooda</li>
                            <li>Mango Juice</li>
                            <li>Pineapple Juice</li>
                        </div>
                        <div className="dish-price">
                            <li>&#8377;80</li>
                            <li>&#8377;40</li>
                            <li>&#8377;40</li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Beverages

import React from 'react'
import raita from '/raita.png'
import chutney from '/chutney.png'
import salad from '/salad.png'


const Sidedishes = () => {
    return (
        <div>
            <div className="side-dishes-page">
                <div className="about-heading">
                    <span>Side Dishes</span>
                </div>
                <div className="first-menubox">
                    <div className="leftside-img-div">
                        <div className="side-img">
                            <img className='samosa-img' src={raita} alt="" />
                        </div>
                    </div>

                    <div className="menu-list">
                        <div className="dish-names">
                            <li>Boondi Raita</li>
                            <li>Cucumber Raita</li>
                            <li>Mango Pickle</li>
                        </div>
                        <div className="dish-price">
                            <li>&#8377;50</li>
                            <li>&#8377;60</li>
                            <li>&#8377;35</li>
                        </div>
                    </div>
                </div>


                <div className="second-menubox">
                    <div className="menu-list">
                        <div className="dish-names">
                            <li>Lemon Pickle</li>
                            <li>Mint Chutney</li>
                            <li>Coconut Chutney</li>
                        </div>
                        <div className="dish-price">
                            <li>&#8377;25</li>
                            <li>&#8377;35</li>
                            <li>&#8377;35</li>
                        </div>
                    </div>

                    <div className="rightside-img-div">
                        <div className="side-img">
                            <img className='samosa-img' src={chutney} alt="" />
                        </div>
                    </div>
                </div>



                <div className="first-menubox">
                    <div className="leftside-img-div">
                        <div className="side-img">
                            <img style={{width: "200px"}} className='dhokla-img' src={salad} alt="" />
                        </div>
                    </div>

                    <div className="menu-list">
                        <div className="dish-names">
                            <li>Cucumber Salad</li>
                            <li>Sprouts Salad</li>
                            <li>Masala Corn</li>
                        </div>
                        <div className="dish-price">
                            <li>&#8377;50</li>
                            <li>&#8377;70</li>
                            <li>&#8377;40</li>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Sidedishes

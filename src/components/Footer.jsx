import React from 'react'
import './Footer.css'
import insta from '/instagram.png'
import linkedin from '/linkedin.png'
import github from '/github.png'

const Footer = () => {
    return (
        <>
            <div className="footer-container">
                <div className="line"></div>
                
                <div className="footer-data">
                    <div className="detail">
                        <div className="head sub-heading"><span>Phone</span></div>
                        <div className="info bio">+919876543210</div>
                    </div>
                    <div className="detail">
                        <div className="head sub-heading">Email</div>
                        <div className="info bio">harshvardhanpanc145@gmail.com</div>
                    </div>
                    <div className="detail">
                        <div className="head sub-heading">Socials</div>
                        <div className="info bio"><a target=' blank_' href="https://www.linkedin.com/in/harshvardhan-panchal-1b6404243/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img className='socials' src={linkedin} alt="" /></a>
                            <a target='blank_' href="https://www.instagram.com/harshu_panchal__?igsh=dnAxbTAxbnNqbDhz"><img className='socials instagram' src={insta} alt="" /></a></div>
                    </div>
                    <div className="detail">
                        <div className="head sub-heading">GitHub</div>
                        <div className="info bio"><a target='blank_' href="https://github.com/harshu-panchal"><img className='socials' src={github} alt="" /></a></div>
                    </div>
                </div>


                <div className="creator-name bio">
                    <span>© 2025 By Harshvardhan Panchal All Rights Reserved.</span>
                    <span>Designed by Harshvardhan Panchal</span>
                </div>
            </div>
        </>
    )
}

export default Footer

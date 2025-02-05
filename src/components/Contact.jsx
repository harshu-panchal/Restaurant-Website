import React from 'react'
import './Contact.css'
import Contact_form from './Contact_form'

const Contact = () => {
  return (
    <div>
      <div className="contact-page">
      <div className="resume-container">
        <div className="main-container">
        <div className="contact-container">
          <div className="resume-heading">
            <span className='word'>Contact</span>
          </div>
          <div className="bio para1">
            <span>Looking forward to hearing from you</span>
          </div>
          <div className="ph-number">
            <div className="ph-number-head">
              <span className='sub-heading'>Phone</span>
            </div>
            <div className="ph-num">
              <span className="bio">+916268423925</span>
            </div>
          </div>
          <div className="email-id">
            <div className="em-id-head">
              <span className='sub-heading'>Email</span>
            </div>
            <div className="em-id">
              <span className="bio">harshvardhanpanc145@gmail.com</span>
            </div>
          </div>

        </div>
        <Contact_form/>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Contact

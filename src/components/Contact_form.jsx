import React, { useRef } from 'react'
import './Contact_form.css'

const Contact_form = () => {

    return (
        <>
            <div className="form-container">
                <form action="" method=''>
                    <div className="row1">
                        <div className="feild1">
                            <div className="placehldr bio"><span>First Name *</span></div>
                            <input type="text" name="firstname" id="" required={true}/>
                        </div>
                        <div className="feild1">
                            <div className="placehldr bio"><span>Last Name *</span></div>
                            <input type="text" name="lastname" id="" required={true}  />
                        </div>
                    </div>
                    <div className="row1">
                        <div className="feild1">
                            <div className="placehldr bio"><span>Email *</span></div>
                            <input type="email" name="email" id="" required={true} />
                        </div>
                        <div className="feild1">
                            <div className="placehldr bio"><span>Subject</span></div>
                            <input type="text" name="subject" id="" />
                        </div>
                    </div>

                    <div className="row2">
                        <div className="message">
                            <div className="placehldr bio"><span>Message</span></div>
                            <textarea name="message" id="" className="big-box"></textarea>
                        </div>
                    </div>

                    <input className='submit-btn sub-heading' type="submit" value="submit" />

                </form>
            </div>
        </>
    )
}

export default Contact_form

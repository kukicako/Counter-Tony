import React from 'react'
import './modal.scss'


const appointmentform = props => {
    return(
    <div class="appointment">
        <div class="header">
            <h1>Schedule A Meeting</h1>
        </div>
        <div className="appointment-text">
            <p>We offer demo reviews and shit</p>
        </div>
            <form className='form'>
                    <label className='label'>Name: 
                        <input className='input' type='text' name='name' placeholder='John Doe' required />
                    </label>
                
                    <label className='label'>Email:
                        <input className='input' type='text' name='primaryemail' placeholder='Email' required />
                    </label>
                        
                    <label className='label-description'>Description:
                        <textarea className='input-description' rows="10" cols="30" type='text' name='description' placeholder='...' required />
                    </label>
                    
                    <div className="submit-appointment">
                        <button className='button' type='submit'>Send!</button>
                    </div>
                    <div className="bottom-text">
                        <p>We will email you shortly to discuss the best time to schedule an appointment.</p></div>
            </form>
    </div>

        
    )
}

export default appointmentform
import React from 'react'
import './modal.scss'


const appointmentform = props => {
    return(
    <div class="appointment">
        <div class="header">
            <h1 className="header-title-module">Train with the Greatest</h1>
        </div>
        <div className="appointment-text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
            <form className='form'>
                    <label className='label'>Name:
                        <input className='input' type='text' name='name' placeholder='John Doe' required />
                    </label>
                    <div className="label-text">
                        <p>Real Name</p>
                    </div> 
                    <label className='label'>Email:
                        <input className='input' type='text' name='email' placeholder='john@mail.com' required />
                    </label>
                    <div className="label-text">
                        <p>We will email you shortly to discuss best available time slots</p>
                    </div> 
                    <label className='label'>Rank:
                        <input className='input-mm' type='text' name='rank' placeholder='Global Elite' required />
                    </label>
                    <div className="label-text">
                        <p>Please list all your ranks silver/rank S/Faceit lvl 10</p>
                    </div> 
                    <label className='label'>Steam ID:
                        <input className='input-last' type='text' name='steam' placeholder='https:/steamcommunity.com/profiles/76561198149671515' required />
                    </label>
                    <div className="label-text">
                        <p>Click <a href="https://steamidfinder.com">here</a> to find your steam id</p>
                    </div>     
                    <label className='label'>Questions:
                        <input className='input-last' type='text' name='question' placeholder='...'  />
                    </label> 
                    
                    <div className="submit-appointment">
                        <button className='appointment-button' type='submit'>Submit!</button>
                    </div>
                   
            </form>
    </div>



    )
}

export default appointmentform













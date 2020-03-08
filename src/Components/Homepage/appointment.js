import React from 'react'
import styled from 'styled-components'
import csgo from '../images/css.jpg'
const StyledP = styled.p`
margin:2px;
`
const appointment = props => {
    return(
<div class="csgo-flip-card">
  <div class="csgo-flip-card-inner">
    <div class="csgo-flip-card-front">
      <h1>Train with the Greatest</h1>
      <StyledP>Get personalized one on one training with an expert. Send in an application and we will reply to you as soon as possible. We offer demo reviews and even playing matches with your scrub ass. Its only 50$ a round!!</StyledP>
      <img className="csgo-pic" src={csgo}></img>
    </div>
    <div class="csgo-flip-card-back">
      <h1>Schedule A Meeting</h1>
      <form className='form'>

                <label className='label'>Name: 
                <input className='input' type='text' name='name' placeholder='John Doe' required />
                </label>

                <label className='label'>Email:
                <input className='input' type='text' name='primaryemail' placeholder='Email' required />
                </label>
                
                <label className='label'>description:
                <input className='input' type='text' name='description' placeholder='...' required />
                </label>
              
                <div>
                <button className='button' type='submit'>Send!</button>
                </div>
                <p>We will email you shortly to discuss the best time.</p>
            </form>
    </div>
  </div>
</div>
        
    )
}

export default appointment
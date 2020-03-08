import React from 'react'
import styled from 'styled-components'
import csgo from '../images/css.jpg'
const StyledP = styled.p`
margin:2px;
`
const appointment = props => {
    return(
<div class="card-transparent">
  <div class="card-header">This is my header</div>
  <div class="card-block special-card" style="background-color: rgba(245, 245, 245, 0.4); ">This is my block</div>
  <div class="card-footer">This is my footer</div>
</div>
        
    )
}

export default appointment
import React from 'react'; 
import './teachers.scss'
import Example from '../images/youtubePic.png'

 const Teachers = props => {
    return (
            <div className="teachers">
                <div className="teachers-title">
                    <h4>Our Teachers</h4> 
                </div>        
                <div className="team">
                    <div class="teacher-pics">
                        <img className="teacher-image" src={Example} alt="example"/>
                        <img className="teacher-image" src={Example} alt="example"/>
                        <img className="teacher-image" src={Example} alt="example"/>
                        <img className="teacher-image" src={Example} alt="example"/>

                    </div>
                    <div className="descriptions-teacher">

                    </div>

                </div>
            </div>
    )
}


export default Teachers; 


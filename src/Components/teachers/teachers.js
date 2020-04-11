import React from 'react'; 
import './teachers.scss'
import Example from '../images/youtubePic.png'
import Leader from '../images/leader.png'

 const Teachers = props => {
    return (
            <div className="teachers">
                <div className="teachers-title">
                    <h1>Our Teachers</h1> 
                </div>        
                <div className="team">
                    <div class="teacher-pics">
                        <img className="teacher-image" src={Example} alt="example"/>
                        <img className="teacher-image" src={Example} alt="example"/>
                        <img className="teacher-image" src={Example} alt="example"/>
                        <img className="teacher-image" src={Example} alt="example"/>

                    </div>
                    <div className="descriptions-teacher">
                        <div className="teacher-description"> 
                            <h2><b>David "Gatr" Downes</b></h2>
                            <h5>ESL PRO LEAGUE MAIN IGL</h5>
                            <h5>Mon-Wed 9pm-5pm</h5>
                            <h5>200$ an hour</h5>
                        </div>
                       
                        <div className="teacher-description">
                            <h2><b>Anthony "dawn" Hagopian</b></h2>
                            <h5>ESL PRO LEAGUE MAIN IGL</h5>
                            <h5>Mon-Wed 9pm-5pm</h5>
                            <h5>200$ an hour</h5>
                        </div>
                        
                        <div className="teacher-description">
                            <h2><b>Xeppa</b></h2>
                            <h5>ESL PRO LEAGUE MAIN IGL</h5>
                            <h5>Mon-Wed 9pm-5pm</h5>
                            <h5>200$ an hour</h5>
                        </div>
                        <div className="teacher-description">
                            <h2><b>Gengstah</b></h2>
                            <h5>ESL PRO LEAGUE MAIN IGL</h5>
                            <h5>Mon-Wed 9pm-5pm</h5>
                            <h5>200$ an hour</h5>
                        </div>

                    </div>
                    <div className="teacher-right-pic">
                        <img className='leader' src={Leader} alt="Leader"></img>

                    </div>

                </div>
            </div>
    )
}


export default Teachers; 


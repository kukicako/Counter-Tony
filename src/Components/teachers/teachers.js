import React from 'react'; 
import './teachers.scss'
import Example from '../images/youtubePic.png'
import Leader from '../images/leader.jpg'

 const Teachers = props => {
    return (
            <div className="teachers">
                <div className="teachers-title">
                    <h1>Teachers</h1> 
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
                            <h3 style={{borderTop:"3px solid dodgerblue", paddingTop:"3%"}}><b>David "Gatr" Downes</b></h3>
                            <h5>ESL PRO LEAGUE MAIN IGL</h5>
                            <h6>Mon-Wed 9pm-5pm</h6>
                            <h6>200$ an hour</h6>
                        </div>
                       
                        <div className="teacher-description">
                            <h3><b>Anthony "dawn" Hagopian</b></h3>
                            <h5>ESL PRO LEAGUE MAIN IGL</h5>
                            <h6>Mon-Wed 9pm-5pm</h6>
                            <h6>200$ an hour</h6>
                        </div>
                        
                        <div className="teacher-description">
                            <h3><b>Xeppa</b></h3>
                            <h5>ESL PRO LEAGUE MAIN IGL</h5>
                            <h6>Mon-Wed 9pm-5pm</h6>
                            <h6>200$ an hour</h6>
                        </div>
                        <div className="teacher-description">
                            <h3><b>Gengstah</b></h3>
                            <h5>ESL PRO LEAGUE MAIN IGL</h5>
                            <h6>Mon-Wed 9pm-5pm</h6>
                            <h6>200$ an hour</h6>
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


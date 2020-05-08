import React, {useState} from 'react'; 
import './teachers.scss'
import Example from '../images/youtubePic.png'
import Leader from '../images/leader.jpg'
import axios from 'axios'

 const Teachers = props => {

    const [apply, setApply] = useState({
        name: '',
        email: '', 
        rank: '',
        steam: '',
        questions: '',
        
      });

    const handleChange = e => {
        setApply(
          {
            ...apply,
            [e.target.name]: e.target.value
          }
        )
      }


    
      const onSubmit = e =>{
        e.preventDefault()
        console.log(apply)
        axios
        .post('https://counter-tony.herokuapp.com/api/applications', apply)
        .then(res => {
            console.log(res, "GOT EM")
            props.history.push('/teachers-red')
        })
        .catch(err => alert("Submission did not go through."))
    }


    return (
        <div className="teachers">
            <div class="top-container">
                <div className="left-container">
                        <div className="left-container-title">
                            <h2 className="offer">What We Offer</h2>
                        </div>
                        <div className="left-container-text">
                            <p>CSGOTeacher is offering 1 on 1 private lessons with our experienced teachers. We aim to be the best possible option for people out there interested in specialized training. We've spent quite a bit of time equiping and preparing ourselves to be the best possible tutors of the game. We want to be able to help others take their game to the next level and we believe that our coaching alongside our guides and videos our capable of doing just that. We want to leave our mark on this game, we feel like this is one of the many ways we can do so. In our privatized lessons, we currently offer 30 or 60 minute sessions which we will create an effective plan beforehand so that once the lesson begins, we can tackle the plan to make sure you get the most bang out of your buck. We understand that currently during these difficult times that money is tight for the vast majority of people, that's why we will not have set prices. We will work with you in an attempt to figure out a price that works for your budget. If you have any possible questions regarding any factor of these lessons, may it be the lessons or pricing, do not hesitate to contact Gatr on twitter or reddit which you can do by clicking on the icon on his card. Below are some specifics you can choose to receive if you purchase a private lesson. </p>
                            
                            <ul className="list-container">
                            <li className="left-list">• Personalized 1 on 1 server work.</li>
                            <li className="left-list">• Thorough demo reviews with our experienced players.</li>
                            <li className="left-list">• Specialized plans catered to your success.</li>
                            <li className="left-list">• Someone to push you to be your best.</li>
                            <li className="left-list">• Follow up training to make sure you're on the road for success.</li>
                            </ul>
                
                        </div>
                
                </div>
                <div className="right-container">
                    <div className="right-container-title">
                        <h2 className="right-title">Meet the Team</h2>
                    </div>
                    <div className="team-container">
                        <div className="playa"> 
                            <div className="playa-img">
                                <img className="playa-pic" src={Example}></img>
                            </div>
                            <div className="playa-title1">
                                <p>David "Gatr" Downes</p>
                            </div>
                            <div className="skills-container">
                                <div className="box"> 
                                    <div className="box-title"> 
                                        <p> Location/Time Zone:</p>
                                    </div>

                                    <div className="box-desc">
                                        <div className="timezone">
                                            <p>Pacific</p>
                                        </div>
                                    </div>
                                </div>


                                <div className="box"> 
                                    <div className="box-title"> 
                                        <p>Main Role:</p>
                                    </div>
                                    <div className="box-desc">
                                        <div className="rank">
                                            <p >In Game Leader</p>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="box-long"> 
                                    <div className="box-title"> 
                                        <p>Experience:</p>
                                    </div>
                                    <div className="box-desc">
                                        <div className="experience">
                                            <p>15 seasons spent as an IGL from Open to Advanced. Currently Coaching.</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        
                        <div className="playa1"> 
                            <div className="playa-img">
                                <img className="playa-pic" src={Example}></img>
                            </div>
                            <div className="playa-title">
                                <p>Anthony "dawn" Hagopian</p>
                            </div>
                            <div className="skills-container">
                                <div className="box"> 
                                    <div className="box-title"> 
                                        <p> Location/Time Zone:</p>
                                    </div>

                                    <div className="box-desc">
                                        <div className="timezone">
                                            <p>Pacific</p>
                                        </div>
                                    </div>
                                </div>


                                <div className="box"> 
                                    <div className="box-title"> 
                                        <p>Main Role:</p>
                                    </div>
                                    <div className="box-desc">
                                        <div className="rank">
                                            <p>Lurking, AWPing</p>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="box-long"> 
                                    <div className="box-title"> 
                                        <p>Experience:</p>
                                    </div>
                                    <div className="box-desc">
                                        <div className="experience">
                                            <p>FPL, ESEA-Advanced+</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* <div className="playa1"> 
                            <div className="playa-img">
                                <img className="playa-pic" src={Example}></img>
                            </div>
                            <div className="playa-title">
                                <p>Kyle "Gengstah" Ferguson</p>
                            </div>
                            <div className="skills-container">
                                <div className="box"> 
                                    <div className="box-title"> 
                                        <p> Location/Time Zone:</p>
                                    </div>

                                    <div className="box-desc">
                                        <div className="timezone">
                                            <p>GMT-7</p>
                                        </div>
                                    </div>
                                </div>


                                <div className="box"> 
                                    <div className="box-title"> 
                                        <p>Main Role:</p>
                                    </div>
                                    <div className="box-desc">
                                        <div className="rank">
                                            <p >Lurk</p>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="box-long"> 
                                    <div className="box-title"> 
                                        <p>Experience:</p>
                                    </div>
                                    <div className="box-desc">
                                        <div className="experience">
                                            <p>Boston Major Winner</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div> */}
                        <div className="playa"> 
                            <div className="playa-img">
                                <img className="playa-pic" src={Example}></img>
                            </div>
                            <div className="playa-title1">
                                <p>Anthony "Mello" Charletta</p>
                            </div>
                            <div className="skills-container">
                                <div className="box"> 
                                    <div className="box-title"> 
                                        <p> Location/Time Zone:</p>
                                    </div>

                                    <div className="box-desc">
                                        <div className="timezone">
                                            <p>Central</p>
                                        </div>
                                    </div>
                                </div>


                                <div className="box"> 
                                    <div className="box-title"> 
                                        <p>Main Role:</p>
                                    </div>
                                    <div className="box-desc">
                                        <div className="rank">
                                            <p >Lurking, Support</p>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="box-long"> 
                                    <div className="box-title"> 
                                        <p>Experience:</p>
                                    </div>
                                    <div className="box-desc">
                                        <div className="experience">
                                            <p>11 seasons of experience ranging from Open all the way to Advanced.</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>

            </div>    
       

        
    
            <div class="container">
                <form onSubmit={onSubmit}>
                    <div class="row">
                        <div class="col-25">
                            <label>Name</label>
                        </div>

                        <div class="col-75">
                            <input type="text" value={apply.name} name="name" placeholder='Enter Your Username or Real Name Here' onChange={handleChange} required/>
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="col-25">
                            <label >Email</label>
                        </div>

                        <div class="col-75">
                            <input type="text" name="email" value={apply.email} placeholder="Enter Your Email" onChange={handleChange} required/>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-25">
                            <label >Rank</label>
                        </div>

                        <div class="col-75">
                            <input type="text" name="rank" value={apply.rank} placeholder="Highest Rank (ESEA/MM/FACEIT)" onChange={handleChange} required/>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-25-1">Steam ID ﹖
                            <span class="tooltiptext">click <a href="https://steamidfinder.com/" className="here">here</a> to find out</span>
                            
                        </div>

                        <div class="col-75">
                            <input type="text" name="steam" value={apply.steam} placeholder="https:/steamcommunity.com/profiles/76561198149671515" onChange={handleChange} required/>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-25">
                        <label>Questions/Concerns</label>
                        </div>
                        <div class="col-75">
                        <textarea id="subject" name="questions" value={apply.questions} placeholder="Any comments or questions you may have, please put them here before submitting." onChange={handleChange} ></textarea>
                        </div>
                    </div>

                    <div class="rowbutton">
                        <button className="but"> Submit </button>
                    </div>
                </form>
            </div>
      </div>
    )
}


export default Teachers; 


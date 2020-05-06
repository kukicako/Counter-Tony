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
                            <p>Imagine Kim yo-jong the NEW NORTH KOREAN PRESIDENT Imagine her just grabbing you by the skull with her vice strength hands and just throwing your naked body onto the bed"You are my toy now" She sits on you and plays with your trembling penis "If this comes before I do, you die" and she laughs And she plays with it more and more and you desperately hold the coom in and she finds it funny Then she just sits right on top of you and grinds while looking you right in the eyes mockingly, and your balls are screaming "LET THEM OUT! LET THEM OUT" And she just laughs as she grinds harder, and harder till she's battering your cock as if it was a piston in a deep underground boring machine and she groans "MORE MORE, MORE" and every fibre of your being wants to erupt in coom but you can't, she isn't satisfied yet and she's hipthrusting away with enough force to break Hephaestus's anvilFinally she orgasms, and she smiles contentedly"You may now come" and you just erupt, all that built up energy bursts inside of her and she gently caresses the side of your face with a loving touch, but then"That was reasonable, but next time, I expect to be overwhelmed" and you're afraid, you're scared, that was all you had and it was barely enough for her, you know, next time, you must be stronger, you must be more manly, perhaps you will become her favourite And she walks off, vagely amused, and returns to ruling, with her iron hands</p>
                            
                            <ul className="list-container">
                            <li className="left-list">• Stade Rennais qualifies for the UEFA Champion's League for the first time ever.</li>
                            <li className="left-list">• 73 year old youtuber who beat dark souls 1,2,3 Sekiro and Nioh died 3 days ago.</li>
                            <li className="left-list">• The Mediadel | Game of Zones Season 7 Premiere</li>
                            <li className="left-list">• This happened and I wanted to shareHIGHLIGHT</li>
                            <li className="left-list">• During his rehab, John Wall has been keeping track of players taunting the Wizards</li>
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
                                            <p>PDT</p>
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
                                            <p>Top 3 ESEA League 2018</p>
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
                                            <p>GMT</p>
                                        </div>
                                    </div>
                                </div>


                                <div className="box"> 
                                    <div className="box-title"> 
                                        <p>Main Role:</p>
                                    </div>
                                    <div className="box-desc">
                                        <div className="rank">
                                            <p >Entry-Frag</p>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="box-long"> 
                                    <div className="box-title"> 
                                        <p>Experience:</p>
                                    </div>
                                    <div className="box-desc">
                                        <div className="experience">
                                            <p>FPL Gold Winner 2018-2019</p>
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
                        </div>
                        <div className="playa"> 
                            <div className="playa-img">
                                <img className="playa-pic" src={Example}></img>
                            </div>
                            <div className="playa-title1">
                                <p>Asian "Mello" Dude</p>
                            </div>
                            <div className="skills-container">
                                <div className="box"> 
                                    <div className="box-title"> 
                                        <p> Location/Time Zone:</p>
                                    </div>

                                    <div className="box-desc">
                                        <div className="timezone">
                                            <p>Corner</p>
                                        </div>
                                    </div>
                                </div>


                                <div className="box"> 
                                    <div className="box-title"> 
                                        <p>Main Role:</p>
                                    </div>
                                    <div className="box-desc">
                                        <div className="rank">
                                            <p >baiting</p>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="box-long"> 
                                    <div className="box-title"> 
                                        <p>Experience:</p>
                                    </div>
                                    <div className="box-desc">
                                        <div className="experience">
                                            <p>Dying</p>
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
                            <input type="text" value={apply.name} name="name" placeholder='Anthony "dawn" Hagopian' onChange={handleChange} required/>
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="col-25">
                            <label >Email</label>
                        </div>

                        <div class="col-75">
                            <input type="text" name="email" value={apply.email} placeholder="johndoe@123.com" onChange={handleChange} required/>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-25">
                            <label >Rank</label>
                        </div>

                        <div class="col-75">
                            <input type="text" name="rank" value={apply.rank} placeholder="MM/FACEIT/ESEA" onChange={handleChange} required/>
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
                        <textarea id="subject" name="questions" value={apply.questions} placeholder="..." onChange={handleChange} ></textarea>
                        </div>
                    </div>

                    <div class="row">
                        <button className="but"> Submit </button>
                    </div>
                </form>
            </div>
      </div>
    )
}


export default Teachers; 


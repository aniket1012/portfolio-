import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'

import Education from './Education'

 

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img 
                                src = "https://media.licdn.com/dms/image/C4D03AQG8gZcahkdOLg/profile-displayphoto-shrink_200_200/0?e=1582156800&v=beta&t=YVTRCr0XHjYnf1yXpQCoE445QJC8EYGAgEYk9BWGsDI"
                                alt='avatar'
                                style={{height: '200px', paddingTop:'2em'}}
                            />
                        </div>
                        <h2 style={{paddingTop: '1em', textAlign: 'center'}}>Aniket Patel</h2>
                        <h4 style={{color:'grey', textAlign:'center'}}>Full Stack Developer</h4>
                        <hr stlye={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>
                            Electrical Engineer who discovered a passion for full stack software development.
                            Diligent front- and back-end developer experienced in Javascript, React/Redux, React Native, 
                            Thunk, Ruby on Rails, HTML5, CSS, who wishes to pursue his passion for developing stunning web 
                            applications and intuitive user experiences.
                        </p>
                        <hr stlye={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Address</h5>
                        <p>New York, NY</p>
                        <h5>Phone</h5>
                        <p>+1 (732)-725-9077</p>
                        <h5>Email</h5>
                        <p>Aniketupatel1@gmail.com</p>
                        <h5>Website</h5>
                        <p>mywebsite.com</p>
                        <hr stlye={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    </Cell> 
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>


                        <Education
                            startYear={2019}
                            endYear={2019}
                            schoolName="The Flatiron School"
                            schoolDescription = "Full-stack web development with proven curriculum and passionate instructors alongside a driven student community. Full Stack Web Development, Ruby on Rails and JavaScript immersive program. 
                            Engineered procedural CLI following Ruby OOP principles and best practices. 
                            Built RESTful API using Ruby on Rails and the MVC pattern. Configured RESTful Rails API with ActiveModel Serializer.
                             Built ground up front - end, back - end, full - stack web application projects "
                        />
                        <Education
                            startYear={2010}
                            endYear={2015}
                            schoolName="Stevens Institute of Technology"
                            schoolDescription = "Bachelor of Engineering - BE, Electrical and Electronics Engineering "
                        />
                        <hr style={{borderTop: '3px solid #fff'}}/>

                        <h2>Experience</h2>

                        


                    </Cell> 
                </Grid>
            </div>
        )
    }
}

export default Resume
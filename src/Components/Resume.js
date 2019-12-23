import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'

import Education from './Education'
import Experience from './Experience'
import Skills from './Skills'

 

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
                            schoolDescription = "Full-stack Web-Devlopment Software-Engineering Immersive"
                        />
                        <Education
                            startYear={2010}
                            endYear={2015}
                            schoolName="Stevens Institute of Technology"
                            schoolDescription = "Bachelor of Engineering - BE, Electrical and Electronics Engineering "
                        />
                        <hr style={{borderTop: '3px solid #fff'}}/>

                        <h2>Experience</h2>
                        <Experience
                            startYear='May 2017'
                            endYear='Dec 2018'
                            jobName="New York City Transit Authority"
                            jobTitle="Assistant Electrical Engineer"
                            jobDescription1 = "- Analyzed and corrected  code system architecture."
                            jobDescription2 = "- Facilitated prompt response time to submittals received from general contractors of various projects"
                            jobDescription3 = "- Collaborated with industry leading signal system manufacturers to facilitate installation and modernization of New York City Transit Authority revenue train lines."
                            jobDescription4 = "- Completed multiple factory inspections of NYCT code system racks for quality assurance and design accuracy."
                        />

                        <Experience
                            startYear='Nov 2016'
                            endYear='May 2017'
                            jobName="Alpha Assembly Solutions"
                            jobTitle="Energy Technology Analyst"
                            jobDescription1 = "- Analyzed and corrected  code system architecture."
                            jobDescription2 = "- Analyzed the printed electronics market space for potential gaps, for Alpha Assembly Solutions to investigate."
                        />

                        <Experience
                            startYear='Aug 2015'
                            endYear='Jan 2016'
                            jobName="Chelsea Lighting & Controls Inc."
                            jobTitle= "Estimating Coordinator"
                            jobDescription1 = "- Streamlined architectural and engineering drawings for all lighting specifications and requirements on large scale single and multiphase projects across New York City."
                            jobDescription2 = "- Controlled documentation of correct lighting fixtures specifications, drawings, emergency requirements, and company quotes for approved projects."
                        />
                        <hr style={{borderTop: '3px solid #fff'}}/>
                        <h2>Skills</h2>
                        <Skills 
                            skill="React-Native"
                            progress="100"
                        />
                        <Skills 
                            skill="React"
                            progress="100"
                        />
                        <Skills 
                            skill="JavaScript"
                            progress="75"
                        />
                        <Skills 
                            skill="Rails"
                            progress="75"
                        />
                        <Skills 
                            skill="Ruby"
                            progress="100"
                        />
                        <Skills 
                            skill="HTML"
                            progress="80"
                        />
                        <Skills 
                            skill="CSS"
                            progress="50"
                        />

                    </Cell> 
                </Grid>
            </div>
        )
    }
}

export default Resume
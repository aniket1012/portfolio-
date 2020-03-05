import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'

import Education from './Education'
import Experience from './Experience'
import Skills from './Skills'
import profilepic from '../../src/ProfileImg.png'


 

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img 
                                src = {profilepic}
                                alt='avatar'
                                style={{height: '200px', padding:'2em', borderRadius: '5em'}}
                            />
                        </div>
                        <h2 style={{paddingTop: '1em', textAlign: 'center', color: "white"}}>Aniket Patel</h2>
                        <h4 style={{color:'white', textAlign:'center'}}>Full Stack Developer</h4>
                        <hr stlye={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p style={{color: "white"}}>
                            Software engineer with a background in electrical engineering. Experience in data analytics, supply chain analytics and coding architecture. Developer of stunning web applications and intuitive user experiences.
                        </p>

                        <hr stlye={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h3 style={{color: "white"}}>Phone</h3>
                        <p style={{color: "white"}}>+1 (732)-725-9077</p>
                        <h3 style={{color: "white"}}>Email</h3>
                        <p style={{color: "white"}}>Aniketupatel1@gmail.com</p>
                        <h3 style={{color: "white"}}>Website</h3>
                        <p style={{color: "white"}}>mywebsite.com</p>
                        <hr stlye={{borderTop: '3px solid #833fb2', width: '50%'}}/>

                        <br></br>
                        <h2 style={{color: "white"}}>Skills</h2>

                        <br></br>
                        <h4 class="icon-html5-alt" style={{color: "white", textAlign: 'center'}}>HTML5</h4>
                        <h4 class="icon-css3-alt" style={{color: "white", textAlign: 'center'}}>CSS</h4>
                        <h4 class="icon-ruby" style={{color: "white", textAlign: 'center'}}>Ruby</h4>
                        <h4 class="icon-ruby-on-rails-alt" style={{color: "white", textAlign: 'center'}}>Rails</h4>
                        <h4 class="icon-javascript-alt" style={{color: "white", textAlign: 'center'}}>Javascript</h4>
                        <h4 class="icon-reactjs" style={{color: "white", textAlign: 'center'}}>React</h4>
                        <h4 class="icon-reactjs" style={{color: "white", textAlign: 'center'}}>React Native</h4>
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
                    </Cell> 
                </Grid>
            </div>
        )
    }
}

export default Resume
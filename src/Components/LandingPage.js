import React, { Component } from 'react'
import {
    Grid,
    Cell
} from 'react-mdl'

import Particles from 'react-particles-js';
import profilePic from '../../src/ProfileImg.png'


const particleOpt = {
    particles: {
        number: { 
            value: 150,
            density: {
                enable: true,
                value_area: 800
            }
        } 
    }
    
}




class LandingPage extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>

                <Particles 
                    params={particleOpt}
                />

                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src = {profilePic}
                            alt="avatar"
                            className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Aniket Patel</h1>
                            <h2 style={{color: 'white'}}>Full Stack Web Developer</h2>

                            <hr/>
                            <p> HTML/CSS | Ruby | Rails | JavaScript | React | React Native</p>
                            <div className="social-links">

                        {/* LinkedIn */}
                            <a href="https://www.linkedin.com/in/aniketupatel/" rel="noopener noreferrer" target="_blank" >
                            <i className="fa fa-linkedin-square"  aria-hidden="true"/>  
                            </a>

                        {/* GitHub */}
                            <a href="https://github.com/aniket1012" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-github-square"  aria-hidden="true"/>  
                            </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage
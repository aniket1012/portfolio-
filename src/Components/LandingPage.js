import React, { Component } from 'react'
import {
    Grid,
    Cell
} from 'react-mdl'

import Particles from 'react-particles-js';


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
                            src = 'https://media.licdn.com/dms/image/C4D03AQG8gZcahkdOLg/profile-displayphoto-shrink_200_200/0?e=1582156800&v=beta&t=YVTRCr0XHjYnf1yXpQCoE445QJC8EYGAgEYk9BWGsDI'
                            alt="avatar"
                            className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>

                        <hr/>
                    <p> HTML/CSS | Ruby | Rails | JavaScript | React | React Native</p>
                    <div className="social-links">

                        {/* LinkedIn */}
                        <a href="http://linkedin.com" rel="noopener noreferrer" target="_blank" >
                            <i className="fa fa-linkedin-square"  aria-hidden="true"/>  
                        </a>

                        {/* GitHub */}
                        <a href="http://github.com" rel="noopener noreferrer" target="_blank">
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
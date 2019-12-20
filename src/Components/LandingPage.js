import React, { Component } from 'react'
import {
    Grid,
    Cell
} from 'react-mdl'


class LandingPage extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src = 'https://thumbs.dreamstime.com/b/portrait-young-man-beard-hair-style-male-avatar-vector-portrait-young-man-beard-hair-style-male-avatar-105082137.jpg'
                            alt="avatar"
                            className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>

                        <hr/>
                    <p> HTML/CSS | Ruby | Rails | JavaScript | React | React Native</p>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage
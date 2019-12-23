import React, { Component } from 'react'
import {
    Grid,
    Cell,
    List,
    ListItem,
    ListItemContent

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



class Contact extends Component {
    render() {
        return (
            
            <div className="contact-body">
               

                <Grid className="contact-grid">
                    
                    <Cell col={6}>
                        <h2>Aniket Patel</h2>
                        <img  
                            src = "https://media.licdn.com/dms/image/C4D03AQG8gZcahkdOLg/profile-displayphoto-shrink_200_200/0?e=1582156800&v=beta&t=YVTRCr0XHjYnf1yXpQCoE445QJC8EYGAgEYk9BWGsDI"
                            alt=" avatar"
                            style={{
                                height: "250px"
                            }}
                        />
                        <p style={{width: "75%", margin: "auto", paddingTop: "1em"}}>
                             Electrical Engineer who discovered a passion
                             for full stack software development. Diligent front - and back - end developer experienced in Javascript, React / Redux, React Native, Thunk, Ruby on Rails, HTML5, CSS, who wishes to pursue his passion
                             for developing stunning web applications and intuitive user experiences.
                        </p>
                    </Cell>
                    <Cell col={6}>
                         <h2>Contact Me</h2>
                         <hr/>
                         <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton', color: 'white'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        (732)-725-9077
                                    </ListItemContent>
                                </ListItem>


                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton', color: 'white'}}>
                                        <i className="fa fa-envelope-square" aria-hidden="true"/>
                                        Aniketupatel1@gmail.com
                                    </ListItemContent>
                                </ListItem>


                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton', color: 'white'}}>
                                        <i className="fa fa-slack" aria-hidden="true"/>
                                         Slack - Aniket Patel
                                    </ListItemContent>
                                </ListItem>
                                
                            </List>
                         </div>
                         
                    </Cell>
                 </Grid>
                  <Particles 
                    params={particleOpt}
                />
            </div>
        )
    }
}

export default Contact
import React, { Component } from 'react'
import {
    Grid,
    Cell,
    List,
    ListItem,
    ListItemContent

} from 'react-mdl'



class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Aniket Patel</h2>
                        <img  
                            src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png" 
                            alt=" avatar"
                            style={{
                                height: "250px"
                            }}
                        />
                        <p style={{width: "75%", margin: "auto", paddingTop: "1em"}}>
                             Electrical Engineer who discovered a passion
                             for full stack software development.Diligent front - and back - end developer experienced in Javascript, React / Redux, React Native, Thunk, Ruby on Rails, HTML5, CSS, who wishes to pursue his passion
                             for developing stunning web applications and intuitive user experiences.
                        </p>
                    </Cell>
                    <Cell col={6}>
                         <h2>Contact Me</h2>
                         <hr/>
                         <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        (732)-725-9077
                                    </ListItemContent>
                                </ListItem>


                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-envelope-square" aria-hidden="true"/>
                                        Aniketupatel1@gmail.com
                                    </ListItemContent>
                                </ListItem>


                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-slack" aria-hidden="true"/>
                                         Slack - Aniket Patel
                                    </ListItemContent>
                                </ListItem>
                                
                            </List>
                         </div>
                         
                    </Cell>
                 </Grid>
            </div>
        )
    }
}

export default Contact
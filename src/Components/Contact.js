import React, { Component } from 'react'
import {
    Grid,
    Cell,
    List,
    ListItem,
    ListItemContent

} from 'react-mdl'

import profileImg from '../../src/ProfileImg.png'






class Contact extends Component {
    render() {
        return (
            
            <div className="contact-body">
               

                <Grid className="contact-grid">
                    
                    <Cell col={6}>
                        <h2>Aniket Patel</h2>
                        <img  
                            src = {profileImg}
                            alt=" avatar"
                            style={{
                                height: "250px",
                                borderRadius: "20px"
                            }}
                        />
                        <p style={{width: "75%", margin: "auto", paddingTop: "1em"}}>
                             Software engineer with a background in electrical engineering. Experience in data analytics, supply chain analytics and coding architecture. Developer of stunning web applications and intuitive user experiences.
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
               
            </div>
        )
    }
}

export default Contact
import React, { Component } from 'react'
import {
    Tabs,
    Tab,
    Grid,
    Cell,
    Card,
    CardTitle,
    CardActions,
    CardText,
    Button,
    CardMenu,
    IconButton
} from 'react-mdl'






class Projects extends Component {

     state = {
        activeTab: 0,

     }


     toggleCategories() {
         if (this.state.activeTab === 0) { 
             return (
                 <div className="projects-grid">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        < CardTitle style = {
                            {
                                color: '#fff',
                                height: '176px',
                                background: 'url(https://miro.medium.com/max/3200/1*PHUyljg7hpvQizZWeHLMjw.png) center / cover'
                            }
                        } >
                            NutriPal 5.0
                        </CardTitle>
                        <CardText style={{fontSize: '20'}}>
                        React Native app to view, track, create, delete, & edit workouts to improve health & fitness goals
                        </CardText>
                        <CardActions border>
                        <Button colored href="https://github.com/aniket1012/Nutripal5.0-frontend">GitHub</Button>
                        <Button colored href="https://vimeo.com/361113781">Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        < CardTitle style = {
                            {
                                color: '#fff',
                                height: '176px',
                                background: 'url(https://miro.medium.com/max/3200/1*PHUyljg7hpvQizZWeHLMjw.png) center / cover'
                            }
                        } >
                            Help Me Vote 
                        </CardTitle>
                        <CardText style={{fontSize: '20'}}>
                        React Native app that allows users to see which presidential candidates they most align with based on questionaire. Contributed to Front End Design 
                        </CardText>
                        <CardActions border>
                        <Button colored href="https://github.com/harmeetdhingra/help-me-vote-app">GitHub</Button>
                        {/* <Button colored href="">Demo</Button> */}
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                 </div>
                 
             )
         }
         else if (this.state.activeTab === 1) {
             return (
                 <div className="projects-grid">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        < CardTitle style = {
                            {
                                color: '#fff',
                                height: '176px',
                                background: 'url(https://miro.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'
                            }
                        } >
                            NutriPal
                        </CardTitle>
                        <CardText>
                        React app to view, track, create, delete, & edit Meals to improve health & wellness goals
                        </CardText>
                        <CardActions border>
                        <Button colored href="https://github.com/aniket1012/Nutripal5.0-frontend">GitHub</Button>
                        <Button colored href="https://vimeo.com/361113781">Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        < CardTitle style = {
                            {
                                color: '#fff',
                                height: '176px',
                                background: 'url(https://miro.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'
                            }
                        } >
                            Venue
                        </CardTitle>
                        <CardText>
                        React app to view, track, events at a given Venue.
                        </CardText>
                        <CardActions border>
                        <Button colored href="https://github.com/aniket1012/venue">GitHub</Button>
                        {/* <Button colored href="https://">Demo</Button> */}
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                 </div>
             )
         }
         else if (this.state.activeTab === 2) {
             return (
                 <div className="projects-grid">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        < CardTitle style = {
                            {
                                color: '#fff',
                                height: '176px',
                                background: 'url(https://cdnp0.stackassets.com/0ed03323472fb7c5307f0e2e27df0d6a4def615b/store/00475518e7fc176eebd75bd02d948be3bd319c3765fd12f0aa54c00b2710/sale_19736_primary_image_wide.jpg) center / cover'
                            }
                        } >
                            JS Trivia
                        </CardTitle>
                        <CardText>
                        Vanilla JavaScript Jepordy Clone
                        </CardText>
                        <CardActions border>
                        <Button colored href="https://github.com/aniket1012/Module-3-Project-">GitHub</Button>
                        {/* <Button colored href="https://">Demo</Button> */}
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        < CardTitle style = {
                            {
                                color: '#fff',
                                height: '176px',
                                background: 'url(https://cdnp0.stackassets.com/0ed03323472fb7c5307f0e2e27df0d6a4def615b/store/00475518e7fc176eebd75bd02d948be3bd319c3765fd12f0aa54c00b2710/sale_19736_primary_image_wide.jpg) center / cover'
                            }
                        } >
                            Pig Game
                        </CardTitle>
                        <CardText>
                        Vanilla JavaScript Single Page Pig Game
                        </CardText>
                        <CardActions border>
                        <Button colored href="https://github.com/aniket1012/Pig-Game/tree/master">GitHub</Button>
                        {/* <Button colored href="https://">Demo</Button> */}
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                 </div>
             )
         }
         else if (this.state.activeTab === 3) {
             return (
                 <div className="projects-grid">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        < CardTitle style = {
                            {
                                color: '#fff',
                                height: '176px',
                                background: 'url(https://miro.medium.com/max/3840/1*6h1kck2QmGaC89ERN_W3UA.jpeg) center / cover'
                            }
                        } >
                            HappyTrails
                        </CardTitle>
                        <CardText>
                        Ruby on Rails web app to explore and review hiking trails in the greater New York City area
                        </CardText>
                        <CardActions border>
                        <Button colored href="https://github.com/smitham50/rails-project-mode-nyc-web-051319">GitHub</Button>
                        <Button colored href="https://vimeo.com/361117725">Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                 </div>
             )
         }
        //  else if (this.state.activeTab === 4) {
        //      return (
        //          <div className="projects-grid">
        //             <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        //                 < CardTitle style = {
        //                     {
        //                         color: '#fff',
        //                         height: '176px',
        //                         background: 'url(https://wallpaperstock.net/wallpapers/thumbs1/42830wide.jpg) center / cover'
        //                     }
        //                 } >
        //                     Ripe Eggplant
        //                 </CardTitle>
        //                 <CardText>
        //                 CLI Movie Review Application 
        //                 </CardText>
        //                 <CardActions border>
        //                 <Button colored href="https://github.com/aniket1012/Nutripal5.0-frontend">GitHub</Button>
        //                 <Button colored href="https://vimeo.com/361113781">Demo</Button>
        //                 </CardActions>
        //                 <CardMenu style={{color: '#fff'}}>
        //                     <IconButton name="share"/>
        //                 </CardMenu>
        //             </Card>
        //          </div>
        //      )
        //  }
     }


    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                    <Tab style={{color: 'white'}}>React Native</Tab>
                    <Tab style={{color: 'white'}}>React JS</Tab>
                    <Tab style={{color: 'white'}}>JavaScript</Tab>
                    <Tab style={{color: 'white'}}>Ruby/Rails</Tab>
                </Tabs>
                <Grid>
                    <Cell col={12}>
                            <div className="content">
                                {this.toggleCategories()}
                            </div>
                    </Cell>
                </Grid>
            
                    
            </div>
        )
    }
}

export default Projects
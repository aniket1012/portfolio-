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
                        <CardText>
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
                                background: 'url(https://miro.medium.com/max/3200/1*PHUyljg7hpvQizZWeHLMjw.png) center / cover'
                            }
                        } >
                            NutriPal
                        </CardTitle>
                        <CardText>
                        React Native app to view, track, create, delete, & edit Meals to improve health & wellness goals
                        </CardText>
                        <CardActions border>
                        <Button colored href="https://github.com/aniket1012/Nutripal5.0-frontend">GitHub</Button>
                        <Button colored href="https://vimeo.com/361113781">Demo</Button>
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
                                background: 'url(https://miro.medium.com/max/3200/1*PHUyljg7hpvQizZWeHLMjw.png) center / cover'
                            }
                        } >
                            JS
                        </CardTitle>
                        <CardText>
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
                                background: 'url(https://miro.medium.com/max/3200/1*PHUyljg7hpvQizZWeHLMjw.png) center / cover'
                            }
                        } >
                            NutriPal 5.0 Back-End
                        </CardTitle>
                        <CardText>
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
                 </div>
             )
         }
         else if (this.state.activeTab === 4) {
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
                            Ripe Eggplant
                        </CardTitle>
                        <CardText>
                        CLI Movie Review Application 
                        </CardText>
                        <CardActions border>
                        <Button colored href="https://github.com/aniket1012/Nutripal5.0-frontend">GitHub</Button>
                        <Button colored href="https://vimeo.com/361113781">Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                 </div>
             )
         }
     }


    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                    <Tab>React Native</Tab>
                    <Tab>React JS</Tab>
                    <Tab>JavaScript</Tab>
                    <Tab>Rails</Tab>
                    <Tab>Ruby</Tab>
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
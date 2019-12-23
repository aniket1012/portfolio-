import React, { Component } from 'react'
import {Grid, Cell} from 'react-mdl'


class Experience extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <p>{this.props.startYear} - {this.props.endYear}</p>
                    </Cell>
                    <Cell col={8}>
                        <h3 styl={{marginTop: '0px'}}>{this.props.jobName}</h3>
                        <h4 styl={{marginTop: '0px'}}>{this.props.jobTitle}</h4>
                        <p>{this.props.jobDescription1}</p>
                        <p>{this.props.jobDescription2}</p>
                        <p>{this.props.jobDescription3}</p>
                        <p>{this.props.jobDescription4}</p>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Experience
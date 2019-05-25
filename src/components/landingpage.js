import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src="https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/4898/s300/codeworks-logo.png"
                            alt="avatar"
                            className="avatar-image"
                        />

                        <div className="banner-text">
                            <h1>Full Stack Software Developer</h1>

                            <hr/>
                            <p>HTML/CSS | Ruby | Javascript | Java | Spring | React | MongoDb</p>

                            <div className="social-links">

                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/grant-rutherford-4a889a17b/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin"></i>
                                </a>

                                {/* GitHub */}
                                <a href="https://github.com/BeerBatteredCode" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square"></i>
                                </a>

                                {/* YouTube */}
                                <a href="https://youtube.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-youtube-square"></i>
                                </a>

                                {/* Twitter */}
                                <a href="https://twitter.com/GrantRutherfor4" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-twitter-square"></i>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;


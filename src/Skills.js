import React, { Component } from 'react';

class Skills extends Component{
    render(){
        return(
            <div className="def">
                <div>
                    <div className="about-desc">
                        <span className="about-head">My Specialty</span>
                        <h2 className="about-heading">My Skills</h2>
                    </div>
                </div>
                
                <div className="about-desc">
                    <p className="boutbout">
                        I go by my favorite name <span className="about-heading">"JEQUEX"</span>. 
                        I love gathering skills and learning
                         new things as the days go by. Any chance/Opportunity that i have to learn 
                         something new and add to my arsenal, i will without a second thought take 
                         such a chance without looking back.
                    </p>
                </div>
                <div className="skillz">
                    <div className="skillz2">
                        <div className="skill-set">
                            <h3>Photoshop & Corel Draw</h3>
                            <div className="progress">
                                <div className="progress-bar color-1" role="progressbar" aria-valuenow="75"
                                aria-valuemin="0" aria-valuemax="100" style={{  width:"75%"}}>
                                <span>75%</span>
                                </div>
                            </div>
                        </div>
                        <div className="skill-set">
                            <h3>js, jQuery, react & react-native</h3>
                            <div className="progress">
                                <div className="progress-bar color-2" role="progressbar" aria-valuenow="90"
                                aria-valuemin="0" aria-valuemax="100" style={{width:"90%"}}>
                                <span>90%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="skillz2">
                        <div className="skill-set">
                            <h3>HTML5 & CSS3</h3>
                            <div className="progress">
                                <div className="progress-bar color-3" role="progressbar" aria-valuenow="85"
                                aria-valuemin="0" aria-valuemax="100" style={{width:"85%"}}>
                                <span>85%</span>
                                </div>
                            </div>
                        </div>
                        <div className="skill-set">
                            <h3>Python & PHP</h3>
                            <div className="progress">
                                <div className="progress-bar color-4" role="progressbar" aria-valuenow="90"
                                aria-valuemin="0" aria-valuemax="100" style={{width:"90%"}}>
                                <span>90%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="skillz2">
                        <div className="skill-set">
                            <h3>WordPress & Blogger</h3>
                            <div className="progress">
                                <div className="progress-bar color-5" role="progressbar" aria-valuenow="70"
                                aria-valuemin="0" aria-valuemax="100" style={{width:"70%"}}>
                                <span>70%</span>
                                </div>
                            </div>
                        </div>
                        <div className="skill-set">
                            <h3>SEO</h3>
                            <div className="progress">
                                <div className="progress-bar color-6" role="progressbar" aria-valuenow="80"
                                aria-valuemin="0" aria-valuemax="100" style={{width:"80%"}}>
                                <span>80%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="skillz2">
                        <div className="skill-set">
                            <h3>Electrical/Electronics Designs</h3>
                            <div className="progress">
                                <div className="progress-bar color-7" role="progressbar" aria-valuenow="95"
                                aria-valuemin="0" aria-valuemax="100" style={{width:"95%"}}>
                                <span>95%</span>
                                </div>
                            </div>
                        </div>
                        <div className="skill-set">
                            <h3>Computer Networking</h3>
                            <div className="progress">
                                <div className="progress-bar color-8" role="progressbar" aria-valuenow="80"
                                aria-valuemin="0" aria-valuemax="100" style={{width:"80%"}}>
                                <span>80%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills;
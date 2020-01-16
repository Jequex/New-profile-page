import React, { Component } from 'react';

  class Services extends Component{
    render(){
        return(
            <div className="def">
                <div>
                    <div>
                        <span  className="about-head">What I do?</span>
                        <h2  className="about-heading">Here are some of my expertise</h2>
                    </div>
                </div>
                <div  className="services">
                    <div  className="row">
                        <div  className="services21 color-1">
                            <span  className="icon">
                                <i  className="icon-bulb"></i>
                            </span>
                            <div  className="desc">
                                <h3>Innovative Ideas</h3>
                                <p>It keeps me running like toxins in my blood, pushing me even when I dont feel like</p>
                            </div>
                        </div>
                        <div  className="services22 color-2">
                            <span className="icon">
                                <i className="lnr lnr-laptop-phone"></i>
                            </span>
                            <div  className="desc">
                                <h3>Software</h3>
                                <p>&lt;eat /&gt;<br/>&lt;code /&gt;<br/>&lt;sleep /&gt;<br/>&lt;repeat /&gt;</p>
                            </div>
                        </div>
                        <div  className="services23 color-3">
                            <span  className="icon">
                                <i  className="icon-phone3"></i>
                            </span>
                            <div  className="desc">
                                <h3>Mobile Apps</h3>
                                <p>Android is what wakes me up in the morning and ios is coffee to my heart</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div  className="services24 color-4">
                            <span  className="icon">
                                <i  className="lnr lnr-picture"></i>
                            </span>
                            <div  className="desc">
                                <h3>Graphic Design</h3>
                                <p>If you can imagine it, I can draw and design it</p>
                            </div>
                        </div>
                        <div  className="services25 color-5">
                            <span  className="icon">
                                <i  className="icon-globe2"></i>
                            </span>
                            <div  className="desc">
                                <h3>Web</h3>
                                <p>A place that i can play and express myself without limitations</p>
                            </div>
                        </div>
                        <div  className="services26 color-6">
                            <span  className="icon">
                                <i  className="icon-plug"></i>
                            </span>
                            <div  className="desc">
                                <h3>Electronics</h3>
                                <p>Circuit designs and automations is one of my favorite things</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Services;
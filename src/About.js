import React from 'react';

 const About = ({click=f=>f})=> {
    return(
        <div className="def">
            <div>
                <div>
                    <div className="about-desc">
                        <span className="about-head">About Us</span>
                        <h2 className="about-heading">Who Am I?</h2>
                        <p className="boutbout">
                            <strong>Hi, I'm Onyejekwe Chukwunonso John. </strong> 
                            I am a software and web developer with knowledge and experience in NodeJs,
                            ReactJs, React-Native, PHP, Python, CSS3 and HTML5.
                            I also have knowledge and experience in graphic design as well as 
                            hardware services.
                        </p>
                        <p>
                            I love tech. I basically live online. Tech is my life.
                            Working with me is like working with the coolest, funniest guy, you
                            may ever meet.
                            <span  className="icon2">
                                <i  className="icon-heart"></i>
                                <i  className="lnr lnr-smile"></i>
                                <i  className="lnr lnr-thumbs-up"></i>
                            </span>
                        </p>
                    </div>
                </div>
                <div className="lets-see">
                    <div  className="services1 color-1">
                        <span  className="icon2"><i  className="lnr lnr-picture"></i></span>
                        <h3 className="about-head">Graphic Design</h3>
                    </div>
                    <div>
                        <div  className="services1 color-2">
                            <span  className="icon2"><i  className="icon-globe2"></i></span>
                            <h3 className="about-head">Web Design</h3>
                        </div>
                    </div>
                    <div>
                        <div  className="services1 color-3">
                            <span  className="icon2"><i  className="lnr lnr-laptop-phone"></i></span>
                            <h3 className="about-head">Software</h3>
                        </div>
                    </div>
                    <div>
                        <div  className="services1 color-4">
                            <span  className="icon2"><i  className="icon-phone3"></i></span>
                            <h3 className="about-head">Mobile Apps</h3>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="about-last">
                        <h2>I am happy to let you know <br />that <span>30+</span> projects have 
                        been completed<br /> sucessfully!</h2>
                        <button onClick={click}>Hire me</button>
                    </div>
                </div>
            </div>
        </div>

    )
    
}

export default About;
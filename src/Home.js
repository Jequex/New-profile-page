import React, { Component } from 'react';


class Home extends Component{

    render(){
        return(
            <div className="flex">
                <div className="name-box">
                    <div className="name">Onyejekwe Chukwunonso John</div>
                    <div className="job">Senior Software Developer</div>
                    <div><button><a className="link" href="localhost:3000/CV.pdf" rel="noopener noreferrer" target="_blank">download cv</a></button></div>
                </div>             
                <div id="author-img1"></div>
            </div>
        )
    }
}


export default Home;
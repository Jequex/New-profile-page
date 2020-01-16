import React, { Component } from 'react';


class Home extends Component{
    render(){
        return(
            <div className="flex">
                <div className="name-box">
                    <div className="name">Onyejekwe Chukwunonso John</div>
                    <div className="job">Software Developer</div>
                    <div><button><a href="./cv.pdf">download cv</a></button></div>
                </div>             
                <div id="author-img1"></div>
            </div>
        )
    }
}

export default Home;
import React, { Component } from 'react';

class Home extends Component{
    render(){
        return(
            <div className="flex">
                <div className="name-box">
                    <div className="name">Onyejekwe Chukwunonso John</div>
                    <div className="job">Software Developer</div>
                    <div><button>download cv</button></div>
                </div>              
                <div className="author-img1"></div>
            </div>
        )
    }
}

export default Home;
import React, { Component } from 'react';

// let myArray = ['url(./images/Image1.png)','url(./images/Image2.png)','url(./images/Image3.png)'];
// let doc = document.getElementById("author-img1").style.backgroungImage;
// let doo = () => {doc = myArray[Math.floor(Math.random() * myArray.length)]}
// setInterval(doo(), 1000);

class Home extends Component{
    render(){
        return(
            <div className="flex">
                <div className="name-box">
                    <div className="name">Onyejekwe Chukwunonso John</div>
                    <div className="job">Software Developer</div>
                    <div><button>download cv</button></div>
                </div>             
                <div id="author-img1"></div>
            </div>
        )
    }
}

export default Home;
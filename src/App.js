import React from 'react';
import './App.css';
import './font-awesome.min.css';
import './style.css';
import './normalize.min.css';
import './icomoon.css';
import Home from './Home';
import About from './About';
import Services from './Services';
import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';
import Contact from './Contact';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {toload: <Home />}
    this.home = this.home.bind(this)
    this.about = this.about.bind(this)
    this.services = this.services.bind(this)
    this.skills = this.skills.bind(this)
    this.education = this.education.bind(this)
    this.experience = this.experience.bind(this)
    this.contact = this.contact.bind(this)
    
  }

  home(){
    let toload = <Home />;
    this.setState({toload})
  }

  about(){
    let toload = <About click={()=>this.contact()}/>;
    this.setState({toload})
  }

  services(){
    let toload = <Services />;
    this.setState({toload})
  }

  skills(){
    let toload = <Skills />;
    this.setState({toload})
  }

  education(){
    let toload = <Education />;
    this.setState({toload})
  }

  experience(){
    let toload = <Experience />;
    this.setState({toload})
  }

  contact(){
    let toload = <Contact />;
    this.setState({toload})
  }

  

  render() {
    return (
      <div className="App">
        <div className="leftie">
          <div className="author-img"></div>
          <div className="Name"><strong>Onyejekwe Chukwunonso John</strong></div>
          <div className="Title">UI/UX, React and React-Native, PHP, Python and Node.Js developer</div>
          <div onClick={this.home} className="links"><h4 className="link"><span><i  className="icon-home"></i></span><strong>   Home</strong></h4></div>
          <div onClick={this.about} className="links"><h5 className="link"> About</h5></div>
          <div onClick={this.services} className="links"><h5 className="link">Services</h5></div>
          <div onClick={this.skills} className="links"><h5 className="link">Skills</h5></div>
          <div onClick={this.education} className="links"><h5 className="link">Education</h5></div>
          <div onClick={this.experience} className="links"><h5 className="link">Experience</h5></div>
          <div onClick={this.contact} className="links"><h5 className="link">Contact</h5></div>
          <div className="foot">
            <div className="footer">&copy; Copyright</div>
            <div className="footer"> &copy; {(new Date().getFullYear())}; </div>
            <div className="footer">All rights reserved</div>
              <a className="a" href="https://www.facebook.com" rel="noopener noreferrer" target="_blank"><i className="icon-facebook2 icons"></i></a>
              <a className="a" href="https://www.twitter.com" rel="noopener noreferrer" target="_blank"><i className="icon-twitter2 icons"></i></a>
              <a className="a" href="https://www.instagram.com" rel="noopener noreferrer" target="_blank"><i className="icon-instagram icons"></i></a>
              <a className="a" href="https://www.linkedin.com" rel="noopener noreferrer" target="_blank"><i className="icon-linkedin2 icons"></i></a>
          </div>
        </div>
        <div className="rightie">
          {this.state.toload}
        </div>
      </div>
    )

  }
  }


export default App;

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
import Work from './Work';
import Blog from './Blog';
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
    this.experience = this.education.bind(this)
    this.work = this.work.bind(this)
    this.blog = this.blog.bind(this)
    this.contact = this.contact.bind(this)
    
  }

  home(){
    let toload = <Home />;
    this.setState({toload})
  }

  about(){
    let toload = <About />;
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

  work(){
    let toload = <Work />;
    this.setState({toload})
  }

  blog(){
    let toload = <Blog />;
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
          <div onClick={this.home} className="links"><span><i  className="icon-home"></i></span><a href="#" className="link"><strong>   Home</strong></a></div>
          <div onClick={this.about} className="links"><a href="#" className="link">   About</a></div>
          <div onClick={this.services} className="links"><a href="#" className="link">Services</a></div>
          <div onClick={this.skills} className="links"><a href="#" className="link">Skills</a></div>
          <div onClick={this.education} className="links"><a href="#" className="link">Education</a></div>
          <div onClick={this.experience} className="links"><a href="#" className="link">Experience</a></div>
          <div onClick={this.work} className="links"><a href="#" className="link">Work</a></div>
          <div onClick={this.blog} className="links"><a href="#" className="link">Blog</a></div>
          <div onClick={this.contact} className="links"><a href="#" className="link">Contact</a></div>
          <div className="foot">
            <div className="footer">&copy; Copyright</div>
            <div className="footer"> &copy; {(new Date().getFullYear())}; </div>
            <div className="footer">All rights reserved</div>
              <i className="icon-facebook2 icons"></i>
              <i className="icon-twitter2 icons"></i>
              <i className="icon-instagram icons"></i>
              <i className="icon-linkedin2 icons"></i>
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

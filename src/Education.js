import React, {Component} from 'react';

class Education extends Component{

	toggler(){
		var acc = document.getElementsByClassName("accordion");
		var i;
		
		for(i=0; i<acc.length; i++){
			acc[i].addEventListener("click", function(){
				this.classList.toggle("active");
				var panel = this.nextElementSibling;
				if(panel.style.display === "block"){
					panel.style.display = "none"
				}else{
					panel.style.display = "block"
				}
			})
		}
		
	}

	componentDidMount(){
		this.toggler()
	}

	render(){		
		return(
			<div className="def">
				<div>
					<div className="about-desc" >
						<span className="about-head">Education</span>
						<h2 className="about-heading">Education</h2>
					</div>
				</div>

				<button className="accordion">Master Degree in Software Development (UI/UX)</button >
				<div className="panel-body">
					<p>Masters in Software Development at <strong>Decagon Institute, Lekki, Lagos State
						</strong>, from <strong>2020-2020</strong>.</p>
				</div>

				<button className="accordion">Diploma in graphics design</button >
				<div className="panel-body">
					<p>Use of Corel Draw and Photoshop at <strong>IT IS WELL GRAPHICS COMPANY, Onitsha,
						 Anambra State</strong>, from <strong>2017-2018</strong>.</p>
				</div>
				
				<button className="accordion">Diploma in Computer Networking</button >
				<div className="panel-body">
					<p>Cisco Certified Network Associate (small and medium enterprises) at <strong>
						AFRIHUB, Nnamdi Azikiwe University, Awka, Anambra State</strong>, 
						from <strong>2003-2003</strong>.</p>	
				</div>

				<button className="accordion">BSc in Elecronics And Computer Engineering</button >
				<div className="panel-body">
					<p>Bachelor of Engineering from Department of <strong>Electronics and Computer 
						Engineering, </strong>at <strong>Nnamdi Azikiwe University, Awka, Anambra State
							</strong>, from <strong>2010-2016</strong>.</p>	
				</div>

				<button className="accordion">High School or Secondary Education</button >
				<div className="panel-body">
					<p>West African Examinations Council<strong> from 2003-2009</strong>, 
					at<strong> Dennis Memorial Grammar School, Onitsha, Anambra State</strong>.</p>	
				</div>
			</div>
		)

	}
}

export default Education;
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

				<button className="accordion">Master Degree Graphic Design<span className="right"><i className="icon-plus"></i></span></button >
				<div className="panel-body">
					<div className="col-md-6">
						<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
					</div>
					<div className="col-md-6">
						<p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
					</div>
				</div>

				<button className="accordion">Bachelor Degree of Computer Networking<span className="right"><i className="icon-plus"></i></span></button >
				<div className="panel-body">
					<p>Far far away, behind the word <strong>mountains</strong>, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
						<ul>
							<li>Separated they live in Bookmarksgrove right</li>
							<li>Separated they live in Bookmarksgrove right</li>
						</ul>
				</div>
				
				<button className="accordion">Diploma in Information Technology<span className="right"><i className="icon-plus"></i></span></button >
				<div className="panel-body">
					<p>Far far away, behind the word <strong>mountains</strong>, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>	
				</div>

				<button className="accordion">BSc in Elecronics And Computer Engineering<span className="right"><i className="icon-plus"></i></span></button >
				<div className="panel-body">
					<p>Far far away, behind the word <strong>mountains</strong>, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>	
				</div>

				<button className="accordion">High School Secondary Education<span className="right"><i className="icon-plus"></i></span></button >
				<div className="panel-body">
					<p>Far far away, behind the word <strong>mountains</strong>, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>	
				</div>
			</div>
		)

	}
}

export default Education;
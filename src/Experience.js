import React, {Component} from 'react';

class Experience extends Component{
	render(){
		return(
			<div className="def">
				<div>
					<div className="about-desc" >
						<span className="about-head">Experience</span>
						<h2 className="about-heading">Work Experience</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<div className="timeline-centered">
							<article className="timeline-entry" >
							<div className="timeline-entry-inner">

								<div className="timeline-icon color-1">
									<i className="icon-pen2"></i>
								</div>

								<div className="timeline-label">
									<h2><a href="#">Full Stack Developer</a> <span>2017-2019</span></h2>
									<p>Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.</p>
								</div>
							</div>
							</article>


							<article className="timeline-entry" >
							<div className="timeline-entry-inner">
								<div className="timeline-icon color-2">
									<i className="icon-pen2"></i>
								</div>
								<div className="timeline-label">
								<h2><a href="#">Front End And Back End Developer at Jequex Inc</a> <span>2017-2019</span></h2>
									<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
								</div>
							</div>
							</article>

							<article className="timeline-entry" >
							<div className="timeline-entry-inner">
								<div className="timeline-icon color-3">
									<i className="icon-pen2"></i>
								</div>
								<div className="timeline-label">
								<h2><a href="#">System Analyst</a> <span>2018-2019</span></h2>
									<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
								</div>
							</div>
							</article>

							<article className="timeline-entry" data-animate-effect="fadeInTop">
							<div className="timeline-entry-inner">
								<div className="timeline-icon color-4">
									<i className="icon-pen2"></i>
								</div>
								<div className="timeline-label">
								<h2><a href="#">Creative Designer</a> <span>2017-2019</span></h2>
									<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
								</div>
							</div>
							</article>

							<article className="timeline-entry" >
							<div className="timeline-entry-inner">
								<div className="timeline-icon color-5">
									<i className="icon-pen2"></i>
								</div>
								<div className="timeline-label">
								<h2><a href="#">UI/UX Designer at Jequex inc</a> <span>2014-2019</span></h2>
									<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
								</div>
							</div>
							</article>

							<article className="timeline-entry begin" data-animate-effect="fadeInBottom">
							<div className="timeline-entry-inner">
								<div className="timeline-icon color-none">
								</div>
							</div>
							</article>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Experience;
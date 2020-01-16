import React, {Component} from 'react';

class Contact extends Component{
	render(){
		return(
			<div className="def">
				<div>
					<div className="about-desc" >
						<span className="about-head">Get in Touch</span>
						<h2 className="about-heading">Contact</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-md-5">
						<div className="feature feature-sm" >
							<div className="icon">
								<i className="icon-globe-outline"></i>
							</div>
							<div className="text">
								<p><a href="#">admin@jequex.com.ng</a></p>
							</div>
						</div>

						<div className="feature feature-sm" >
							<div className="icon">
								<i className="icon-map"></i>
							</div>
							<div className="text">
								<p>16 Allan Ekwerekwu street, inland town, 3-3, Onitsha</p>
							</div>
						</div>

						<div className="feature feature-sm" >
							<div className="icon">
								<i className="icon-phone"></i>
							</div>
							<div className="text">
								<p><a href="tel://">+234 814 167 6170</a></p>
							</div>
						</div>
					</div>
					<div className="col-md-7 col-md-push-1">
						<div className="row">
							<div className="col-md-10 col-md-offset-1 col-md-pull-1" >
								<form action="">
									<div className="form-group">
										<input type="text" className="form-control" placeholder="Name"></input>
									</div>
									<div className="form-group">
										<input type="text" className="form-control" placeholder="Email"></input>
									</div>
									<div className="form-group">
										<input type="text" className="form-control" placeholder="Subject"></input>
									</div>
									<div className="form-group">
										<textarea name="" id="message" cols="30" rows="7" className="form-control" placeholder="Message"></textarea>
									</div>
									<div className="form-group">
										<input type="submit" className="btn btn-primary btn-send-message" value="Send Message"></input>
									</div>
								</form>
							</div>
							
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Contact;
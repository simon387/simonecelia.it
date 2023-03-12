import background from "../../../../images/overlay-bg.jpg";
import {constants} from "../../../util/constants";
import {Link} from "react-router-dom";

export const Contact = () => {

	const mailto = "mailto:" + constants.email;
	const tel1to = "tel:" + constants.phone1;
	const tel2to = "tel:" + constants.phone2;

	return (
		<section id="contact" className="paralax-mf footer-paralax bg-image sect-mt4 route" style={{backgroundImage: `url(${background})`}}>
			<div className="overlay-mf"></div>
			<div className="container">
				<div className="row">
					<div className="col-sm-12">
						<div className="contact-mf">
							<div id="contact-box" className="box-shadow-full">
								<div className="row">
									<div className="col-md-6">
										<div className="title-box-2">
											<h2 className="title-left">Send Message</h2>
										</div>
										<div>
											<form action="be/controllers/message.php" method="post" className="php-email-form" autoComplete="off">
												<div className="row">
													<div className="col-md-12 mb-3">
														<div className="form-group">
															<input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required maxLength={256}/>
														</div>
													</div>
													<div className="col-md-12 mb-3">
														<div className="form-group">
															<input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required maxLength={256}/>
														</div>
													</div>
													<div className="col-md-12 mb-3">
														<div className="form-group">
															<input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required maxLength={256}/>
														</div>
													</div>
													<div className="col-md-12">
														<div className="form-group">
															<textarea className="form-control" name="message" id="message" rows={5} placeholder="Message" required maxLength={8192}/>
														</div>
													</div>
													<div className="col-md-12">
														<div className="form-group">
															{/*<input type="checkbox" name="accept" id="accept-checkbox" required>GDPR Agreement - I consent to having this website store my*/}
															{/*	submitted information so they can respond to my inquiry</input>*/}
														</div>
													</div>
													<div className="col-md-12 text-center my-3">
														<div className="loading">Loading</div>
														<div className="error-message"></div>
														<div className="sent-message">Your message has been sent. Thank you!</div>
													</div>
													<div className="col-md-12 text-center">
														<button type="submit" className="button button-a button-big button-rouded">Send Message</button>
													</div>
												</div>
											</form>
										</div>
									</div>
									<div className="col-md-6">
										<div className="title-box-2 pt-4 pt-md-0">
											<h2 className="title-left">Get in Touch</h2>
										</div>
										<div className="more-info">
											<p className="lead">Feel free to contact me!</p>
											<p className="lead"><b>Warning! Any malicious use of telephone numbers will be reported to the authorities and published <Link className="blue-a" target="_blank" to="/shame">here</Link>, in the shame list!</b></p>
											<ul className="list-ico">
												<li><span className="bi bi-geo-alt"></span> ITALY and SPAIN</li>
												<li><span className="bi bi-phone"></span> <a href={tel1to}>{constants.phone1}</a></li>
												<li><span className="bi bi-phone"></span> <a href={tel2to}>{constants.phone1}</a></li>
												<li><span className="bi bi-envelope"></span> <a target="_blank" href={mailto}>{constants.email}</a></li>
											</ul>
										</div>
										<div className="socials">
											<ul>
												<li><a target="_blank" href="https://stackoverflow.com/users/7534931/simone-celia"><span className="ico-circle"><i
													className="bi bi-stack"></i></span></a></li>
												<li><a target="_blank" href="https://www.facebook.com/simone.celia.98/"><span className="ico-circle"><i className="bi bi-facebook"></i></span></a>
												</li>
												<li><a target="_blank" href="https://www.instagram.com/_s1m0n387/"><span className="ico-circle"><i
													className="bi bi-instagram"></i></span></a></li>
												<li><a target="_blank" href="https://twitter.com/Simone_Celia"><span className="ico-circle"><i className="bi bi-twitter"></i></span></a>
												</li>
												<li><a target="_blank" href={constants.linkedin}><span className="ico-circle"><i className="bi bi-linkedin"></i></span></a></li>
												<li><a target="_blank" href="https://github.com/simon387/"><span className="ico-circle"><i className="bi bi-github"></i></span></a></li>
												<li><a target="_blank" href="https://www.tiktok.com/@simone.celia?lang=it-IT"><span className="ico-circle">
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-tiktok" viewBox="0 0 16 16">
												<path
													d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"/>
											</svg> </span>
												</a></li>
												<li><a target="_blank" href="https://t.me/simon387"><span className="ico-circle"><i className="bi bi-telegram"></i></span></a></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

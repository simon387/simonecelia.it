import {constants} from "../../../util/constants";

export const About = () => {

	const mailto = "mailto:" + constants.email;
	const tel1to = "tel:" + constants.phone1;
	const tel2to = "tel:" + constants.phone2;

	return (
		<section id="about" className="about-mf sect-pt4 route">
			<div className="container">
				<div className="row">
					<div className="col-sm-12">
						<div className="box-shadow-full">
							<div className="row">
								<div className="col-md-6">
									<div className="row">
										<div className="col-sm-6 col-md-5">
											<div className="about-img">
												<img loading="lazy" src={require("../../../../images/primo_piano.jpg")} className="img-fluid rounded b-shadow-a" alt="primo piano"/>
											</div>
										</div>
										<div className="col-sm-6 col-md-7">
											<div className="about-info">
												<p><span className="title-s">Name: </span> <span>Simone Celia</span></p>
												<p><span className="title-s">Profile: </span> <span>full stack developer</span></p>
												<p><span className="title-s">Email: </span> <span><a target="_blank" href={mailto}>{constants.email}</a></span></p>
												<p><span className="title-s">Phone: </span> <span><a href={tel1to}>{constants.phone1}</a></span></p>
												<p><span className="title-s">Phone: </span> <span><a href={tel2to}>{constants.phone2}</a></span></p>
											</div>
										</div>
									</div>
									<div className="skill-mf">
										<p className="title-s">Skill</p>
										<span>Problem Solving</span><span className="pull-right"> 95%</span>
										<div className="progress">
											<div className="progress-bar" role="progressbar" style={{width: "95%"}} aria-valuenow={95} aria-valuemin={0} aria-valuemax={100}></div>
										</div>
										<span>Java</span><span className="pull-right"> 90%</span>
										<div className="progress">
											<div className="progress-bar" role="progressbar" style={{width: "90%"}} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}></div>
										</div>
										<span>JAVASCRIPT</span><span className="pull-right"> 90%</span>
										<div className="progress">
											<div className="progress-bar" role="progressbar" style={{width: "90%"}} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}></div>
										</div>
										<span>PhP</span><span className="pull-right"> 80%</span>
										<div className="progress">
											<div className="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}></div>
										</div>
										<span>Python</span><span className="pull-right"> 80%</span>
										<div className="progress">
											<div className="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}></div>
										</div>
									</div>
								</div>
								<div className="col-md-6">
									<div className="about-me pt-4 pt-md-0">
										<div className="title-box-2">
											<h2 className="title-left">About me</h2>
										</div>
										<p className="lead">Enthusiast Software Engineer, knowledge on various technology solutions, from COBOL to JavaEE, experience on Banking,
											Insurance, Financing, Energy, Automotive, Food Sector projects and public websites. Design, development, testing and bug fixing from
											backend to frontend, loving the Open Source Philosophy (I love GNU/LINUX) and the Computer Science Education.</p>
										<p className="lead">Personal Open Source Projects: <strong><a target="_blank"
																																									href="https://github.com/simon387">github.com/simone</a></strong></p>
										<p className="lead">Full LinkedIn Profile: <strong><a target="_blank" href={constants.linkedin}>linkedin.com/simone</a></strong></p>
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
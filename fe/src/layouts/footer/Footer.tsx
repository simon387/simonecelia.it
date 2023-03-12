import {constants} from "../util/constants";

export const Footer = () => {

	return (
		<>
			<footer>
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<div className="copyright-box">
								<p className="copyright">&copy; Copyright <strong>{constants.title}</strong> 2023. All Rights Reserved.
									<a className="footer-link" target="_blank" href="changelog.txt">version</a>
								</p>
								<div className="credits">Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a></div>
							</div>
						</div>
					</div>
				</div>
			</footer>
			{/*{TODO}*/}
			<div id="preloader_"></div>
			<a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
		</>
	);
}
import React, {useEffect, useState} from "react";
import {constants} from "../util/constants";
import packageJson from "../../../package.json";

export const Footer = () => {

	const [isLoaded, setIsLoaded] = useState(false);
	const [isPageLoaded, setIsPageLoaded] = useState(false); //this helps
	const year = new Date().getFullYear();

	useEffect(() => {
		setIsLoaded(true);
	}, []);

	useEffect(() => {
		if (isLoaded) {
			setIsPageLoaded(true);
		}
	}, [isLoaded]);

	return (
		<>
			<footer>
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<div className="copyright-box">
								<p className="copyright">&copy; Copyright <strong>{constants.title}</strong> {year}. All Rights Reserved.
									<a className="footer-link" target="_blank" rel="noreferrer" href="changelog.txt"> Version {packageJson.version}</a>
								</p>
								<div className="credits">Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a></div>
							</div>
						</div>
					</div>
				</div>
			</footer>
			{!isPageLoaded &&
				<>
					<div id="preloader"></div>
					<a href="/" rel="noreferrer" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
				</>
			}
		</>
	);
}
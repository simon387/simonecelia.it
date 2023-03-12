import {Link} from "react-router-dom";

export const Navbar = () => {

	return (
		<header id="header" className="fixed-top">
			<div className="container d-flex align-items-center justify-content-between">
				<h1 className="logo"><Link to="/">simonecelia.it</Link></h1>
				<nav id="navbar" className="navbar unselectable">
					<ul>
						<li><a className="nav-link scrollto active" href="#hero">Home</a></li>
						<li><a className="nav-link scrollto" href="#about">About</a></li>
						<li><a className="nav-link scrollto" href="#services">Services</a></li>
						<li><a className="nav-link scrollto" href="#work">Work</a></li>
						<li className="dropdown"><Link to="/"><span>Tools</span> <i className="bi bi-chevron-down"></i></Link>
							<ul>
								<li><a target="_blank" rel="noreferrer" href="/poster">Poster</a></li>
								<li><a target="_blank" rel="noreferrer" href="/components/spring_cron_generator.html">Spring Cron Generator</a></li>
								<li><a target="_blank" rel="noreferrer" href="https://regex101.com">Regex101</a></li>
								<li><a target="_blank" rel="noreferrer" href="https://www.base64decode.org">Base64 Decode</a></li>
								<li><a target="_blank" rel="noreferrer" href="https://jsonlint.com">Json Lint</a></li>
								<li><a target="_blank" rel="noreferrer" href="https://curlconverter.com">Curl Converter</a></li>
								<li><a target="_blank" rel="noreferrer" href="https://github.com/simon387/notes">Dev Notes</a></li>
								<li><a target="_blank" rel="noreferrer" href="https://github.com/users/simon387/projects/1">Personal TODO</a></li>
								<li><a target="_blank" rel="noreferrer" href="https://macaddress.io">Macaddress.io</a></li>
								<li><a target="_blank" rel="noreferrer" href="/adminer.php">Adminer</a></li>
							</ul>
						</li>
						<li><a className="nav-link scrollto" href="#contact">Contact</a></li>
					</ul>
					<i className="bi bi-list mobile-nav-toggle"></i>
				</nav>
			</div>
		</header>
	);
}

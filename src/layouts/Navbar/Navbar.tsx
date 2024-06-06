import {Link} from "react-router-dom";

export const Navbar = () => {

	return (
		<header id="header" className="fixed-top">
			<div className="container d-flex align-items-center justify-content-between">
				<h1 className="logo"><a href="#hero">simonecelia.it</a></h1>
				<nav id="navbar" className="navbar unselectable">
					<ul>
						<li><a className="nav-link scrollto active" href="#hero">Home</a></li>
						<li><a className="nav-link scrollto" href="#about">About</a></li>
						<li><a className="nav-link scrollto" href="#services">Services</a></li>
						<li><a className="nav-link scrollto" href="#work">Work</a></li>
						<li className="dropdown"><Link to="/"><span>Tools</span> <i className="bi bi-chevron-down"></i></Link>
							<ul>
								<li><a target="_blank" rel="noreferrer" href="poster/index.php">Poster</a></li>
								<li><a target="_blank" rel="noreferrer" href="https://www.digitalocean.com/community/tools/glob?comments=true&glob=%2A%2A%2F.git%2A%2F%2A%2A&matches=false&tests=test%2Fsam&tests=.git%2F%0D&tests=.github%2F%0D&tests=.git%2Ftest%0D&tests=.gitattributes%0D&tests=.gitignore%0D&tests=.git%2Fconfig%0D&tests=.git%2Ftest%2Ftest&tests=.github%2Fworkflows%2Fmain.yml&tests=node_modules%2Ffolder%2F%0D&tests=node_modules%2Fotherfolder%2F%0D&tests=subfolder%2Fnode_modules%2F">Glob Tester</a></li>
								<li><a target="_blank" rel="noreferrer" href="spring_cron_generator.html">Spring Cron Generator</a></li>
								<li><a target="_blank" rel="noreferrer" href="https://regex101.com">Regex101</a></li>
								<li><a target="_blank" rel="noreferrer" href="https://www.base64decode.org">Base64 Decode</a></li>
								<li><a target="_blank" rel="noreferrer" href="https://jsonlint.com">Json Lint</a></li>
								<li><a target="_blank" rel="noreferrer" href="https://curlconverter.com">Curl Converter</a></li>
								<li><a target="_blank" rel="noreferrer" href="https://github.com/simon387/notes">Dev Notes</a></li>
								<li><a target="_blank" rel="noreferrer" href="https://github.com/users/simon387/projects/5">Personal TODO</a></li>
								<li><a target="_blank" rel="noreferrer" href="https://macaddress.io">Macaddress.io</a></li>
								<li><a target="_blank" rel="noreferrer" href="adminer.php">Adminer</a></li>
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

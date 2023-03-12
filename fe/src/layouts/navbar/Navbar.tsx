export const Navbar = () => {

	return (
		<header id="header" className="fixed-top">
			<div className="container d-flex align-items-center justify-content-between">
				<h1 className="logo"><a href="#">simonecelia.it</a></h1>
				<nav id="navbar" className="navbar unselectable">
					<ul>
						<li><a className="nav-link scrollto active" href="#hero">Home</a></li>
						<li><a className="nav-link scrollto" href="#about">About</a></li>
						<li><a className="nav-link scrollto" href="#services">Services</a></li>
						<li><a className="nav-link scrollto" href="#work">Work</a></li>
						<li className="dropdown"><a href="#"><span>Tools</span> <i className="bi bi-chevron-down"></i></a>
							<ul>
								<li><a target="_blank" href="/poster">Poster</a></li>
								<li><a target="_blank" href="/components/spring_cron_generator.html">Spring Cron Generator</a></li>
								<li><a target="_blank" href="https://regex101.com">Regex101</a></li>
								<li><a target="_blank" href="https://www.base64decode.org">Base64 Decode</a></li>
								<li><a target="_blank" href="https://jsonlint.com">Json Lint</a></li>
								<li><a target="_blank" href="https://curlconverter.com">Curl Converter</a></li>
								<li><a target="_blank" href="https://github.com/simon387/notes">Dev Notes</a></li>
								<li><a target="_blank" href="https://github.com/users/simon387/projects/1">Personal TODO</a></li>
								<li><a target="_blank" href="https://macaddress.io">Macaddress.io</a></li>
								<li><a target="_blank" href="/adminer.php">Adminer</a></li>
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

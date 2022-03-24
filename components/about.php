<?php

echo(minify_html('<section id="about" class="about-mf sect-pt4 route">
	<div class="container">
		<div class="row">
			<div class="col-sm-12">
				<div class="box-shadow-full">
					<div class="row">
						<div class="col-md-6">
							<div class="row">
								<div class="col-sm-6 col-md-5">
									<div class="about-img">
										<img loading="lazy" src="assets/img/primo_piano.jpg" class="img-fluid rounded b-shadow-a" alt="primo piano">
									</div>
								</div>
								<div class="col-sm-6 col-md-7">
									<div class="about-info">
										<p><span class="title-s">Name: </span> <span>Simone Celia</span></p>
										<p><span class="title-s">Profile: </span> <span>full stack developer</span></p>
										<p><span class="title-s">Email: </span> <span><a target="_blank" href="mailto:' . EMAIL .'">' . EMAIL .'</a></span></p>
										<p><span class="title-s">Phone: </span> <span><a href="tel:' . PHONE1 . '">' . PHONE1 . '</a></span></p>
										<p><span class="title-s">Phone: </span> <span><a href="tel:' . PHONE2 . '">' . PHONE2 . '</a></span></p>
									</div>
								</div>
							</div>
							<div class="skill-mf">
								<p class="title-s">Skill</p>
								<span>Problem Solving</span><span class="pull-right"> 95%</span>
								<div class="progress">
									<div class="progress-bar" role="progressbar" style="width: 95%;" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
								<span>Java</span><span class="pull-right"> 90%</span>
								<div class="progress">
									<div class="progress-bar" role="progressbar" style="width: 90%" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
								<span>JAVASCRIPT</span><span class="pull-right"> 90%</span>
								<div class="progress">
									<div class="progress-bar" role="progressbar" style="width: 90%" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
								<span>PhP</span><span class="pull-right"> 80%</span>
								<div class="progress">
									<div class="progress-bar" role="progressbar" style="width: 80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="about-me pt-4 pt-md-0">
								<div class="title-box-2">
									<h2 class="title-left">About me</h2>
								</div>
								<p class="lead">Enthusiast Software Engineer, knowledge on various technology solutions, from COBOL to JavaEE, experience on Banking, Insurance, Financing, Energy, Automotive, Food Sector projects and public websites. Design, development, testing and bug fixing from backend to frontend, loving the Open Source Philosophy (I love GNU/LINUX) and the Computer Science Education.</p>
								<p class="lead">Personal Open Source Projects: <strong><a target="_blank" href="https://github.com/simon387">github.com/simone</a></strong></p>
								<p class="lead">Full LinkedIn Profile: <strong><a target="_blank" href="' . LINKEDIN .'">linkedin.com/simone</a></strong></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>'));
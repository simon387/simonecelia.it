<?php

echo(minify_html('<section id="contact" class="paralax-mf footer-paralax bg-image sect-mt4 route" style="background-image: url(assets/img/overlay-bg.jpg)">
	<div class="overlay-mf"></div>
	<div class="container">
		<div class="row">
			<div class="col-sm-12">
				<div class="contact-mf">
					<div id="contact-box" class="box-shadow-full">
						<div class="row">
							<div class="col-md-6">
								<div class="title-box-2">
									<h2 class="title-left">Send Message</h2>
								</div>
								<div>
									<form action="be/controllers/message.php" method="post" class="php-email-form" autocomplete="off">
										<div class="row">
											<div class="col-md-12 mb-3">
												<div class="form-group">
													<input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required maxlength="256">
												</div>
											</div>
											<div class="col-md-12 mb-3">
												<div class="form-group">
													<input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required maxlength="256">
												</div>
											</div>
											<div class="col-md-12 mb-3">
												<div class="form-group">
													<input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required maxlength="256">
												</div>
											</div>
											<div class="col-md-12">
												<div class="form-group">
													<textarea class="form-control" name="message" id="message" rows="5" placeholder="Message" required maxlength="8192"></textarea>
												</div>
											</div>
											<div class="col-md-12 text-center my-3">
												<div class="loading">Loading</div>
												<div class="error-message"></div>
												<div class="sent-message">Your message has been sent. Thank you!</div>
											</div>
											<div class="col-md-12 text-center">
												<button type="submit" class="button button-a button-big button-rouded">Send Message</button>
											</div>
										</div>
									</form>
								</div>
							</div>
							<div class="col-md-6">
								<div class="title-box-2 pt-4 pt-md-0">
									<h2 class="title-left">Get in Touch</h2>
								</div>
								<div class="more-info">
									<p class="lead">Feel free to contact me!</p>
									<ul class="list-ico">
										<li><span class="bi bi-geo-alt"></span> ITALY and SPAIN</li>
										<li><span class="bi bi-phone"></span> ' . PHONE1 . '</li>
										<li><span class="bi bi-phone"></span> ' . PHONE2 . '</li>
										<li><span class="bi bi-envelope"></span> <a target="_blank" href="mailto:' . EMAIL . '">' . EMAIL . '</a></li>
									</ul>
								</div>
								<div class="socials">
									<ul>
										<li><a target="_blank" href="https://www.facebook.com/simone.celia.98/"><span class="ico-circle"><i class="bi bi-facebook"></i></span></a></li>
										<li><a target="_blank" href="https://www.instagram.com/_s1m0n387/"><span class="ico-circle"><i class="bi bi-instagram"></i></span></a></li>
										<li><a target="_blank" href="https://twitter.com/Simone_Celia"><span class="ico-circle"><i class="bi bi-twitter"></i></span></a></li>
										<li><a target="_blank" href="' . LINKEDIN . '"><span class="ico-circle"><i class="bi bi-linkedin"></i></span></a></li>
										<li><a target="_blank" href="https://github.com/simon387/"><span class="ico-circle"><i class="bi bi-github"></i></span></a></li>
										<li><a target="_blank" href="https://www.tiktok.com/@simone.celia?lang=it-IT"><span class="ico-circle">
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tiktok" viewBox="0 0 16 16">
											<path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"/>
										</svg> </span></a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>'));

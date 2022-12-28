<?php
$f = fopen("changelog.txt", 'r');
$version = fgets($f);
fclose($f);

minify_html('
<footer>
<div class="container">
	<div class="row">
		<div class="col-sm-12">
			<div class="copyright-box">
				<p class="copyright">&copy; Copyright <strong>' . TITLE . '</strong> 2023. All Rights Reserved. <a class="footer-link" target="_blank" href="changelog.txt">' . $version . '</a>
				<div class="credits">Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a></div>
			</div>
		</div>
	</div>
</div>
</footer>
<div id="preloader"></div>
<a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>'
);

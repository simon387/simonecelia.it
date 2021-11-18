<?php
$f = fopen("changelog.txt", 'r');
$version = fgets($f);
fclose($f);
?>
<footer>
<div class="container">
	<div class="row">
		<div class="col-sm-12">
			<div class="copyright-box">
				<p class="copyright">&copy; Copyright <strong>simonecelia.it</strong>. All Rights Reserved. <?php echo $version ?>
				<div class="credits">Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a></div>
			</div>
		</div>
	</div>
</div>
</footer>
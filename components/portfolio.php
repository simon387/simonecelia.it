<?php

include_once 'util/minify.php';
include_once 'util/portfolio.php';

echo(minify_html(
'<section id="work" class="portfolio-mf sect-pt4 route">
	<div class="container">
		<div class="row">
			<div class="col-sm-12">
				<div class="title-box text-center">
					<h3 class="title-a">Portfolio</h3>
					<p class="subtitle-a">Just few examples of my projects</p>
					<div class="line-mf"></div>
				</div>
			</div>
		</div>
		<div class="row">' .
generate_portfolio_entry("cafe_placa.png", "cafe de la placa", "cafedelaplazalh.com", "Web Design", "23 Dec. 2020", "https://github.com/simon387/cafedelaplaca") .
generate_portfolio_entry("comarea.png", "comarca cuina lhocal", "comarcacuinalhocal.es", "Web Design", "25 Dec. 2020", "https://github.com/simon387/comarcacuinalhocal.es") .
generate_portfolio_entry("almacen.png", "almacen", "Almacen", "Warehouse Software", "28 Mar. 2020", "https://github.com/simon387/almacen") .
generate_portfolio_entry("daoc_starter.png", "daoc starter", "DaocStarter", "Game Launcher Software", "5 Oct. 2017", "https://github.com/simon387/daocstarter") .
generate_portfolio_entry("ytdl.png", "you tube downloader gui", "YTDLUI", "Desktop Application", "7 Feb. 2017", "https://github.com/simon387/ytdl") .
generate_portfolio_entry("poster.png", "poster", "Poster", "Web Application", "5 Jan. 2021", "https://github.com/simon387/poster") .
generate_portfolio_entry("JSCPanelManager.png", "JSCPanelManager", "JSCPanelManager", "cPanel automation", "27 Nov. 2017", "https://github.com/simon387/JSCPanelManager") .
generate_portfolio_entry("TS3_screenshot_ubuntu.png", "TS-BOT", "TS-BOT", "LUA plugin Script", "7 Feb. 2012", "https://github.com/simon387/TS-BOT") .
generate_portfolio_entry("ts-bot-web.png", "ts-bot-web", "TS-BOT-WEB", "Web Application", "28 Feb. 2014", "https://github.com/simon387/ts-bot-web") .
'		</div>
	</div>
</section>'
));

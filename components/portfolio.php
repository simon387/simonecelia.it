<?php
function generate_portfolio_entry($asset, $alt, $title, $category, $date, $link): string
{
	return
		'<div class="col-md-4">
		<div class="work-box">
			<a href="assets/img/' . $asset . '" data-gallery="portfolioGallery" class="portfolio-lightbox">
				<div class="work-img">
					<img loading="eager" src="assets/img/' . $asset . '" alt="' . $alt . '" class="img-fluid">
				</div>
			</a>
			<div class="work-content">
				<div class="row">
					<div class="col-sm-8">
						<h2 class="w-title">' . $title . '</h2>
						<div class="w-more">
							<span class="w-ctegory">' . $category . '</span> / <span class="w-date">' . $date . '</span>
						</div>
					</div>
					<div class="col-sm-4">
						<div class="w-like">
							<a href="' . $link . '" target="_blank"> <span class="bi bi-plus-circle"></span></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>';
}

$entries = [
	generate_portfolio_entry("cafe_placa.png", "cafe de la placa", "cafedelaplazalh.com", "Web Design", "23 Dec. 2020", "https://github.com/simon387/cafedelaplaca"),
	generate_portfolio_entry("comarea.png", "comarca cuina lhocal", "comarcacuinalhocal.es", "Web Design", "25 Dec. 2020", "https://github.com/simon387/comarcacuinalhocal.es"),
	generate_portfolio_entry("almacen.png", "almacen", "Almacen", "Warehouse Software", "28 Mar. 2020", "https://github.com/simon387/almacen"),
	generate_portfolio_entry("daoc_starter.png", "daoc starter", "DaocStarter", "Game Launcher Software", "5 Oct. 2017", "https://github.com/simon387/daocstarter"),
	generate_portfolio_entry("ytdl.png", "you tube downloader gui", "YTDLUI", "Desktop Application", "7 Feb. 2017", "https://github.com/simon387/ytdl"),
	generate_portfolio_entry("poster.png", "poster", "Poster", "Web Application", "5 Jan. 2021", "https://github.com/simon387/poster"),
	generate_portfolio_entry("JSCPanelManager.png", "JSCPanelManager", "JSCPanelManager", "cPanel automation", "27 Nov. 2017", "https://github.com/simon387/JSCPanelManager"),
	generate_portfolio_entry("TS3_screenshot_ubuntu.png", "TS-BOT", "TS-BOT", "LUA plugin Script", "7 Feb. 2012", "https://github.com/simon387/TS-BOT"),
	generate_portfolio_entry("zalexofficial.jpg", "zalexofficial", "Zalex Official", "Web Application", "17 Dec. 2021", "https://zalexofficial.com"),
	generate_portfolio_entry("ts-bot-web.png", "ts-bot-web", "TS-BOT-WEB", "Web Application", "28 Feb. 2014", "https://github.com/simon387/ts-bot-web"),
	generate_portfolio_entry("grenya.jpg", "grenyaobrador", "grenyaobrador.es", "Web Application", "16 Jan. 2022", "https://www.grenyaobrador.es"),
	generate_portfolio_entry("simonecelia.png", "simonecelia", "simonecelia.it", "Web Application", "3 Nov. 2021", "https://www.simonecelia.it"),
	generate_portfolio_entry("offerte_amazon.png", "offerte amazon", "Offerte Amazon", "Telegram Application", "15 Jul. 2022", "https://github.com/simon387/offerte_amazon"),
	generate_portfolio_entry("FoldoBot.png", "FoldoBot", "FoldoBot", "Telegram Application", "Jun 14, 2022", "https://github.com/simon387/FoldoBot"),
];

shuffle($entries);

minify_html('
<section id="work" class="portfolio-mf sect-pt4 route">
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
		<div class="row">' . implode('', $entries) . '</div>
	</div>
</section>'
);

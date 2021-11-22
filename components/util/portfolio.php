<?php

function generate_portfolio_entry($asset, $alt, $title, $category, $date, $link): string
{
	return
			'<div class="col-md-4">
				<div class="work-box">
					<a href="assets/img/' . $asset . '" data-gallery="portfolioGallery" class="portfolio-lightbox">
						<div class="work-img">
							<img loading="lazy" src="assets/img/' . $asset . '"  alt="' . $alt . '" class="img-fluid">
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

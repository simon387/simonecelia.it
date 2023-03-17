import React from "react";

export const PortfolioEntry: React.FC<{ asset: string, alt: string, title: string, category: string, date: string, link: string, key: number }> = (props, key) => {

	return (
		<div className="col-md-4" key={key}>
			<div className="work-box">
				<a href={require(`../../../../../images/portfolio/${props.asset}`)} data-gallery="portfolioGallery" className="portfolio-lightbox">
					<div className="work-img">
						<img loading="eager" src={require(`../../../../../images/portfolio/${props.asset}`)} alt={props.alt} className="img-fluid"/>
					</div>
				</a>
				<div className="work-content">
					<div className="row">
						<div className="col-sm-8">
							<h2 className="w-title">{props.title}</h2>
							<div className="w-more">
								<span className="w-ctegory">{props.category}</span> / <span className="w-date">{props.date}</span>
							</div>
						</div>
						<div className="col-sm-4">
							<div className="w-like">
								<a href={props.link} rel="noreferrer" target="_blank"> <span className="bi bi-plus-circle"></span></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

import {PortfolioEntry} from "./components/PortfolioEntry";

export const Portfolio = () => {

	function shuffleArray(array: any[]) {
		let i = array.length - 1;
		for (; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			const temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		return array;
	}

	let componentsArray = [
		<PortfolioEntry asset={"cafe_placa.png"} alt={"cafe de la placa"} title={"cafedelaplazalh.com"} category={"Web Design"} date={"23 Dec. 2020"}
										link={"https://github.com/simon387/cafedelaplaca"} key={0}/>,
		<PortfolioEntry asset={"comarea.png"} alt={"comarca cuina lhocal"} title={"comarcacuinalhocal.es"} category={"Web Design"} date={"25 Dec. 2020"}
										link={"https://github.com/simon387/comarcacuinalhocal.es"} key={1}/>,
		<PortfolioEntry asset={"almacen.png"} alt={"almacen"} title={"Almacen"} category={"Warehouse Software"} date={"28 Mar. 2020"}
										link={"https://github.com/simon387/almacen"} key={2}/>,
		<PortfolioEntry asset={"daoc_starter.png"} alt={"daoc starter"} title={"DaocStarter"} category={"Game Launcher Software"} date={"5 Oct. 2017"}
										link={"https://github.com/simon387/daocstarter"} key={3}/>,
		<PortfolioEntry asset={"ytdl.png"} alt={"you tube downloader gui"} title={"YTDLUI"} category={"Desktop Application"} date={"7 Feb. 2017"}
										link={"https://github.com/simon387/ytdl"} key={4}/>,
		<PortfolioEntry asset={"poster.png"} alt={"poster"} title={"Poster"} category={"Web Application"} date={"5 Jan. 2021"}
										link={"https://github.com/simon387/poster"} key={5}/>,
		<PortfolioEntry asset={"JSCPanelManager.png"} alt={"JSCPanelManager"} title={"JSCPanelManager"} category={"cPanel automation"} date={"27 Nov. 2017"}
										link={"https://github.com/simon387/JSCPanelManager"} key={6}/>,
		<PortfolioEntry asset={"TS3_screenshot_ubuntu.png"} alt={"TS-BOT"} title={"TS-BOT"} category={"LUA plugin Script"} date={"7 Feb. 2012"}
										link={"https://github.com/simon387/TS-BOT"} key={7}/>,
		<PortfolioEntry asset={"zalexofficial.jpg"} alt={"zalexofficial"} title={"Zalex Official"} category={"Web Application"} date={"17 Dec. 2021"}
										link={"https://zalexofficial.com"} key={8}/>,
		<PortfolioEntry asset={"ts-bot-web.png"} alt={"ts-bot-web.png"} title={"TS-BOT-WEB"} category={"Web Application"} date={"28 Feb. 2014"}
										link={"https://github.com/simon387/ts-bot-web"} key={9}/>,
		<PortfolioEntry asset={"grenya.jpg"} alt={"grenyaobrador"} title={"grenyaobrador.es"} category={"Web Application"} date={"16 Jan. 2022"}
										link={"https://www.grenyaobrador.es"} key={10}/>,
		<PortfolioEntry asset={"simonecelia.png"} alt={"simonecelia"} title={"simonecelia.it"} category={"Web Application"} date={"3 Nov. 2021"}
										link={"https://www.simonecelia.it"} key={11}/>,
		<PortfolioEntry asset={"offerte_amazon.png"} alt={"offerte amazon"} title={"Offerte Amazon"} category={"Telegram Application"} date={"15 Jul. 2022"}
										link={"https://github.com/simon387/offerte_amazon"} key={12}/>,
		<PortfolioEntry asset={"FoldoBot.png"} alt={"FoldoBot"} title={"FoldoBot"} category={"Telegram Application"} date={"Jun 14, 2022"}
										link={"https://github.com/simon387/FoldoBot"} key={13}/>,
	];
	componentsArray = shuffleArray(componentsArray);

	return (
		<section id="work" className="portfolio-mf sect-pt4 route">
			<div className="container">
				<div className="row">
					<div className="col-sm-12">
						<div className="title-box text-center">
							<h3 className="title-a">Portfolio</h3>
							<p className="subtitle-a">Just few examples of my projects</p>
							<div className="line-mf"></div>
						</div>
					</div>
				</div>
				<div className="row">
					{componentsArray}
				</div>
			</div>
		</section>
	);
}

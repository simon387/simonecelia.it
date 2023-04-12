import React, {useEffect} from "react";
import {Hero} from "./components/hero/Hero";
import {About} from "./components/about/About";
import {Services} from "./components/services/Services";
import {Counter} from "./components/counter/Counter";
import {Portfolio} from "./components/portfolio/Portfolio";
import {Contact} from "./components/contact/Contact";

export const HomePage = () => {

	useEffect(() => {
		const main_script = document.createElement("script");
		main_script.src = "main.js";
		main_script.async = true;
		document.body.appendChild(main_script);
		const purecounter_script = document.createElement("script");
		purecounter_script.src = "vendor/purecounter/purecounter.js"
		purecounter_script.async = true;
		document.body.appendChild(purecounter_script);

		return () => {
			document.body.removeChild(main_script);
			document.body.removeChild(purecounter_script);
		}
	}, []);

	return (
		<>
			<Hero/>
			<main id="main">
				<About/>
				<Services/>
				<Counter/>
				<Portfolio/>
				<Contact/>
			</main>
		</>
	);
}

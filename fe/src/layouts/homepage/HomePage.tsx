import React, {useEffect} from "react";
import {Portfolio} from "../portfolio/Portfolio";
import {Hero} from "./components/hero/Hero";
import {About} from "./components/about/About";
import {Services} from "./components/services/Services";
import {Counter} from "./components/counter/Counter";

export const HomePage = () => {

	useEffect(() => {
		const script = document.createElement("script");
		script.src = "main.js";
		script.async = true;
		document.body.appendChild(script);
	});

	return (
		<>
			<Hero/>
			<main id="main">
				<About/>
				<Services/>
				<Counter/>
				<Portfolio/>
			</main>
		</>
	);
}

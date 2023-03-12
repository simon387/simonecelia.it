import {Hero} from "../hero/Hero";
import React, {useEffect} from "react";
import {About} from "../about/About";

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
			</main>
		</>
	);
}

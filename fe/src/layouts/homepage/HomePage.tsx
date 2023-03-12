import {Hero} from "../hero/Hero";
import React from "react";
import {About} from "../about/About";

export const HomePage = () => {

	return (
		<>
			<Hero/>
			<main id="main">
				<About/>
			</main>
		</>
	);
}

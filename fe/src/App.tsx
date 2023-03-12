import React from 'react';
import './App.css';
import {Navbar} from "./layouts/navbar/Navbar";
import {Hero} from "./layouts/hero/Hero";

export const App = () => {

	return (
		<>
			<Navbar/>
			<Hero/>
		</>
	);
}

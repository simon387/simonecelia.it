import React from 'react';
import './App.css';
import {Navbar} from "./layouts/Navbar/Navbar";
import {Route, Switch} from "react-router";
import {HomePage} from "./layouts/HomePage/HomePage";
import {Favs} from "./layouts/Favs/Favs";
import {PvIp} from "./layouts/PvIp/PvIp";
import {ShameList} from "./layouts/ShameList/ShameList";
import {Gate} from "./layouts/Gate/Gate";
import {Footer} from "./layouts/Footer/Footer";

export const App = () => {

	return (
		<Switch>
			<Route path='/' exact>
				<Navbar/>
				<HomePage/>
				<Footer/>
			</Route>
			<Route path='/favs'>
				<Favs/>
			</Route>
			<Route path='/shame'>
				<ShameList/>
			</Route>
			<Route path='/cancello'>
				<Gate/>
			</Route>
			<Route path='/ip'>
				<PvIp/>
			</Route>
		</Switch>
	);
}

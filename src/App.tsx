import React from 'react';
import './App.css';
import {Navbar} from "./layouts/Navbar/Navbar";
import {Route, Switch} from "react-router";
import {HomePage} from "./layouts/HomePage/HomePage";
import {Favs} from "./layouts/Favs/Favs";
import {ShameList} from "./layouts/ShameList/ShameList";
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
		</Switch>
	);
}

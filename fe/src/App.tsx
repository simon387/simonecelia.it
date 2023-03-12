import React from 'react';
import './App.css';
import {Navbar} from "./layouts/navbar/Navbar";
import {Redirect, Route, Switch} from "react-router";
import {HomePage} from "./layouts/homepage/HomePage";
import {Favs} from "./layouts/favs/Favs";
import {ShameList} from "./layouts/shamelist/ShameList";
import {Footer} from "./layouts/footer/Footer";

export const App = () => {

	return (
		<Switch>
			<Route path='/' exact>
				<Navbar/>
				<HomePage/>
				<Footer/>
			</Route>
			<Route path='/favs' exact>
				<Favs/>
			</Route>
			<Route path='/shame' exact>
				<ShameList/>
			</Route>
			<Redirect to="/"/>
		</Switch>
	);
}

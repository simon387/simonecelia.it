import React from 'react';
import './App.css';
import {Navbar} from "./layouts/navbar/Navbar";
import {Redirect, Route, Switch} from "react-router";
import {HomePage} from "./layouts/homepage/HomePage";
import {Favs} from "./layouts/favs/Favs";
import {ShameList} from "./layouts/shamelist/ShameList";

export const App = () => {

	return (
		<Switch>
			<Route path='/' exact>
				<Redirect to='/home'/>
			</Route>
			<Route path='/home'>
				<Navbar/>
				<HomePage/>
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

import React from 'react';
import './App.css';
import {Navbar} from "./layouts/Navbar/Navbar";
import {HashRouter} from "react-router-dom";
import {HomePage} from "./layouts/HomePage/HomePage";
import {Favs} from "./layouts/Favs/Favs";
import {ShameList} from "./layouts/ShameList/ShameList";
import {Footer} from "./layouts/Footer/Footer";
import {Route} from "react-router";

export const App = () => {

	return (
		<HashRouter>
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
		</HashRouter>
	);
}

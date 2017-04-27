import { h, render } from 'preact'

import Router from 'preact-router'

import Header from './components/header/header.js'
import MainNavigation from './components/nav/main-navigation.js'

import Home from './views/home.js'
import About from './views/about.js'
import Stars from './views/stars.js'
import Repos from './views/repos.js'

render((
	<article>
		<Header title="Isaac A. Dettman" />
		<div class="subheader subheader__container">subheader</div>
		<MainNavigation />
		<div className="page-content">
			<Router>
				<Home path="/"/>
				<About path="/about"/>
				<Stars path="/stars"/>
				<Repos path="/repos"/>
			</Router>
		</div>
	</article>
), document.getElementById('root'))
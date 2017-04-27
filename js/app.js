import { h, render } from 'preact';

import Router from 'preact-router';
import { Link } from 'preact-router/match';

import Header from './components/header/header.js';

import Home from './views/home.js';
import About from './views/about.js';
import Stars from './views/stars.js';
import Repos from './views/repos.js';

render((
	<article>
		<Header title="Isaac A. Dettman" />
		<div class="subheader subheader__container">subheader</div>
		<ul class="tiled-block tiled-block__container">
			<li><Link activeClassName="active" href="/">Home</Link></li>
			<li><Link activeClassName="active" href="/about">About</Link></li>
			<li><Link activeClassName="active" href="/stars">Stars</Link></li>
			<li><Link activeClassName="active" href="/repos">Repos</Link></li>
		</ul>
		<div className="page-content">
			<Router>
				<Home path="/"/>
				<About path="/about"/>
				<Stars path="/stars"/>
				<Repos path="/repos"/>
			</Router>
		</div>
	</article>
), document.getElementById('root'));
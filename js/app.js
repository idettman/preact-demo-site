import { h, render } from 'preact';

import Router from 'preact-router';

import Home from './views/home/home.js';
import About from './views/about/about.js';

import Header from './components/header/header.js';
import { Link } from 'preact-router/match';


render((
	<article>
		<Header title="Isaac A. Dettman" />
		<div class="subheader subheader__container">subheader</div>
		<ul class="tiled-block tiled-block__container">
			<li><Link activeClassName="active" href="/">Home</Link></li>
			<li><Link activeClassName="active" href="/about">About</Link></li>
			<li>three</li>
			<li>four</li>
		</ul>
		<Router>
			<Home path="/"/>
			<About path="/about"/>
		</Router>
	</article>
), document.getElementById('root'));
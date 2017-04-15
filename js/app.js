import { h, render } from 'preact';

import Router from 'preact-router';

import Home from './views/home/home.js';

import Header from './components/header/header.js';

render((
	<article>
	<Header title="Isaac A. Dettman" />
	<div class="subheader subheader__container">subheader</div>
	<ul class="tiled-block tiled-block__container">
		<li>one</li>
		<li>two</li>
		<li>three</li>
		<li>four</li>
	</ul>
	<Router>
	<Home path="/"/>
	</Router>
	</article>
), document.getElementById('root'));
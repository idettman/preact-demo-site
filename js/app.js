import { h, render } from 'preact'

import Router from 'preact-router'

import Header from './components/header/header'
import MainNavigation from './components/nav/main-navigation'

import Home from './views/home'
import About from './views/about'
import Stars from './views/stars'
import Repos from './views/repos'
import GitFlow from './views/git-flow'

render((
	<article>
		<Header title="idettman" />
		<MainNavigation />
		<div className="page-content">
			<Router>
				<Home path="/"/>
				<About path="/about" />
				<Stars path="/stars" />
				<Repos path="/repos" />
				<GitFlow path="/gitflow" />
			</Router>
		</div>
	</article>
), document.getElementById('root'))
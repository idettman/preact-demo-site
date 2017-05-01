import { h, render } from 'preact'

import Router from 'preact-router'

import Header from './components/header'
import MainNavigation from './components/main-navigation'

import Home from './views/home'
import Definitions from './views/definitions'
import Bash from './views/bash'
import Stars from './views/stars'
import Repos from './views/repos'
import GitFlow from './views/git-flow'

render((
	<main>
		<Header title="idettman" />
		<MainNavigation />
		<div className="page-content">
			<Router>
				<Home path="/" />
				<Definitions path="/definitions" />
				<Bash path="/bash" />
				<Stars path="/stars" />
				<Repos path="/repos" />
				<GitFlow path="/gitflow" />
			</Router>
		</div>
	</main>
), document.getElementById('root'))
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

const NAV_DATA = {
	home: {
		path: '/',
		title: 'home'
	},
	definitions: {
		path: '/definitions',
		title: 'definitions'
	},
	bash: {
		path: '/bash',
		title: 'bash reference'
	},
	stars: {
		path: '/stars',
		title: 'stars'
	},
	repos: {
		path: '/repos',
		title: 'repositories'
	},
	gitflow: {
		path: '/gitflow',
		title: 'git methodology'
	}
}

render((
	<main>
		<Header title="idettman" />
		<MainNavigation navData={NAV_DATA} />
		<div className="page-content">
			<Router>	
				<Home path={NAV_DATA['home'].path} />
				<Definitions path={NAV_DATA['definitions'].path} />
				<Bash path={NAV_DATA['bash'].path} />
				<Stars path={NAV_DATA['stars'].path} />
				<Repos path={NAV_DATA['repos'].path} />
				<GitFlow path={NAV_DATA['gitflow'].path} />
			</Router>
		</div>
	</main>
), document.body)
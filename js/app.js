import { h, render } from 'preact'

import Router from 'preact-router'

import Header from './components/header'
import MainNavigation from './components/main-navigation'

import Home from './views/home'
import Bash from './views/bash'
import Repos from './views/repos'
import GitFlow from './views/git-flow'
import Definitions from './views/definitions'

import { NAV_DATA } from './constants'

const getNavPath = path => NAV_DATA[path].path

render((
	<main>
		<Header title="idettman" subtitle="prototypical development" />
		<MainNavigation navData={NAV_DATA} />
		<div className="page-content">
			<Router>
				<Home path={getNavPath('home')} />
				<Definitions path={getNavPath('definitions')} />
				<Bash path={getNavPath('bash')} />
				<Repos path={getNavPath('repos')} />
				<GitFlow path={getNavPath('gitflow')} />
			</Router>
		</div>
	</main>
), document.body)
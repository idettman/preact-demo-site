import { h, render } from 'preact'

import Router from 'preact-router'

import Header from './components/header'
import MainNavigation from './components/main-navigation'

import Home from './views/home'
import Repos from './views/repos'

import { NAV_DATA } from './constants'

const getNavPath = path => NAV_DATA[path].path

render((
	<main>
		<Header title="idettman" subtitle="prototypical development" />
		<MainNavigation navData={NAV_DATA} />
		<div className="page-content">
			<Router>
				<Home path={getNavPath('home')} />
				<Repos path={getNavPath('repos')} />
			</Router>
		</div>
	</main>
), document.body)

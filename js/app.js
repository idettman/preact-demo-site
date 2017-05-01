import { h, render } from 'preact'

import Router from 'preact-router'

import Header from './components/header'
import MainNavigation from './components/main-navigation'

import Home from './views/home'
import Definitions from './views/definitions'
import Bash from './views/bash'
import Repos from './views/repos'
import GitFlow from './views/git-flow'

import {NAV_DATA} from './constants' 

render((
	<main>
		<Header title="idettman" />
		<MainNavigation navData={NAV_DATA} />
		<div className="page-content">
			<Router>	
				<Home path={NAV_DATA['home'].path} />
				<Definitions path={NAV_DATA['definitions'].path} />
				<Bash path={NAV_DATA['bash'].path} />
				<Repos path={NAV_DATA['repos'].path} />
				<GitFlow path={NAV_DATA['gitflow'].path} />
			</Router>
		</div>
	</main>
), document.body)
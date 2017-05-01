import {h} from 'preact'
import {Link} from 'preact-router/match'

const MainNavigation = (props) => (
	
	<div className="main-navigation">
		<Link activeClassName="active" href={props.navData['home'].path}>{props.navData['home'].title}</Link>
		<Link activeClassName="active" href={props.navData['definitions'].path}>{props.navData['definitions'].title}</Link>
		<Link activeClassName="active" href={props.navData['bash'].path}>{props.navData['bash'].title}</Link>
		<Link activeClassName="active" href={props.navData['repos'].path}>{props.navData['repos'].title}</Link>
		<Link activeClassName="active" href={props.navData['gitflow'].path}>{props.navData['gitflow'].title}</Link>
	</div>
)

export default MainNavigation
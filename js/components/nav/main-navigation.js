import {h} from 'preact'
import {Link} from 'preact-router/match'

const MainNavigation = (props) => (
	<div className="main-navigation">
		<Link activeClassName="active" href="/">home</Link>
		<Link activeClassName="active" href="/about">about</Link>
		<Link activeClassName="active" href="/stars">stars</Link>
		<Link activeClassName="active" href="/repos">repos</Link>
	</div>
)

export default MainNavigation
import {h} from 'preact'
import {Link} from 'preact-router/match'

const MainNavigation = (props) => {
	return <div className="main-navigation">{Object.keys(props.navData).map(item => {
		return <Link activeClassName="active" href={props.navData[item].path}>{props.navData[item].title}</Link>
	})}</div>
}

export default MainNavigation
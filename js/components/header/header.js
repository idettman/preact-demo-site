import {h} from 'preact'

const Header = (props) => (
	<header class="header header__container">
		<h1 class="header__title">{ props.title }</h1>
	</header>
)

export default Header
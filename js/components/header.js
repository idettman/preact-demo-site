import {h} from 'preact'

const Header = (props) => (
	<svg class="header__title" viewBox="0 0 35 9">
		<defs>
			<linearGradient id="MyGradient" x1="0%" x2="0%" y1="0%" y2="100%">
				<stop offset="0%" stop-color="cornflowerblue"/>
				<stop offset="100%" stop-color="#0B598D"/>
			</linearGradient>
		</defs>
		<text x="0" y="7" style="fill: url(#MyGradient); font-size: 1rem">{ props.title }</text>
	</svg>
)

export default Header
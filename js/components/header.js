import {h} from 'preact'

const Header = (props) => (
	<a class="header__title" href="https://github.com/idettman/idettman.github.io" target="_blank">
		<svg viewBox="0 0 35 12">
		<defs>
			<linearGradient id="MyGradient" x1="0%" x2="0%" y1="0%" y2="100%">
				<stop offset="0%" stop-color="cornflowerblue"/>
				<stop offset="100%" stop-color="#0B598D"/>
			</linearGradient>
		</defs>
		<text x="0" y="7" style="fill: url(#MyGradient); font-size: 1rem">{ props.title }</text>
		<text x="0" y="10" style="fill: orange; font-size: 0.3rem">{ props.subtitle }</text>
	</svg>
	</a>
)

export default Header
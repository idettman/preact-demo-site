import {h, Component} from 'preact'

class Repos extends Component {
	render() {
		return (
			<div>
				<h1>Repos</h1>
				<dl>
					<dt>this site's source</dt>
					<dd><a href="https://github.com/idettman/idettman.github.io">idettman.github.io</a></dd>
					
					<dt>preact project template</dt>
					<dd><a href="https://github.com/idettman/preact-project-template">preact-project-template</a></dd>
					
					<dt>preact + matter.js project template</dt>
					<dd><a href="https://github.com/idettman/preact-matter-template">preact-matter-template</a></dd>
					
					<dt>minimal react project template</dt>
					<dd><a href="https://github.com/idettman/react-app-template">react-app-template</a></dd>
					
					<dt>functional programming tool-set based on Haskel</dt>
					<dd><a href="https://github.com/idettman/sanctuary">sanctuary</a></dd>
					
					<dt>monadic streams</dt>
					<dd><a href="https://github.com/idettman/most">most</a></dd>
						
					<dt>most</dt>
					<dd><a href="https://github.com/idettman/hyperapp">hyperapp</a></dd>
					
					<dt>TFRP scalable state management</dt>
					<dd><a href="https://github.com/idettman/mobx">mobx</a></dd>
					
					<dt>javascript story graph engine</dt>
					<dd><a href="https://github.com/idettman/story-graph">story-graph</a></dd>
					
					<dt>webidl-externs</dt>
					<dd><a href="https://github.com/idettman/webidl-externs">webidl-externs</a></dd>
				</dl>
			</div>
		)
	}
}

export default Repos
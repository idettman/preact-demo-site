import {h, Component} from 'preact'

class Repos extends Component {
	render() {
		return (
			<div>
				<h1>Repos content</h1>
				<dl>
					<dt>storygraph</dt>
					<dd><a href="https://github.com/idettman/story-graph">story-graph</a></dd>
					
					<dt>webidl-externs</dt>
					<dd><a href="https://github.com/idettman/webidl-externs">webidl-externs</a></dd>
				</dl>
			</div>
		)
	}
}

export default Repos
import {h, Component} from 'preact'

class Definitions extends Component {
	render () {
		return (
			<div>
				<h2>Definitions content</h2>
				<ul>
					<li>
						<h3>JavaScript</h3>
						<dl>
							<dt>closure</dt>
							<dd>a block of code that can be referenced (and passed around) with access to the variables of the enclosing scope.
								Wrapping statements or an expression in a closure expression does not change their meaning, but merely defers their execution.
								A block of code which is either a statement list, an expression, or a combination of both. 
								A closure is a function that refers to free variables in it's lexical context</dd>
							
							<dt>function</dt>
							<dd>a block of code with parameters. It may produce a result value</dd>
							
							<dt>free variable</dt>
							<dd>is an identifier used but not defined by the closure</dd>
							
							<dt>imperative programming</dt>
							<dd>a paradigm that describes computation in terms of statements that change a program state</dd>
						</dl>
					</li>
					<li>
						<h3>UX Elements</h3>
						<dl>
							<dt>accordian menu</dt>
							<dd>menu that repositions surrounding content as it expands and contracts</dd>
						</dl>
					</li>
					<li>
						<h3>Types</h3>
						<ul>
							<li>menu</li>
							<li>sub-menu</li>
							<li>filtered-menu</li>
							<li>menu bar</li>
							<li>menu button</li>
							<li>menu item</li>
							<li>menu separator</li>
							<li>tree</li>
							<li>tab</li>
							<li>tab bar</li>
							<li>table</li>
							<li>table sorter</li>
							<li>tool-tip</li>
							<li>tool-bar</li>
							<li>drag-drop detector</li>
							<li>date picker</li>
							<li>combo-box</li>
							<li>checkbox</li>
							<li>input</li>
							<li>grid</li>
							<li>auto-complete</li>
							<li>bubble</li>
							<li>button</li>
							<li>dialog</li>
							<li>card</li>
							<li>hover-card</li>
						</ul>
					</li>
				</ul>
				
			</div>
		)
	}
}

export default Definitions
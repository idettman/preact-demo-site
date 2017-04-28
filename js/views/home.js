import {h, Component} from 'preact'

class Home extends Component {
	render() {
		return (
			<div>
				<h2>Notes</h2>
				<div>
					<h3>ES2015 const + let</h3>
					<p>ES6 const has nothing to do with immutability of object values. const creates a immutable binding only, the bound object's value can definitely change. The only thing immutable is the binding.</p>
					<p>The only difference between const and let is that const makes the contract that no rebinding will happen.</p>
				</div>
				<div>
					<h3>When Not to use Arrow Functions</h3>
					<ul>
						<li>In event handlers when you want the function scoped to the object dispatching the event</li>
						<li>As object methods</li>
						<li>As prototype methods</li>
					</ul>
				</div>
				<div>
					<h3>ES6 Block Scope is The new IIFE</h3>
					<code>
						<script>
						'use strict'
						{
							// code that previously used an IIFE
						}
						</script>
					}</code>
				</div>
			</div>
		)
	}
}

export default Home
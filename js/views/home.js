import {h, Component} from 'preact'

class Home extends Component {
	render() {
		return (
			<div>
				<h1>Developer Log</h1>
				<div>
					<h2>ES2015 const + let</h2>
					<p>ES6 const has nothing to do with immutability of object values. const creates a immutable binding only, the bound object's value can definitely change. The only thing immutable is the binding.</p>
					<p>The only difference between const and let is that const makes the contract that no rebinding will happen.</p>
				</div>
				<div>
					<h2>When Not to use Arrow Functions</h2>
					<ul>
						<li>In event handlers when you want the function scoped to the object dispatching the event</li>
						<li>As object methods</li>
						<li>As prototype methods</li>
					</ul>
				</div>
				<div>
					<h2>ES6 Block Scope is The new IIFE</h2>
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
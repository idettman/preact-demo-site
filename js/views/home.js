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
			</div>
		)
	}
}

export default Home
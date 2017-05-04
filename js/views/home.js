import {h, Component} from 'preact'

class Home extends Component {
	render () {
		return (
			<div>
				<h1>Developer Log</h1>
				<div>
					<h2>Recommended postcss plugins</h2>
					<ul>
						<li>postcss-import</li>
						<li>postcss-cssnext</li>
						<li>postcss-url</li>
					</ul>
					<a href="http://postcss.parts/tag/sass" target="_blank" className="button marginTop">Postcss plugin catalog</a>
				</div>
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
					<div className='gist gist-iife'>
						<div className='js-strict'>'use strict'</div>
						<div className='js-bracket'>{'{'}</div>
							<div className='js-code'><span className="js-reserved">const</span> <span className='js-var'>component</span> = <span className="js-reserved">function</span>()<span className='js-bracket'>{'{}'}</span></div>
						<div className='js-bracket'>{'}'}</div>
					</div>
					<p>The const is going to be scoped to that block and unavailable in the global scope</p>
				</div>
				<div>
					<h2>HTML Box Model</h2>
					<p>After helping a friend debug a nested dom element that was not affecting the sizing of it's containing element.</p>
					<p>I decided to make a simple overview of the dom box model and how the display and position values work</p>
					<ul>
						<li>The following position types will not affect containing elements</li>
						<li>absolute</li>
						<li>fixed</li>
						<li>relative (only the initial position is reflected by the box model, top and left values are not reflected)</li>
					</ul>
				</div>
			</div>
		)
	}
}

export default Home
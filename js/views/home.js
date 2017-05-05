import {h, Component} from 'preact'

class Home extends Component {
	render () {
		return (
			<div>
				<h1>Developer Log</h1>
				<div>
					<h2>CSS Custom Properties</h2>
					<a href="https://drafts.csswg.org/css-variables/#the-CSSVariablesMap-interface" target="_blank" className="button">W3C Spec</a>
					<div className="gist">
						<div>:root {'{'}</div>
						<div className="js-code">--platform: 'mobile'</div>
						<div>{'}'}</div>
					</div>
					<div className="gist">
						const platform = el.style.var.get(‘platform’)
					</div>
				</div>
				<div>
					<h2>DOMPoint, DOMQuad and DOMMatrix</h2>
					<a className='button' target='_blank' href='https://drafts.fxtf.org/geometry/#dommatrix'>W3C Spec</a>
					<div className='gist'>
						<div className='js-bracket'>{'{'}</div>
						<div className='js-code'>var point = new DOMPoint(2,0)</div>
						<div className='js-code'>var quad = new DOMQuad(point,{'{'}x:12, y:0{'}'},{'{'}x:2,y:10{'}'},{'{'}x:12,y:10{'}'})</div>
						<div className='js-bracket'>{'}'}</div>
					</div>
					<img width="209" height="101" src="img/matrix4x4.png" />
				</div>
				<div>
					<h2>Recommended postcss plugins</h2>
					<ul>
						<li>postcss-import</li>
						<li>postcss-cssnext</li>
						<li>postcss-url</li>
					</ul>
					<a href='http://postcss.parts/tag/sass' target='_blank' className='button marginTop'>Postcss plugin catalog</a>
				</div>
				<div>
					<h2>ES2015 const + let</h2>
					<p>ES6 const has nothing to do with immutability of object values. const creates a immutable binding only, the bound object's value can definitely change. The only thing immutable is the binding.</p>
					<p>The only difference between const and let is that const makes the contract that no rebinding will happen.</p>
				</div>
				<div>
					<h2>When not to use arrow functions</h2>
					<ul>
						<li>In event handlers when you want the function scoped to the object dispatching the event</li>
						<li>As object methods</li>
						<li>As prototype methods</li>
					</ul>
				</div>
				<div>
					<h2>Replace IIFE with ES6 block scope</h2>
					<div className='gist gist-iife'>
						<div className='js-bracket'>{'{'}</div>
							<div className='js-code'>const component = function(){'{}'}</div>
							<div className='js-bracket'>{'}'}</div>
					</div>
					<p>The const is going to be scoped to that block and unavailable in the global scope</p>
				</div>
				<div>
					<h2>HTML box model</h2>
					<p>After helping a friend debug a nested dom element that was not affecting the sizing of it's containing element</p>
					<p>This will be a simple overview of the dom box model and how display (top, bottom, left, right, margin, padding, and border) and position values work</p>
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
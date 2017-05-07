import {h, Component} from 'preact'

class Home extends Component {
	render () {
		return (
			<div>
				<h1>Developer Log</h1>
				<div>
					<h2>Build Tool Investigation</h2>
					<p>This npm module is an interesting idea, though I still have to benchmark optimized javascript vs unoptimized.</p>
					<a className="button" href="https://prepack.io" target="_blank">https://prepack.io</a>
				</div>
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
					<img width="209" height="101" src="img/matrix4x4.png"/>
				</div>
				<div>
					<h2>postcss-cssnext status</h2>
					<div>A preliminary status on the feature set in cssnext (where ☑ means the feature is on track, ☒ means something is wrong, and ☐ means its not really relevant):
						<ul className="list-plain">
							<li>☐ automatic vendor prefixes (not really a future feature)</li>
							<li>☑ custom properties &amp;
								<code>var()</code>
								(now in all browsers)
							</li>
							<li>☒ custom properties set &amp;
								<code>@apply</code>
								(in Chrome behind flag but killed)
							</li>
							<li>☐ reduced calc() (not really a future feature)</li>
							<li>☒ custom media queries (cut from spec, moved to Houdini or level 5, see
								<span data-link-type="commit" data-commit-sha="e4facfc24e59cddcae5919b0e3c083044ba555af" data-commit-repo="w3c/csswg-drafts" class="commit">w3c/csswg-drafts@e4facfc</span>
								)
							</li>
							<li>☒ media queries ranges (no movement, still in csswg spec)</li>
							<li>☒ custom selectors (no movement, still in csswg spec)</li>
							<li>☒ nesting (no movement, no spec, no response from csswg, see
								<a class="issue is-existent open" data-issue-repo="w3c/csswg-drafts" data-issue="998" data-link-type="issue" href="https://github.com/w3c/csswg-drafts/issues/998" target="_blank">w3c/csswg-drafts#998</a>
								)
							</li>
							<li>☑
								<code>color()</code>
								function (in Safari 10.1, part of CSS Color 4, otherwise on track for implementation)
							</li>
							<li>☑
								<code>hwb()</code>
								function (part of CSS Color 4, generally on track for implementation)
							</li>
							<li>☑
								<code>gray()</code>
								function (part of CSS Color 4, generally on track for implementation)
							</li>
							<li>☑ #rrggbbaa colors (in Firefox, Safari)</li>
							<li>☐ rgba function (rgb fallback) (not really a future feature)</li>
							<li>☑
								<code>rebeccapurple</code>
								color (all modern browsers, IE11)
							</li>
							<li>☑
								<code>font-variant</code>
								property (atleast Chrome, Firefox)
							</li>
							<li>☑
								<code>filter</code>
							</li>
							<li>☑
								<code>initial</code>
							</li>
							<li>☐
								<code>rem</code>
								unit (not really a future feature)
							</li>
							<li>☑
								<code>:any-link</code>
								(in Firefox)
							</li>
							<li>☑
								<code>:matches</code>
								(in Safari)
							</li>
							<li>☑
								<code>:not</code>
								pseudo-class (level 4) (in Safari)
							</li>
							<li>☐
								<code>::</code>
								pseudo syntax (
								<code>:</code>
								fallback) (not really a future feature)
							</li>
							<li>☑
								<code>overflow-wrap</code>
								property (
								<code>word-wrap</code>
								fallback) (in Firefox)
							</li>
							<li>☑ attribute case insensitive (in Chrome, Firefox, Safari)</li>
							<li>☑
								<code>rgb()</code>
								function (functional-notation) (supposedly Safari 10.1)
							</li>
							<li>☑
								<code>hsl()</code>
								function (functional-notation) (supposedly Safari 10.1)
							</li>
							<li>☑
								<code>system-ui</code>
								font-family (in Chrome, WebKit, in review by Firefox)
							</li>
						</ul>
					</div>
				</div>
				<div>
					<h3>Recommended postcss plugins</h3>
					<ul>
						<li>postcss-import</li>
						<li>postcss-cssnext</li>
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
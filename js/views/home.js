import {h, Component} from 'preact'

class Home extends Component {
	render () {
		return (
			<div>
				<h1>Development Log</h1>
				
				<div>
					<h2>postcss research</h2>
					
					<article>
						<h3>curated links related to postcss</h3>
						An awesome list of plugins, articles, resources and other things related to PostCSS
						<a className="button" href="https://github.com/jjaderg/awesome-postcss" target="_blank">repo</a>
					</article>
					
					<article>
						<h3>miscellaneous goodies</h3>
						<ul>
							<li>Generating grids with Lost</li>
							<li>Seeing how your designs look to colorblind people with postcss-colorblind</li>
							<li>Converting px units to rem with postcss-pxtorem</li>
							<li>Auto-generating an RTL version of your stylesheet with rtlcss</li>
							<li>Auto-generating a style guide with postcss-style-guide</li>
						</ul>
						<a className="button" href="https://webdesign.tutsplus.com/tutorials/postcss-deep-dive-miscellaneous-goodies--cms-24603" target="_blank">repo</a>
					</article>
					
					<article>
						<h3>postcss css-nesting</h3>
						Add the ability to nest one style rule inside another <a href="https://github.com/jonathantneal/postcss-nesting" target="_blank">site</a>
						<a className="button" href="https://github.com/jonathantneal/postcss-nesting" target="_blank">repo</a>
						<a className="button" href="http://tabatkins.github.io/specs/css-nesting/" target="_blank">W3C</a>
					</article>
					
					<article>
						<h3>postcss-easings</h3>
						
						<a className="button" href="https://github.com/postcss/postcss-easings" target="_blank">repo</a>
					</article>
					
					<article>
						<h3>postcss bem + suit</h3>
						
						<h4>postcss-bem (updated 2 years ago)</h4>
						<code>npm install postcss-bem postcss-nested --save-dev</code>
						
						<h4>postcss-atrule-bem (updated 2 months ago)</h4>
						<a className="button" href="https://github.com/tbremer/postcss-atrule-bem" target="_blank">repo</a>
						
						<h4>related article</h4>
						<a className="button" href="https://webdesign.tutsplus.com/tutorials/using-postcss-with-bem-and-suit-methodologies--cms-24592" target="_blank">postcss with bem and suit methodologies</a>
					</article>
					
					<article>
						<h3>postcss-partial-import</h3>
						Partial Import lets you use sugary @import statements in CSS, including glob-like and Sass-like behavior. It even lets you generates imports as a scaffolding tool.
						<a className="button" href="https://github.com/jonathantneal/postcss-partial-import" target="_blank">repo</a>
					</article>
					
					<article>
						<h3>lost grid</h3>
						<a className="button" href="https://github.com/peterramsing/lost" target="_blank">repo</a>
						<a className="button" href="https://github.com/peterramsing/lost/wiki/Installation" target="_blank">install guide</a>
						<a className="button" href="http://lostgrid.org/lostgrid-example.html" target="_blank">view examples</a>
						<a className="button" href="http://lostgrid.org/docs.html#browser-support" target="_blank">browser support matrix</a>
					</article>
					
					<article>
						<h3>stylelint</h3>
						modern CSS linter that helps you enforce consistent conventions and avoid errors in your stylesheets
						<a className="button" href="https://stylelint.io/" target="_blank">repo</a>
					</article>
				</div>
				
				<div>
					<h2>featured tools/libs</h2>
					<article>
						<h3>brunch</h3>
						front-end build tool with simple declarative config, incremental compilation, an opinionated pipeline and workflow
						<a className="button" href="https://github.com/brunch/brunch" target="_blank">repo</a>
					</article>
					<article>
						<h3>fly</h3>
						A generator & coroutine-based task runner for nodejs
						<a className="button" href="https://github.com/flyjs/fly" target="_blank">repo</a>
					</article>
					
					<article>
						<h3>bench-chain</h3>
						benchmark recording averages and graphs
						<a className="button" href="https://github.com/fluents/bench-chain" target="_blank">repo</a>
					</article>
				</div>
				
				<div>
					<h2>css modules and specs to check out</h2>
					<dl>
						<dt>flexbox</dt>
						<dd>
							<a className="button" href="https://www.npmjs.com/package/postcss-flexbox" target="_blank">reference site</a>
							<a className="button" href="http://learnlayout.com/flexbox.html" target="_blank">learn layout site</a>
							<a className="button" href="https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties" target="_blank">visual guide</a>
							<a className="button" href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes" target="_blank">MDN</a>
							<a className="button" href="https://www.w3.org/TR/css-flexbox-1/" target="_blank">W3C Module Level 1</a>
						</dd>
					</dl>
					
					<dl>
						<dt>combinators + multiple selectors</dt>
						<dd>
							<a className="button" href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Combinators_and_multiple_selectors" target="_blank">MDN</a>
							<a className="button" href="https://www.w3.org/wiki/CSS/Selectors/combinators/child" target="_blank">W3C</a>
						</dd>
						
						<dt>web animations</dt>
						<dd>
							<a className="button" href="https://w3c.github.io/web-animations/" target="_blank">W3C</a>
						</dd>
						
						<dt>compositing level 1</dt>
						<dd>
							<a className="button" href="https://drafts.fxtf.org/compositing-1/" target="_blank">W3C</a>
						</dd>
						
						<dt>syntax level 3</dt>
						<dd>
							<a className="button" href="https://drafts.csswg.org/css-syntax/" target="_blank">W3C</a>
						</dd>
					</dl>
					
					<h4>draft</h4>
					<dl>
						<dt>conditional rules module level 3</dt>
						<dd>
							<a className="button" href="https://drafts.csswg.org/css-conditional-3/" target="_blank">W3C</a>
						</dd>
						
						<dt>css images module level 3</dt>
						<dd>
							<a className="button" href="https://drafts.csswg.org/css-images-3/" target="_blank">W3C</a>
						</dd>
					</dl>
					
					<h4>unofficial draft</h4>
					<dl>
						<dt>css shadow parts</dt>
						<dd>
							<a className="button" href="http://tabatkins.github.io/specs/css-shadow-parts/" target="_blank">W3C</a>
						</dd>
					</dl>
				</div>
				<div>
					<h2>prepack.io</h2>
					<p>This npm module is an interesting idea, though I still have to benchmark optimized javascript vs unoptimized.</p>
					<a className="button" href="https://prepack.io" target="_blank">https://prepack.io</a>
				</div>
				<div>
					<h2>CSS Custom Properties</h2>
					<a href="https://drafts.csswg.org/css-variables/#the-CSSVariablesMap-interface" target="_blank" className="button">W3C</a>
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
					<a className='button' target='_blank' href='https://drafts.fxtf.org/geometry/#dommatrix'>W3C</a>
					<div className='gist'>
						<div className='js-bracket'>{'{'}</div>
							<div className='js-code'>var point = new DOMPoint(2,0)</div>
							<div className='js-code'>var quad = new DOMQuad(point,{'{'}x:12, y:0{'}'},{'{'}x:2,y:10{'}'},{'{'}x:12,y:10{'}'})</div>
							<div className='js-bracket'>{'}'}</div>
					</div>
					<img width="209" height="101" src="img/matrix4x4.png"/>
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
			</div>
		)
	}
}

export default Home
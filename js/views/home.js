import {h, Component} from 'preact'

class Home extends Component {
	render () {
		return (
			<div>
				<h1>Journal</h1>
				
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
					
					<article>
						<h3>prepack.io</h3>
						This npm module is an interesting idea, though I still have to benchmark optimized javascript vs unoptimized.
						<a className="button" href="https://prepack.io" target="_blank">https://prepack.io</a>
					</article>
					
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
			</div>
		)
	}
}

export default Home

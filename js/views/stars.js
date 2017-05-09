import {h, Component} from 'preact'

class Stars extends Component {
	render() {
		return (
			<div>
				<h2>npm modules</h2>
				
				<h3>terminal helpers</h3>
				<dl>
					<dt>ora</dt>
					<dd>terminal spinner <a href="https://github.com/sindresorhus/ora">repo</a></dd>
					
					<dt>yargs</dt>
					<dd>terminal arguments helper <a href="https://github.com/yargs/yargs">repo</a></dd>
				</dl>
				
				<h3>build tools / runners / deployment</h3>
				<dl>
					<dt>bili</dt>
					<dd>build tool using rollup and buble <a href="https://github.com/egoist/bili">repo</a></dd>
					
					<dt>node-config</dt>
					<dd>application configuration, define a set of default parameters, and extend them for different deployment environments (development, qa, staging, production, etc.) <a href="https://github.com/lorenwest/node-config">repo</a></dd>
					
					<dt>wright</dt>
					<dd>Hot Module Reloading: at the Virtual Machine level. Compatible with any framework (or no framework at all) <a href="https://github.com/porsager/wright">repo</a></dd>
				</dl>
				
				<h3>servers</h3>
				<dl>
					<dt>socket.io</dt>
					<dd>socket server <a href="https://github.com/socketio/socket.io/ https://socket.io/">repo</a></dd>
					
					<dt>dnode</dt>
					<dd>socket server <a href="https://www.npmjs.com/package/dnode">repo</a></dd>
					
					<dt>Porter</dt>
					<dd>REST abstraction layer <a href="https://github.com/0x00A/Porter">repo</a></dd>
				</dl>
				
				<h2>javascript libraries</h2>
				
				<h3>functional programming</h3>
				<dl>
					<dt>Sanctuary</dt>
					<dd>Sanctuary is a JavaScript functional programming library inspired by Haskell and PureScript. It's stricter than Ramda, and provides a similar suite of functions.
Sanctuary promotes programs composed of simple, pure functions. Such programs are easier to comprehend, test, and maintain – they are also a pleasure to write.
Sanctuary provides two data types, Maybe and Either, both of which are compatible with Fantasy Land. Thanks to these data types even Sanctuary functions which may fail, such as head, are composable.
Sanctuary makes it possible to write safe code without null checks. In JavaScript it's trivial to introduce a possible run-time type error <a href="https://sanctuary.js.org/">site</a> | <a href="https://github.com/sanctuary-js/sanctuary">repo</a>
					</dd>
					<dt>1-liners</dt>
					<dd>126 one-liner FP functions (and counting). <a href="https://github.com/idettman/1-liners">repo</a></dd>
				</dl>
				
				<h3>immutable</h3>
				<dl>
					<dt>philpl / goethe</dt>
					<dd>immutable color conversion and manipulation <a href="https://github.com/philpl/goethe">repo</a></dd>
				</dl>
				
				<h3>FP examples</h3>
				<ul>
					<li>https://github.com/Gaya/functional-snake</li>
					<li>https://github.com/cyclejs/todomvc-cycle</li>
				</ul>
				
				<h3>most.js</h3>
				<dl>
					<dt>core-1</dt>
					<dd>reactive event stream used in most.js. high-performance architecture with a lean, functions-only, curried API in a tree-shakeable package <a href="https://github.com/idettman/core-1">repo</a></dd>
					
					<dt>most-dispatch</dt>
					<dd>selective multicast operator for most.js <a href="https://github.com/mostjs-community/most-dispatch">repo</a></dd>
					
					<dt>most-test</dt>
					<dd>unit testing tools tools for most,js<a href="https://github.com/mostjs-community/most-test">repo</a></dd>
					
					<dt>hold</dt>
					<dd>Deliver the most recently seen event to new observers <a href="https://github.com/mostjs/hold">repo</a></dd>
					
					<dt>multicast</dt>
					<dd>Efficient source sharing of an underlying stream <a href="https://github.com/mostjs/multicast">repo</a></dd>
					
					<dt>prelude</dt>
					<dd>Base functional programming utils for mostjs packages <a href="https://github.com/mostjs/prelude">repo</a></dd>
					
					<dt>examples</dt>
					<dd><a href="https://github.com/mostjs/examples">repo</a></dd>
				</dl>
				
				<h3>view layer</h3>
				<dl>
					<dt>domvm</dt>
					<dd>DOM view model. A thin, fast, dependency-free vdom view layer <a href="https://github.com/idettman/domvm">repo</a></dd>
				</dl>
				
				<h3>UI</h3>
				<dl>
					<dt>axiom</dt>
					<dd>UI and UX pattern library <a href="https://brandwatchltd.github.io/axiom/docs/components/dialog">site</a> | <a href="https://github.com/idettman/axiom">repo</a></dd>
					
					<dt>draggable</dt>
					<dd>High performance, fully cross browser, full featured drag and drop in a tiny (2k gzipped), dependency-free package <a href="https://github.com/bcherny/draggable">repo</a></dd>
					
					<dt>drag-drop</dt>
					<dd>html 5 drag and drop component <a href="https://github.com/feross/drag-drop">repo</a></dd>
					
					<dt>html5sortable</dt>
					<dd>Lightweight vanillajs for sortable lists and grids using HTML5 drag + drop API <a href="https://github.com/lukasoppermann/html5sortable">repo</a></dd>
					
					<dt>interact.js</dt>
					<dd>JavaScript drag and drop, resizing and multi-touch gestures with inertia and snapping <a href="https://github.com/feross/drag-drop">repo</a></dd>
					
					<dt>slip.js</dt>
					<dd>A tiny library for interactive swiping and reordering of elements in lists on touch screens <a href="https://github.com/pornel/slip">repo</a></dd>
				</dl>
				
				<h3>graphics and animation</h3>
				<dl>
					<dt>between</dt>
					<dd>ES6 Proxy-based JavaScript animation library with API similar to Cocoa Animation block <a href="https://github.com/paraboul/between">repo</a></dd>
				</dl>
				
				<h3>event messaging</h3>
				<dl>
					<dt>event-aggregator</dt>
					<dd>A lightweight pub/sub messaging system for app-wide or per-object loosely coupled events. <a href="https://github.com/aurelia/event-aggregator">repo</a></dd>
					
					<dt>mitt</dt>
					<dd>200 byte functional event emitter <a href="https://github.com/developit/mitt">repo</a></dd>
				</dl>
				
				<h3>dependency injection</h3>
				<dl>
					<dt>aurelia DI container</dt>
					<dd>A lightweight, extensible dependency injection container for JavaScript <a href="https://github.com/aurelia/dependency-injection">repo</a></dd>
				</dl>
				
				<h3>preact examples</h3>
				<dl>
					<dt>preact website source</dt>
					<dd><a href="https://github.com/developit/preact-www">repo</a></dd>
				</dl>
				
				<h3>math</h3>
				<dl>
					<dt>monte-carlo-circle</dt>
					<dd>script to estimate Pi and approach it over time <a href="https://github.com/philpl/Monte-Carlo-Circle">repo</a></dd>
					
					<dt>lateration</dt>
					<dd>Node module for calculating a position using distances from points. <a href="https://github.com/philpl/lateration">repo</a></dd>
				</dl>
			</div>
		)
	}
}

export default Stars
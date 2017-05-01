import {h, Component} from 'preact'

class GitFlow extends Component {
	render () {
		return (
			<div>
				<h1>Git Methodology</h1>
				<h2>Before submitting a bug or feature request</h2>
				<p>Capable programmers should always attempt to investigate and fix problems themselves before asking for others to help. Submit a pull request instead of an issue!</p>
				<ul>
					<li>Have you actually read the error message?</li>
					<li>Have you checked for a Troubleshooting wiki/page?</li>
					<li>Have you searched for similar issues?</li>
					<li>Have you updated to the latest stable version of node, npm and the packages you're using?</li>
					<li>Have you checked that it's not a problem with one of the packages you're using, rather than npm itself?</li>
					<li>Have you looked at what's involved in fixing/implementing this yourself?</li>
				</ul>
				<h2>A great bug report contains</h2>
				<ul>
					<li>Context – what were you trying to achieve?</li>
					<li>Detailed steps to reproduce the error from scratch. Try isolating the minimal amount of code needed to reproduce the error.</li>
					<li>A link to the full corresponding log output.</li>
					<li>Evidence you've looked into solving the problem and ideally, a theory on the cause and a possible solution.</li>
				</ul>
				<h2>A great feature request contains</h2>
				<ul>
					<li>The current situation.</li>
					<li>How and why the current situation is problematic.</li>
					<li>A detailed proposal or pull request that demonstrates how the problem could be solved.</li>
					<li>A use case – who needs this feature and why?</li>
					<li>Any caveats.</li>
				</ul>
				<h2>A great pull request contains</h2>
				<ul>
					<li>Minimal changes. Only submit code relevant to the current issue. Other changes should go in new pull requests.</li>
					<li>Minimal commits. Please squash to a single commit before sending your pull request.</li>
					<li>No conflicts. Please rebase off the latest master before submitting.</li>
					<li>Code conforming to the existing conventions and formats. i.e. Please don't reformat whitespace.</li>
					<li>Passing tests. Use existing tests as a reference.</li>
				</ul>
			</div>
		)
	}
}

export default GitFlow
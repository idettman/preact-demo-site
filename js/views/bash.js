import {h, Component} from 'preact'

class Bash extends Component {
	render () {
		return (
			<div>
				<h1>Bash Reference</h1>
				<h2>OSX Terminal</h2>
				<ul className="list-plain">
					<li>
						<h3>Stop a running terminal process</h3>
						<p>
							Ctrl + C<br/>
							Ctrl + Z (suspends)
						</p>
					</li>
					<li>
						<h3>history</h3>
						<p>show command history</p>
					</li>
					<li>
						<h3>top</h3>
						<p>show current processes</p>
					</li>
					<li>
						<h3>touch</h3>
						<p>touch filename.txt</p>
					</li>
					<li>
						<h3>man</h3>
						<code>man kill</code>
					</li>
					<li>
						<h3>show ip address</h3>
						<code>ipconfig getifaddr en0</code>
					</li>
					<li>
						<h3>wget</h3>
						<code>brew install wget</code>
						<code>wget http://google.com</code>
					</li>
					
					<li>
						<h3>flush osx DNS cache</h3>
						<code>sudo killall -HUP mDNSResponder</code>
					</li>
					
					<li>
						<h3>curl</h3>
						<code>curl --proxy http://proxy.com:80 http://site.com:80</code>
						<code>curl -O http://site.com/file.ext</code>
					</li>
					
					<li>
						<h3>nslookup</h3>
						<code>nslookup target.site.net</code>
					</li>
					
					<li>
						<h3>touch</h3>
						<code>touch filename.ext</code>
					</li>
					
					<li>
						<h3>show command history</h3>
						<code>history</code>
					</li>
					
					<li>
						<h3>show current processes</h3>
						<code>top</code>
					</li>
					
					<li>
						<h3>show external IP address</h3>
						<code>curl ipecho.net/plain; echo</code>
					</li>
					
					<li>
						<h3>show network IP address</h3>
						<code>ipconfig getifaddr en0</code>
					</li>
					
					<li>
						<h3>run the last command again</h3>
						<code>!!</code>
						<code>sudo !! (if you forgot sudo on last command)</code>
					</li>
					
					<li>
						<h3>start a simple server in any folder</h3>
						<code>python -m SimpleHTTPServer 8000</code>
					</li>
					
					<li>
						<h3>view file system usage</h3>
						<code>sudo fs_usage</code>
					</li>
					
					<li>
						<h3>copy large folder/file data</h3>
						<code>ditto -V /old/work/ /new/work/</code>
					</li>
				</ul>
			</div>
		)
	}
}

export default Bash
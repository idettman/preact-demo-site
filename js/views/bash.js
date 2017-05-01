import {h, Component} from 'preact'

class Bash extends Component {
	render () {
		return (
			<div className="about">
				<h1>Bash Reference</h1>
				<h2>OSX Terminal</h2>
				<ul>
					<li>
						<h3>Stop a running terminal process</h3>
						<p>Ctrl + C or Ctrl + Z if you want to suspend a process</p>
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
						<a href="http://www.howtoisolve.com/how-to-flush-dns-cache-in-mac-os-x-ei-capitan-10-11-10-10-4/">source page</a>
					</li>
					
					<li>
						<h3>curl</h3>
						<code>curl --proxy http://proxy.com:80 http://target.com:80</code>
						<code>curl -O http://appldnld.apple.com/iTunes11.0.4.dmg</code>
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
						<h4>if you forgot sudo on last command</h4>
						<code>sudo !!</code>
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
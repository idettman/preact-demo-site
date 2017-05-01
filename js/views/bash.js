import {h, Component} from 'preact'

class Bash extends Component {
	render () {
		return (
			<div className="about">
				<article>
					<h3>wget</h3>
					<code>brew install wget</code>
					<code>wget http://google.com</code>
				</article>
				
				<article>
					<h3>flush osx DNS cache</h3>
					<code>sudo killall -HUP mDNSResponder</code>
					<a href="http://www.howtoisolve.com/how-to-flush-dns-cache-in-mac-os-x-ei-capitan-10-11-10-10-4/">source page</a>
				</article>
				
				<article>
					<h3>curl</h3>
					<code>curl --proxy http://proxy.inbcu.com:80 http://matrix.comcastnets.net:8081/nexus/content/groups/public/spy/spymemcached/2.6/</code>
					<code>curl -O http://appldnld.apple.com/iTunes11/091-6058.20130605.Cw321/iTunes11.0.4.dmg</code>
				</article>
				
				<article>
					<h3>nslookup</h3>
					<code>nslookup matrix.comcastnets.net</code>
				</article>
				
				<article>
					<h3>touch</h3>
					<code>touch filename.ext</code>
				</article>
				
				<article>
					<h3>show command history</h3>
					<code>history</code>
				</article>
				
				<article>
					<h3>show current processes</h3>
					<code>top</code>
				</article>
				
				<article>
					<h3>show external IP address</h3>
					<code>curl ipecho.net/plain; echo</code>
				</article>
				
				<article>
					<h3>show network IP address</h3>
					<code>ipconfig getifaddr en0</code>
				</article>
				
				<article>
					<h3>run the last command again</h3>
					<code>!!</code>
					<h4>if you forgot sudo on last command</h4>
					<code>sudo !!</code>
				</article>
				
				<article>
					<h3>start a simple server in any folder</h3>
					<code>python -m SimpleHTTPServer 8000</code>
				</article>
				
				<article>
					<h3>view file system usage</h3>
					<code>sudo fs_usage</code>
				</article>
				
				<article>
					<h3>copy large folder/file data</h3>
					<code>ditto -V /old/work/ /new/work/</code>
				</article>
			</div>
		)
	}
}

export default Bash
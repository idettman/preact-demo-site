const http = require('http')
const url = require('url')
const fs = require('fs')

http.createServer((req, response) => {
	try {
		const requestUrl = url.parse(req.url)
		const filename = (requestUrl.pathname.indexOf('.') === -1) ? 'index.html' : requestUrl.pathname.substring(1)
		
		response.writeHead(200)
		fs.createReadStream(filename).pipe(response)
	}
	catch (e) {
		response.writeHead(500)
		response.end()
		console.log(e.stack)
	}
}).listen(3000)


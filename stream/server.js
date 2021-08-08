const http = require('http');
const fs = require('fs');

const server = http.createServer();

server.on('request', (req, res) => {

	// It first load complete file in memory
	// fs.readFile('./big.file', (err, data) => {
	// 	if(err) throw err;

	// 	res.end(data);
	// })


	const src = fs.createReadStream('./big.file');
	src.pipe(res);
});

server.listen(8000);
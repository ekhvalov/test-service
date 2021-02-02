let http = require('http');

//Create a server
let server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('0.1.3');
});
server.listen(8080); //the server object listens on port 8080
process.on('SIGINT', function () {
    console.log('Exit.');
    server.close();
    process.exit();
});
console.log('Server started');
// setTimeout(function () {
//     server.close();
//     console.log('Timeout');
//     process.exit();
// }, 3000)

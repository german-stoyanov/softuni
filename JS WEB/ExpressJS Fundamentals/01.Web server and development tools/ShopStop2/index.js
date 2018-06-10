const http = require('http');
const port = 3000;
const handlers = require('./handlers/index');

const server = http.createServer(frontControler);
/**
 * 
 * @param {http.ClientRequest} req 
 * @param {http.ClientResponse} res 
 */
function frontControler(req, res) {
    for (const handler of handlers) {
        if (!handler(req, res)) {
            break;
        }
    }
}

server.listen(port);
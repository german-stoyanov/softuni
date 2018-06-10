const http = require('http');
const port = 3000;
const handlers = require('./handlers/index');

let environment = process.env.NODE_ENV || "development";
const config = require("./config/config");
const database = require("./config/database.config");

database(config[environment]);

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
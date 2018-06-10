const fs = require("fs");
const path = require("path");
const url = require("url");

function getContentType(url) {
    let extension = url.split('.').pop();

    if (extension === 'css') {
        return 'text/css';
    } else if (extension === 'ico') {
        return 'image/x-icon';
    } else if (extension === 'jpg' || extension === 'jpeg') {
        return 'image/jpeg';
    } else if (extension === 'png') {
        return 'image/png';
    }

    return '';
}

module.exports = (req, res) => {
    req.pathname = req.pathname || url.parse(req.url).pathname;

    if (req.pathname.startsWith("/content/") && req.method === "GET") {
        let filePath = path.normalize(
            path.join(__dirname, `..${req.pathname}`)
        );

        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(404, {
                    "Content-Type": "text/plain"
                });

                res.write("Resource not found");
                res.end();
                return;
            } else {
                res.writeHead(200, {
                    "Content-Type": getContentType(req.pathname)
                });

                res.write(data);
                res.end();
            }
        });
    } else {
        return true;
    }
}
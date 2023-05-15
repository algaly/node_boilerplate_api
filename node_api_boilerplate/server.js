const env = process.argv[2] || "prod";
require("custom-env").env(env);

const http = require("http");
const app = require("./app");

const port = process.env.PORT || 2145;
console.log(`listening port ${port} base url ${process.env.API_BASE_URL}`);

const server = http.createServer(app);

server.listen(port);

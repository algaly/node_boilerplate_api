var com = require("serialport");
const express = require("express");
const app = express();
var cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const test = require("./routes/test.route");
const { connectionString, getCommand } = require("./constants");

var serialPort = new com.SerialPort(connectionString, false);

var allowHosts = ["http://localhost:5173"];
const corsOptions = {
    origin: (origin, cb) => {
        if (allowHosts.indexOf(req.header("Origin")) !== -1) {
            cb(null, true);
        } else {
            cb(new Error(`CORS error! Attempt to reach API from ${origin}`));
        }
    },
    methods: "POST,GET",
    credentials: true,
};
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "POST, PUT, GET, OPTIONS");
    res.header("Cache-Control", "max-age=864000"); // cache images
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Host ,Authorization");
    next();
});

app.use(cookieParser());
app.use(
    bodyParser.urlencoded({
        extended: false,
    })
);
app.use(bodyParser.json());
app.options("/", cors(corsOptions));

app.use("/api/v_0.0.1/test", test);
module.exports = app;

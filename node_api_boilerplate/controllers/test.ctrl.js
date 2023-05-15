var com = require("serialport");
const { connectionString, getCommand } = require("../constants");
// const connectToDatabase = require("../db").connectToDatabase;
// const ObjectID = require("mongodb").ObjectId;

exports.connectDevice = async (req, res, next) => {
    //var serialPort = new com.SerialPort(connectionString, false);

    return res.status(201).json({ success: true, msg: "successfull api access" });
};

exports.saveToDb = async (req, res, next) => {
    return res.status(201).json({ success: true, msg: "successfull api access" });
};

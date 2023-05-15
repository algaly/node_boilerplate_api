const express = require("express");
const router = express.Router();
const TestController = require("../controllers/test.ctrl.js");

router.get("/savetodb", TestController.saveToDb);
router.get("/connectdevice", TestController.connectDevice);
module.exports = router;

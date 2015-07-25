var express = require("express");
var user = require("./user.controller.js")

var router = express.Router();


router.post('/login',user.login);
router.post('/adduser',user.add);

module.exports = router;
"use strict";
exports.__esModule = true;
var express_1 = require("express");
var dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
var app = (0, express_1["default"])();
var port = process.env.PORT || 3001;
app.get('/api', function (req, res) {
    res.json({
        data: 'Hello World'
    });
});
app.listen(port, function () {
    console.log("\u26A1\uFE0F[server]: Server is running at https://localhost:".concat(port));
});

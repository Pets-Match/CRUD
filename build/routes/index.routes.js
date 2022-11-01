"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var hellowrld_routes_1 = require("./hellowrld.routes");
var router = (0, express_1.Router)();
exports.router = router;
(0, hellowrld_routes_1.hellowrld)(router);

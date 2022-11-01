"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index_routes_1 = require("./routes/index.routes");
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(index_routes_1.router);
app.listen(6666, function () { console.log("😈🔥 Server started at port 6666 🔥😈"); });

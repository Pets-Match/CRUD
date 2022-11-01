"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hellowrld = void 0;
var hellowrld = function (router) {
    router.post("/Hello", function (req, resp) {
        return resp.json({ message: "Hello Wrld!" }).status(200);
    });
};
exports.hellowrld = hellowrld;

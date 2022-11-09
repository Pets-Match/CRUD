"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ownerRoutes = void 0;
var controller_1 = require("../controller");
var create = new controller_1.CreateOwnerController();
// const read = new ReadOwnerController();
var ownerRoutes = function (router) {
    router.post('/owner', create.execute.bind(controller_1.CreateOwnerController));
    // router.get('/all-owner', read.execute.bind(ReadOwnerController))
};
exports.ownerRoutes = ownerRoutes;

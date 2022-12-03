"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.petRoutes = void 0;
var controller_1 = require("../controller");
var create = new controller_1.CreatePetController();
// const read = new ReadPetController();
var petRoutes = function (router) {
    router.post('/pet', create.execute.bind(controller_1.CreatePetController));
    // router.get('/all-pet', read.execute.bind(ReadPetController))
};
exports.petRoutes = petRoutes;

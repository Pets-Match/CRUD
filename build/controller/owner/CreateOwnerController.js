"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOwnerController = void 0;
var prisma_1 = require("../../service/prisma");
var CreateOwnerController = /** @class */ (function () {
    function CreateOwnerController() {
    }
    CreateOwnerController.prototype.execute = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name, phone, zipCode, state, city, neighborhood, street, num, addInfo, id, dogName, age, specie, race, gender, addrAlreadyRegistered, addrId, addr, owner, dog, err_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 7, , 8]);
                        _a = req.body, name = _a.name, phone = _a.phone, zipCode = _a.zipCode, state = _a.state, city = _a.city, neighborhood = _a.neighborhood, street = _a.street, num = _a.num, addInfo = _a.addInfo, id = _a.id, dogName = _a.dogName, age = _a.age, specie = _a.specie, race = _a.race, gender = _a.gender;
                        if (name === undefined || phone === undefined || zipCode === undefined || state === undefined || city === undefined ||
                            neighborhood === undefined || street === undefined || num === undefined || addInfo === undefined || id === undefined || dogName === undefined
                            || age === undefined || specie === undefined || race === undefined || gender === undefined) {
                            console.log('something is wrong');
                        }
                        return [4 /*yield*/, prisma_1.prisma.address.findFirst({
                                where: {
                                    AND: {
                                        zipCode: zipCode,
                                        num: num
                                    }
                                }
                            })];
                    case 1:
                        addrAlreadyRegistered = _b.sent();
                        addrId = undefined;
                        if (!!addrAlreadyRegistered) return [3 /*break*/, 3];
                        return [4 /*yield*/, prisma_1.prisma.address.create({
                                data: {
                                    zipCode: zipCode,
                                    state: state,
                                    city: city,
                                    neighborhood: neighborhood,
                                    street: street,
                                    num: num,
                                    addInfo: addInfo,
                                }
                            })];
                    case 2:
                        addr = _b.sent();
                        addrId = addr.id;
                        return [3 /*break*/, 4];
                    case 3:
                        addrId = addrAlreadyRegistered.id;
                        _b.label = 4;
                    case 4: return [4 /*yield*/, prisma_1.prisma.owner.create({
                            data: {
                                id: id,
                                name: name,
                                phone: phone,
                                addressId: addrId,
                            }
                        })];
                    case 5:
                        owner = _b.sent();
                        return [4 /*yield*/, prisma_1.prisma.pet.create({
                                data: {
                                    name: dogName,
                                    age: age,
                                    specie: specie,
                                    race: race,
                                    gender: gender,
                                    ownerId: id
                                }
                            })];
                    case 6:
                        dog = _b.sent();
                        return [2 /*return*/, res.status(200).json({ owner: owner, dog: dog })];
                    case 7:
                        err_1 = _b.sent();
                        return [2 /*return*/, res.status(400).json(err_1.message)];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    return CreateOwnerController;
}());
exports.CreateOwnerController = CreateOwnerController;

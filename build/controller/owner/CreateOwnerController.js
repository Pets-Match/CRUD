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
var bcryptjs_1 = require("bcryptjs");
var CreateOwnerController = /** @class */ (function () {
    function CreateOwnerController() {
    }
    CreateOwnerController.prototype.execute = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name, email, password, doc, phone, zipCode, state, city, neighborhood, street, num, addInfo, ownerAlreadyRegistered, hashPassword, addr, err_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 5, , 6]);
                        _a = req.body, name = _a.name, email = _a.email, password = _a.password, doc = _a.doc, phone = _a.phone, zipCode = _a.zipCode, state = _a.state, city = _a.city, neighborhood = _a.neighborhood, street = _a.street, num = _a.num, addInfo = _a.addInfo;
                        return [4 /*yield*/, prisma_1.prisma.owner.findFirst({
                                where: {
                                    OR: [
                                        { email: { equals: email } },
                                        { doc: { equals: doc } }
                                    ]
                                }
                            })];
                    case 1:
                        ownerAlreadyRegistered = _b.sent();
                        if (ownerAlreadyRegistered) {
                            throw new Error('Conta já cadastrada!');
                        }
                        return [4 /*yield*/, (0, bcryptjs_1.hash)(password, 7)];
                    case 2:
                        hashPassword = _b.sent();
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
                    case 3:
                        addr = _b.sent();
                        return [4 /*yield*/, prisma_1.prisma.owner.create({
                                data: {
                                    name: name,
                                    email: email,
                                    password: hashPassword,
                                    doc: doc,
                                    phone: phone,
                                    addressId: addr.id,
                                }
                            })];
                    case 4:
                        _b.sent();
                        return [2 /*return*/, res.status(200).json()];
                    case 5:
                        err_1 = _b.sent();
                        return [2 /*return*/, res.status(400).json(err_1)];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    return CreateOwnerController;
}());
exports.CreateOwnerController = CreateOwnerController;

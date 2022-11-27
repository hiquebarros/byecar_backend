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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
const mockedData_1 = require("./mockedData");
describe("Testing authorization", () => {
    test("Should be able to retrieve an user", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default)
            .get("/")
            .set('Authorization', `Bearer ${mockedData_1.correctToken}`);
        expect(response.body.name).toBe('Henrique');
        expect(response.status).toBe(200);
    }));
    test("Should not be able to retrieve user without token", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default)
            .get("/");
        expect(response.body.message).toBe('Token not found');
        expect(response.status).toBe(401);
    }));
    test("Should not be able to retrieve user with empty payload token", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default)
            .get("/")
            .set('Authorization', `Bearer ${mockedData_1.emptyPayloadToken}`);
        expect(response.body.message).toBe('Invalid token');
        expect(response.status).toBe(401);
    }));
    test("Should not be able to retrieve user without broken token", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default)
            .get("/")
            .set('Authorization', `Bearer ${mockedData_1.wrongSecretKeyToken}`);
        expect(response.body.message).toBe('Invalid token');
        expect(response.status).toBe(401);
    }));
});

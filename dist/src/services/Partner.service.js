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
const AppError_1 = require("../errors/AppError");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var clients = require("../../clients.json");
class PartnerService {
    constructor() {
        //Simulação do sistema de authenticação da API do parceiro
        this.partnerApiTokenValidator = (propToken) => {
            if (!propToken)
                throw new AppError_1.AppError("Token not found", 401);
            const token = propToken.split(" ")[1];
            jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY, (error, decoded) => {
                if (error)
                    throw new AppError_1.AppError("Invalid token", 401);
            });
            const decode = jsonwebtoken_1.default.decode(token);
            return decode;
        };
        //Requisição fake
        this.fakeApiRetrieve = (token) => __awaiter(this, void 0, void 0, function* () {
            const client = new Promise((resolve, reject) => {
                const decoded = this.partnerApiTokenValidator(token);
                const client = clients.find((item) => {
                    return item.id === decoded.id;
                });
                if (!client)
                    throw new AppError_1.AppError("Invalid token", 401);
                //Simulando delay da api
                setTimeout(() => {
                    return resolve(client);
                }, 1000);
            });
            return client;
        });
        //Função de chamada da API do parceiro
        this.callApiFunction = (token) => __awaiter(this, void 0, void 0, function* () {
            try {
                const client = yield this.fakeApiRetrieve(token);
                return client;
            }
            catch (error) {
                throw new AppError_1.AppError(error.message, error.statusCode);
            }
        });
        //Serviço que é chamado pelo controller
        this.getUserFromPartner = (token) => __awaiter(this, void 0, void 0, function* () {
            const client = this.callApiFunction(token);
            return client;
        });
    }
}
exports.default = PartnerService;

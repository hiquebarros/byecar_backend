"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
require("reflect-metadata");
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const handleAppError_middleware_1 = __importDefault(require("./middlewares/handleAppError.middleware"));
const partner_1 = __importDefault(require("./routes/partner"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/", partner_1.default);
app.use(handleAppError_middleware_1.default);
exports.default = app;

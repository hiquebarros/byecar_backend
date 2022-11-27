"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Partner_controller_1 = __importDefault(require("../controllers/Partner.controller"));
const PartnerRouter = (0, express_1.Router)();
PartnerRouter.get("", Partner_controller_1.default.getUserFromPartner);
exports.default = PartnerRouter;

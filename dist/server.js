"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PORT = 3000;
const staticDir = __dirname;
const app = express_1.default();
app.use(express_1.default.static(staticDir));
app.listen(PORT, function () {
    console.log(`listening on port ${PORT}`);
});

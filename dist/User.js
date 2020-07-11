"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = __importDefault(require("faker"));
class User {
    constructor() {
        this.name = faker_1.default.name.firstName();
        this.location = {
            lat: parseFloat(faker_1.default.address.latitude()),
            long: parseFloat(faker_1.default.address.longitude()),
        };
    }
}

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = void 0;
const chalk_1 = __importDefault(require("chalk"));
function log(message, level = "info") {
    const now = new Date();
    const timestamp = now.toISOString();
    let levelTag = "";
    let color;
    switch (level) {
        case "info":
            levelTag = "INFO";
            color = chalk_1.default.greenBright;
            break;
        case "warn":
            levelTag = "WARN";
            color = chalk_1.default.yellowBright;
            break;
        case "error":
            levelTag = "ERROR";
            color = chalk_1.default.redBright;
            break;
        default:
            levelTag = "INFO";
            color = chalk_1.default.greenBright;
            break;
    }
    const logMessage = `[${timestamp}] [${levelTag}] ${message}`;
    console.log(color(logMessage));
}
exports.log = log;

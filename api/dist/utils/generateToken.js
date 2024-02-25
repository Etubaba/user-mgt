"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
const config_1 = require("../config");
const jwt = require("jsonwebtoken");
async function generateToken(email, type) {
    const config = (0, config_1.default)();
    const expiresIn = config.jwt[type].signInOptions.expiresIn;
    const token = jwt.sign({ email }, config.jwt[type].secret, {
        expiresIn,
    });
    return token;
}
exports.generateToken = generateToken;
//# sourceMappingURL=generateToken.js.map
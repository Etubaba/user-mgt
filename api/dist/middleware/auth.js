"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = exports.SECRET_KEY = void 0;
const jwt = require("jsonwebtoken");
const config_1 = require("../config");
exports.SECRET_KEY = (0, config_1.default)().jwt.access.secret;
const authenticate = async (req, res, next) => {
    var _a;
    try {
        const token = (_a = req.header("Authorization")) === null || _a === void 0 ? void 0 : _a.replace("Bearer ", "");
        if (!token) {
            throw new Error();
        }
        jwt.verify(token, exports.SECRET_KEY, (err, decoded) => {
            if (err) {
                return res
                    .status(403)
                    .json({ statusCode: 403, message: "Invalid or expired token." });
            }
            req.user = decoded;
            next();
        });
    }
    catch (err) {
        console.log(err.message);
        res.status(401).json({ statusCode: 401, msg: "Authorization needed" });
    }
};
exports.authenticate = authenticate;
//# sourceMappingURL=auth.js.map
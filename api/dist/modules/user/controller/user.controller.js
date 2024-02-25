"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshToken = exports.loginUser = exports.createUser = exports.editUser = void 0;
const user_1 = require("../models/user");
const argon = require("argon2");
const generateToken_1 = require("../../../utils/generateToken");
const jwt = require("jsonwebtoken");
const config_1 = require("../../../config");
const createUser = async (req, res) => {
    try {
        const dto = req.body;
        const { password, email } = dto, rest = __rest(dto, ["password", "email"]);
        const user = await user_1.default.findOne({
            email: email,
        });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }
        const hashedPassword = await argon.hash(password);
        const newUser = await user_1.default.create(Object.assign({ email, password: hashedPassword }, rest));
        delete newUser.password;
        return res.status(201).json(newUser);
    }
    catch (err) {
        return res.status(500).json({ message: "Error Occour: " + err.message });
    }
};
exports.createUser = createUser;
const editUser = async (req, res) => {
    try {
        const id = req.params.id;
        const userData = req.body;
        const user = await user_1.default.findById(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const updatedUser = await user_1.default.findByIdAndUpdate(id, Object.assign({}, userData));
        return res.json({
            user: updatedUser,
        });
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
};
exports.editUser = editUser;
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await user_1.default.findOne({
            email,
        });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const isPasswordCorrect = await argon.verify(user.password, password);
        if (!isPasswordCorrect) {
            return res.status(401).json({ message: `User password is incorrect` });
        }
        const [accessToken, refreshToken] = await Promise.all([
            (0, generateToken_1.generateToken)(user.email, "access"),
            (0, generateToken_1.generateToken)(user.email, "refresh"),
        ]);
        delete user.password;
        return res.json({ user, accessToken, refreshToken });
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
};
exports.loginUser = loginUser;
const refreshToken = async (req, res) => {
    const { token } = req.body;
    try {
        let decoded;
        try {
            decoded = jwt.verify(token, (0, config_1.default)().jwt.refresh.secret);
        }
        catch (error) {
            throw new Error("Invalid token");
        }
        let userEmail;
        if (typeof decoded === "string") {
            userEmail = undefined;
            throw new Error("Invalid token");
        }
        else {
            userEmail = decoded.email;
        }
        const user = await user_1.default.findOne({
            where: {
                email: userEmail,
            },
        });
        const [accessToken, newRefreshToken] = await Promise.all([
            (0, generateToken_1.generateToken)(user.email, "access"),
            (0, generateToken_1.generateToken)(user.email, "refresh"),
        ]);
        delete user.password;
        res.status(200).json({
            user,
            accessToken,
            refreshToken: newRefreshToken,
        });
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
};
exports.refreshToken = refreshToken;
//# sourceMappingURL=user.controller.js.map
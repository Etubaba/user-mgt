"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controller/user.controller");
const update_user_dto_1 = require("../dto/update-user.dto");
const create_user_dto_1 = require("../dto/create-user.dto");
const validateDto_1 = require("../../../middleware/validateDto");
const auth_1 = require("../../../middleware/auth");
const computeLevels_1 = require("../../../middleware/computeLevels");
const login_dto_1 = require("../dto/login.dto");
const user_1 = require("../models/user");
const validateToken_dto_1 = require("../dto/validateToken.dto");
const router = (0, express_1.Router)();
const basePath = "/user/";
router.post(`${basePath}register`, (0, validateDto_1.validateDto)(create_user_dto_1.CreateUserDto), computeLevels_1.computeLevels, user_controller_1.createUser);
router.put(`${basePath}update/:id`, (0, validateDto_1.validateDto)(update_user_dto_1.UpdateUserDto), auth_1.authenticate, computeLevels_1.computeLevels, user_controller_1.editUser);
router.post(`${basePath}login`, (0, validateDto_1.validateDto)(login_dto_1.LoginDTO), user_controller_1.loginUser);
router.post(`/token/validte`, (0, validateDto_1.validateDto)(validateToken_dto_1.ValidateTokenDto), user_controller_1.refreshToken);
router.delete("/delete", async (req, res) => {
    const deleteUser = await user_1.default.findByIdAndDelete("65d50f06faa8a2c23c3ca2a9");
    res.json(deleteUser);
});
router.get("/user/:id", async (req, res) => {
    const user = await user_1.default.findById(req.params.id);
    res.json({ user, lvl: user.level2 });
});
exports.default = router;
//# sourceMappingURL=index.js.map
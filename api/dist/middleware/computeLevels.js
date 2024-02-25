"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeLevels = void 0;
const user_1 = require("../modules/user/models/user");
const error_1 = require("../utils/error");
const computeLevels = async (req, res, next) => {
    try {
        const body = req.body;
        if (!body.gebracht_von_lvl1) {
            next();
        }
        const broughtByUser = await user_1.default.findById(body.gebracht_von_lvl1);
        if (body.gebracht_von_lvl1 && !broughtByUser) {
            next(new error_1.HttpException(400, "Gebracht von user not found"));
        }
        if (broughtByUser.gebracht_von_lvl1) {
            const lvl1User = await user_1.default.findById(broughtByUser.gebracht_von_lvl1);
            broughtByUser.level2 = lvl1User.gebracht_von_lvl1;
            if (lvl1User === null || lvl1User === void 0 ? void 0 : lvl1User.gebracht_von_lvl1) {
                const thirdGradeUser = await user_1.default.findById(lvl1User.gebracht_von_lvl1);
                broughtByUser.level3 = thirdGradeUser === null || thirdGradeUser === void 0 ? void 0 : thirdGradeUser.gebracht_von_lvl1;
            }
            else {
                broughtByUser.level3 = null;
            }
        }
        else {
            broughtByUser.level3 = null;
            broughtByUser.level2 = null;
        }
        await broughtByUser.save();
        next();
    }
    catch (err) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};
exports.computeLevels = computeLevels;
//# sourceMappingURL=computeLevels.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const error_1 = require("../utils/error");
const validateDto = (type, skipMissingProperties = false, whitelist = true, forbidNonWhitelisted = false) => {
    return (req, res, next) => {
        const dto = (0, class_transformer_1.plainToInstance)(type, req.body);
        (0, class_validator_1.validateOrReject)(dto, {
            skipMissingProperties,
            whitelist,
            forbidNonWhitelisted,
        })
            .then(() => {
            req.body = dto;
            next();
        })
            .catch((errors) => {
            const message = errors
                .map((error) => Object.values(error.constraints))
                .flatMap((messages) => messages.join(","));
            res.status(400).json({ statusCode: 400, message });
            next(new error_1.HttpException(400, message.join(",")));
        });
    };
};
exports.validateDto = validateDto;
//# sourceMappingURL=validateDto.js.map
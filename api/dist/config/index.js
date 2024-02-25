"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
dotenv.config();
exports.default = () => ({
    app: {
        environment: process.env.APP_ENV === "production" ? "production" : process.env.APP_ENV,
        port: parseInt(process.env.APP_PORT, 10) || 4000,
        DB_URL: process.env.DATABASE_URL,
    },
    jwt: {
        access: {
            secret: process.env.JWT_SECRET,
            signInOptions: {
                expiresIn: process.env.JWT_ACCESS_EXPIRES_IN,
            },
        },
        refresh: {
            secret: process.env.JWT_SECRET,
            signInOptions: {
                expiresIn: process.env.JWT_REFRESH_EXPIRES_IN,
            },
        },
    },
    cors: {
        origin: process.env.CORS_ORIGIN || "*",
        methods: process.env.CORS_METHODS || "GET,HEAD,PUT,PATCH,POST,DELETE",
        headers: process.env.CORS_HEADERS || "*",
    },
});
//# sourceMappingURL=index.js.map
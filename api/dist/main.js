"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const db_1 = require("./config/db");
const config_1 = require("./config");
const routes_1 = require("./modules/user/routes");
const app = express();
(0, db_1.default)();
const configRepo = (0, config_1.default)();
const port = configRepo.app.port;
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors({ origin: configRepo.cors.origin, methods: configRepo.cors.methods }));
app.use("/", routes_1.default);
app.listen(port, () => {
    console.log(`Server running on ${port}`);
});
//# sourceMappingURL=main.js.map
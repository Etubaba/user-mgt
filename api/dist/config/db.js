"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const index_1 = require("./index");
const connectDB = async () => {
    const config = (0, index_1.default)();
    try {
        const config = (0, index_1.default)();
        await mongoose_1.default.connect(config.app.DB_URL, {});
        console.log(`🚀 Database Connected==🔗🔗🔗🔗==>`);
    }
    catch (err) {
        console.error(`Error: ${err} `);
        process.exit(1);
    }
};
exports.default = connectDB;
//# sourceMappingURL=db.js.map
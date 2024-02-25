import mongoose from "mongoose";
import configuration from "./index";

const connectDB = async () => {
  const config = configuration();
  try {
    const config = configuration();
    await mongoose.connect(config.app.DB_URL, {});
    console.log(`🚀 Database Connected==🔗🔗🔗🔗==>`);
  } catch (err) {
    console.error(`Error: ${err} `);
    process.exit(1);
  }
};

export default connectDB;

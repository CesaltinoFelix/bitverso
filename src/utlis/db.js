import mongoose from "mongoose";

const connect = async () => {
  try {
    mongoose.connect(process.env.MONGO);
  } catch (error) {
    throw new Error("Could not connect to database");
  }
};

export default connect;

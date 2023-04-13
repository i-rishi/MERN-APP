import mongoose from "mongoose";

const connection = async () => {
  try {
    const URL = ``;
    await mongoose.connect(URL);
    console.log("Database connected Successfully");
  } catch (error) {}
};

export default connection;

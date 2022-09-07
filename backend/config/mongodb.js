import mongoose from "mongoose";

const connectToDataBase = () => {
  try {
    const connection = mongoose.connect(process.env.MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log("Mongo dB Connected", connection);
  } catch (error) {
    console.error(`Error:, ${error?.message}`);
    // throw new Error(`Error:, ${error.message}`);
    process.exit(1);
  }
};

export default connectToDataBase;

import mongoose from "mongoose";

const connectToDataBase = () => {
  try {
    const connect =  mongoose.connect(process.env.MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log("Mongo dB Connected");
  } catch (error) {
    console.error(`Error:, ${error.message}`);
    process.exit(1);
  }
};

export default connectToDataBase;

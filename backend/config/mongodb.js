import mongoose from "mongoose";

const connectToDataBase = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });

    console.log("Mong dB Connected")
  } catch (error) {
    console.error(`Error:, ${erro.r.message}`)
    process.exit(1)
  }
}

export default connectToDataBase;
import mongoose from "mongoose";

const database = async () => {
  await mongoose.connect(
    "mongodb+srv://akash:akashhalli@hackathon.m075a.mongodb.net/?retryWrites=true&w=majority&appName=Hackathon/hackathon"
  );
};

export default database;

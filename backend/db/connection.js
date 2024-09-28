import mongoose from "mongoose";

const connection = await mongoose.connect(
  "mongodb+srv://gavhanebhairu7:1RtxMNTvN5HoM2uE@cluster0.48fq0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);
if (connection) {
  console.log("Connection successful !");
} else {
  console.log("failed to connect");
}

export default connection;

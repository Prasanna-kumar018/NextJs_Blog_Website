import mongoose from "mongoose";
const connection = {};
const ConnectDb = async () => {

  try {
    if (connection.isConnected) {
      console.log("Using Existing Connection");
      return;
    }
    const db = await mongoose.connect(process.env.CONNECTION_STRING);
    connection.isConnected = db.connections[0].readyState;
    if (connection.isConnected) {
      console.log("Connection Established");
    }
  }
  catch (err) {
    console.log(err.message);
  }
};

export default ConnectDb;

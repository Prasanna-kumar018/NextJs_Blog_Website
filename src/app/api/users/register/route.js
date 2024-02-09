"use server";
import ConnectDb from "@/lib/Connection";
import { Users_Model } from "@/lib/Schema/User_Schema";
import { NextResponse } from "next/server";
const POST = async (request, { params }) => {
  await ConnectDb();
  try {
    let data = await request.json();
    let email = await Users_Model.findOne({ email: data.email });
    if (email) {
      return NextResponse.json({
        title: "error",
        message: "Email Already Exists...",
      });
    }
    let res = await Users_Model.create(data);
    console.log(res);
    return NextResponse.json(res);
  } catch (err) {
    console.log(err.message);
    return NextResponse.json({
      messsage: "error",
      title: "Internal Server Error",
    });
  }
};
module.exports = { POST };

"use server";
const bcrypt = require("bcryptjs");
const fetchthedata = async (data) => {
  let datas = data;
   let password = await bcrypt.hash(data.password, 10);
  try {
    let res = await fetch(
      "http://localhost:3000/api/users/register",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          username: datas.username,
          password,
          email: datas.email,
          isAdmin: datas.isAdmin ? datas.isAdmin : false,
        }),
      },
      { cache: "no-store" }
    );
    let data = await res.json();
    return data;
  } catch (err) {
    return {
      title: "Error",
      message: err.message,
    };
  }
};
export { fetchthedata };

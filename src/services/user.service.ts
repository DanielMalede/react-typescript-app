import Iuser from "../models/userModel";
const API: string =
  "https://my-json-server.typicode.com/Jeck99/fake-server/users";
export const getUser = async () => {
  try {
    return await fetch(API)
      .then((res) => res.json())
      .then((res) => console.log(res));
  } catch (err) {
    console.log(err);
  }
};

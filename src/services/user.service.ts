import Iuser from "../models/userModel";
const API: string =
  "https://opensky-network.org/api";
export const getUser = async (): Promise<any> => {
  try {
    return await fetch(API)
      .then((res: Response) => res.json())
      .then((result) => console.log(result)
      );
  } catch (err) {
    console.log(err);
    
  }
};

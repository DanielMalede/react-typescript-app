import { getUser } from "../../../services/user.service";
import "./Home.css";
import Iuser from "../../../models/userModel";
function Home() {
  const printHome = (num1: number, num2: number): string => {
    return "Hello World";
  };
  getUser().then((users:Iuser[])=>{
    for (const key in users) {
      
    }
  }) 
  return (
    <div className="home">
      <h1>Home</h1>
      {printHome(1, 2)}
    </div>
  );
}

export default Home;

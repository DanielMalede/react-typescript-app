import "./Home.css";
// import Iuser from "../../../models/userModel";
function Home() {
  const printHome =(num1:number,num2:number):string => {
    return "Hello World"
  }
  // const newUser:Iuser  
  return (
    <div className="home">
      <h1>Home</h1>
      {printHome(1,2)}
    </div>
  );
};

export default Home;

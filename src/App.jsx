import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [advice, setAdvice] = useState();

  useEffect(() => {
   const fetchData = async () => {
     try {
       const response = await axios.get("https://api.adviceslip.com/advice");
       setAdvice(response.data.slip);
       console.log(response.data.slip); 
     } catch (error) {
       console.error(error);
     }
   };

   fetchData();
  }, []);

  const generateAdvice = async () => {
    try {
       await axios
         .get("https://api.adviceslip.com/advice")
         .then((res) => setAdvice(res.data.slip))
         .catch((err) => {
           console.log(err);
         });
    } catch (error) {
      console.log(error);
    }
 
  };

  return (
    <div className=" w-full h-screen flex justify-center items-center">
      <div className=" flex flex-col items-center w-[80%] rounded-3xl shadow-lg sm:w-[700px] h-[400px] bg-[#313a49]">
        <span className="cursor-default mt-3 mb-8 text-[12px] text-green-600">
          Advice #{advice?.id}
        </span>

        <div className="border-[1px] mb-5 flex justify-center items-center px-4 text-center  border-white rounded-md w-[80%] h-[50%] ">
          <p className="text-2xl cursor-default text-white">
            "{advice?.advice}"
          </p>
        </div>

        <div className="w-[80%]   ">
          <img
            className="w-full"
            src="images/pattern-divider-desktop.svg"
            alt="pattern-divider"
          />
        </div>

        <div
          onClick={generateAdvice}
          className="relative cursor-pointer -bottom-[80px] hover:bg-slate-500 sm:-bottom-[70px]  h-[50px] w-[50px] rounded-full flex justify-center items-center bg-green-400 "
        >
          <img className="w-6 h-6" src="images/icon-dice.svg" alt="icon-dice" />
        </div>
      </div>
    </div>
  );
}

export default App;

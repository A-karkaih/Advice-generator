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
      <div className=" flex flex-col items-center     w-[80%] rounded-md shadow-lg sm:w-[500px] h-[300px] bg-[#313a49]">
        <span className="cursor-default mt-3 mb-8 text-[12px] text-green-600">
          Advice {advice?.id}
        </span>

        <div className="border-[1px] mb-5 flex justify-center items-center px-4 text-center  border-white rounded-md w-[80%] h-[40%] ">
          <p className="text-sm cursor-default text-white">{advice?.advice}</p>
        </div>

        <div className="w-[80%]  ">
          <img src="images/pattern-divider-desktop.svg" alt="pattern-divider" />
        </div>

        <div
          onClick={generateAdvice}
          className="relative cursor-pointer hover:bg-slate-500 -bottom-[65px]  h-10 w-10 rounded-full flex justify-center items-center bg-green-400 "
        >
          <img className="w-4 h-4" src="images/icon-dice.svg" alt="icon-dice" />
        </div>
      </div>
    </div>
  );
}

export default App;

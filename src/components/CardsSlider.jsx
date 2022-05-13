// import Swiper core and required modules
import React from "react";
import EmployeeImage from "../assets/profile.png";
const CardsSlider = () => {
  return (
    <div className="mt-10 mb-10 flex gap-5">
      <div
        className={`border-4 w-48 h-52 rounded-xl p-5 border-red-400   shadow-md bg-white `}
      >
        <div className={`p-2 bg-red-400  w-fit rounded-full ml-auto`}></div>
        <img src={EmployeeImage} width="60px" className="mt-5"></img>
        <div className="text-xl mt-2 font-semibold">Sahbi Ouael</div>
        <div className={`text-red-400 text-sm`}>Critique Case</div>
      </div>
      <div
        className={`border-4 w-48 h-52 rounded-xl p-5 border-orange-400   shadow-md bg-white `}
      >
        <div
          className={`p-2 bg-orange-400    w-fit rounded-full ml-auto`}
        ></div>
        <img src={EmployeeImage} width="60px" className="mt-5"></img>
        <div className="text-xl mt-2 font-semibold">Sahbi Ouael</div>
        <div className={`text-orange-400   text-sm`}>Critique Case</div>
      </div>
      <div
        className={`border-4 w-48 h-52 rounded-xl p-5 border-green-400   shadow-md bg-white `}
      >
        <div
          className={`p-2 red-400 bg-green-400   w-fit rounded-full ml-auto`}
        ></div>
        <img src={EmployeeImage} width="60px" className="mt-5"></img>
        <div className="text-xl mt-2 font-semibold">Sahbi Ouael</div>
        <div className={`text-green-400   text-sm`}>Critique Case</div>
      </div>
      <div
        className={`border-4 w-48 h-52 rounded-xl p-5 border-red-400   shadow-md bg-white `}
      >
        <div className={`p-2 bg-red-400    w-fit rounded-full ml-auto`}></div>
        <img src={EmployeeImage} width="60px" className="mt-5"></img>
        <div className="text-xl mt-2 font-semibold">Sahbi Ouael</div>
        <div className={`text-red-400   text-sm`}>Critique Case</div>
      </div>
      <div
        className={`border-4 w-48 h-52 rounded-xl p-5 border-green-400   shadow-md bg-white `}
      >
        <div className={`p-2 bg-green-400    w-fit rounded-full ml-auto`}></div>
        <img src={EmployeeImage} width="60px" className="mt-5"></img>
        <div className="text-xl mt-2 font-semibold">Sahbi Ouael</div>
        <div className={`text-green-400   text-sm`}>Critique Case</div>
      </div>
    </div>
  );
};

export default CardsSlider;

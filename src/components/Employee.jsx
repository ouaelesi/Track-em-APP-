import React from "react";
import profilImg from "../assets/profile.png";

const Employee = () => {
  return (
    <div className="flex justify-between my-2">
      <div className="flex gap-4">
        <img src={profilImg} width="60px"></img>
        <div>
          <div className="font-semibold text-xl mt-1">Sahbi Ouael</div>
          <div className="text-gray-500 text-sm">Critique Case</div>
        </div>
      </div>
      <div className="flex gap-20 mt-3">
        <div className="text-gray-400">Productivity</div>
        <div className="text-blue-400">80%</div>
      </div>
    </div>
  );
};

export default Employee;

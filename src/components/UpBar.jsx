import React, { useState } from "react";

const UpBar = () => {
  const [activeProblem, setProblem] = useState(1);
  const problems = ["Burnout", "Depression", "Anxity"];

  return (
    <div className="flex w-fit bg-sidebar  rounded-2xl mx-auto gap-14 justify-around px-10 mt-5 py-1">
      {problems.map((problem, key) => (
        <div
          className={`cursor-pointer px-4 py-1 rounded-full ${
            key === activeProblem ? "bg-white text-blue-500" : "bg-transparant"
          }`}
          key={key}
          onClick={() => setProblem(key)}
        >
          {problem}
        </div>
      ))}
    </div>
  );
};

export default UpBar;

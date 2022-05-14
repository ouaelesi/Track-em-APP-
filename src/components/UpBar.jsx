import React, { useState } from "react";
import PropTypes from "prop-types";

const UpBar = (props) => {
  const [activeProblem, setProblem] = useState(0);
  const problems = ["Day", "Week", "Month", "Year"];

  return (
    <div className="flex w-fit bg-sidebar  rounded-2xl mx-auto gap-14 justify-around px-10 mt-5 py-1">
      {problems.map((problem, key) => (
        <div
          className={`cursor-pointer px-4 py-1 text-sm rounded-full ${
            key === activeProblem ? "bg-white text-blue-500" : "bg-transparant"
          }`}
          key={key}
          onClick={() => {
            setProblem(key);
            props.setType(key);
          }}
        >
          {problem}
        </div>
      ))}
    </div>
  );
};
UpBar.propTypes = {
  setType: PropTypes.func,
};
export default UpBar;

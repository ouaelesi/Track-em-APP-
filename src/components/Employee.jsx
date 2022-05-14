import React from "react";
import profilImg from "../assets/profile.png";
import PropTypes from "prop-types";

const Employee = (props) => {
  return (
    <div className="flex justify-between my-2">
      <div className="flex gap-4">
        <img src={profilImg} width="60px"></img>
        <div>
          <div className="font-semibold text-xl mt-1">{props.data.name}</div>
          <div className="text-gray-500 text-sm">{props.data.state} Case</div>
        </div>
      </div>
      <div className="flex gap-20 mt-3">
        <div className="text-gray-400">Productivity</div>
        <div className="text-blue-400">{props.data.productivity[0]}%</div>
      </div>
    </div>
  );
};
Employee.propTypes = {
  data: PropTypes.object,
};

export default Employee;

import React from "react";
import Donut from "../components/Donut";
import PropTypes from "prop-types";

const ProblCards = (props) => {
  return (
    <div className="w-32 px-5  py-2 h-fit relative    bg-white border-2 border-gray-200 rounded-xl shadow-sm mt-2 shadow-blue-100">
      <div className="p-1 my-2">
        <Donut color={props.color} />
      </div>

      <div className="text-center text-gray-400">Danger of</div>
      <div className="font-bold text-center text-sm">Burnout</div>
      <div className="absolute top-12 pt-2 left-12 text-sm font-semibold">
        70%
      </div>
    </div>
  );
};
ProblCards.propTypes = {
  color: PropTypes.string,
};

export default ProblCards;

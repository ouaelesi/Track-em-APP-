import React from "react";
import Donut from "../components/Donut";
import PropTypes from "prop-types";

const StatsCard = (props) => {
  return (
    <div className="w-60 px-6  py-9 relative    bg-white border-2 border-gray-200 rounded-xl shadow-sm mt-2 shadow-blue-100">
      <div className="px-4 my-2">
        <Donut pourcetage={props.data.Productivity[props.statType]} />
      </div>

      <div className="text-center text-gray-400">Degree of</div>
      <div className="font-bold text-center text-xl">Productivity</div>
      <div className="absolute top-24 pt-4 left-24 text-2xl font-bold">
        {props.data.Productivity[props.statType]}%
      </div>
    </div>
  );
};
StatsCard.propTypes = {
  data: PropTypes.object,
  statType: PropTypes.number,
};
export default StatsCard;

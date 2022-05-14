import React from "react";
import Donut from "../components/Donut";
import PropTypes from "prop-types";

const ProblCards = (props) => {
  const prob = ["Burnout", "Depression", "Exiety"];
  let type;
  switch (props.type) {
    case 0:
      type = props.data.day;
      break;
    case 1:
      type = props.data.week;
      break;
    case 2:
      type = props.data.month;
      break;
    case 3:
      type = props.data.year;
      break;
  }
  return (
    <div className="w-32 px-5  py-2 h-fit relative bg-white border-2 border-gray-200 rounded-xl shadow-sm mt-2 shadow-blue-100">
      <div className="p-1 my-2">
        <Donut color={props.color} pourcetage={type[props._key]} />
      </div>

      <div className="text-center text-gray-400">Danger of</div>
      <div className="font-bold text-center text-sm">{prob[props._key]}</div>
      <div className="absolute top-12 pt-1 left-12 text-sm font-semibold">
        {type[props._key]}%
      </div>
    </div>
  );
};
ProblCards.propTypes = {
  color: PropTypes.string,
  data: PropTypes.object,
  _key: PropTypes.number,
  type: PropTypes.number,
};

export default ProblCards;

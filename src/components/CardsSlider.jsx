// import Swiper core and required modules
import React from "react";
import EmployeeCard from "./EmployeeCard";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CardsSlider = (props) => {
  return (
    <div className="mt-10 mb-10 flex gap-5">
      {props.data.map((emp) => (
        <Link to={`/users/${emp._id}`} key={emp._id}>
          <EmployeeCard employee={emp} />
        </Link>
      ))}
    </div>
  );
};
CardsSlider.propTypes = {
  data: PropTypes.array,
};

export default CardsSlider;

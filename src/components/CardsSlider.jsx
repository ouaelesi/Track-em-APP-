// import Swiper core and required modules
import React from "react";

import EmployeeCard from "./EmployeeCard";
const CardsSlider = () => {
  return (
    <div className="mt-10 mb-10 flex gap-5">
      <EmployeeCard color="red-400" />
      <EmployeeCard color="green-400" />
      <EmployeeCard color="orange-400" />
      <EmployeeCard color="red-400" />
      <EmployeeCard color="green-400" />
    </div>
  );
};

export default CardsSlider;

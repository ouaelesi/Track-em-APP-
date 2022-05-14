import React from "react";
import Employee from "./Employee";

import PropTypes from "prop-types";

const EmpScroller = (props) => {
  return (
    <div className="w-9/12 mx-auto">
      {props.data.map((emp, key) => (
        <div key={key}>
          <Employee data={emp} />
          <hr />
        </div>
      ))}
    </div>
  );
};

EmpScroller.propTypes = {
  data: PropTypes.object,
};
export default EmpScroller;

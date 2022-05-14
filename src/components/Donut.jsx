import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import PropTypes from "prop-types";

Chart.register(ArcElement);

export default function App(props) {
  const data = {
    datasets: [
      {
        data: [30, 70],
        backgroundColor: ["#FFFFFF00", props.color],
        hoverBackgroundColor: ["#FFFFFF00", props.color],
        borderWidth: 0.5,
      },
    ],
  };
  App.propTypes = {
    color: PropTypes.string,
  };
  return <Doughnut data={data} />;
}

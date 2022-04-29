import React from "react";
import { render } from "react-dom";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  title: {
    text: "Grafico del paciente",
  },
  series: [
    {
      data: [1, 2, 3],
    },
  ],
};

const Grafico = () => {
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default Grafico;

import React from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const BarChart = ({ data, name }) => {
  return (
    <div className="chart-container">
      <h2>{name}</h2>
      <Bar data={data} />
    </div>
  );
};

export default BarChart;

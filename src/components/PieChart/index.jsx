import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { chartColors } from './colors';
import './styles.scss';

// Legend
// https://www.chartjs.org/docs/3.1.0/samples/legend/html.html

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ chartTitle, graphData }) => {
  const [graph, setGraph] = useState({
    labels: [],
    data: [],
  });

  useEffect(() => {
    const labels = [];
    const pieData = [];

    graphData?.forEach((v) => {
      labels.push(v?.label);
      pieData.push(v?.value);
    });

    setGraph({
      labels: labels,
      data: pieData,
    });
  }, [graphData]);

  const data = {
    labels: graph.labels,
    datasets: [
      {
        label: '# of Votes',
        data: graph.data,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      {chartTitle && <h3>{chartTitle} </h3>}
      <div style={{ height: '300px', width: '300px', margin: '0 auto' }}>
        <Pie data={data} />
      </div>
    </>
  );
};

export default PieChart;

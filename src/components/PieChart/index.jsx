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
          'rgba(191, 219, 247, 1)',
          'rgba(223, 200, 220, 1)',
          'rgba(255, 155, 146, 1)',
          'rgba(237, 229, 166, 1)',
          'rgba(196, 249, 199, 1)',
          'rgba(219, 251, 221, 1)',
          'rgba(242, 254, 243, 1)',
        ],
        borderWidth: 6,
      },
    ],
  };

  return (
    <>
      {chartTitle && <h3>{chartTitle} </h3>}
      <div className="pieContainer">
        <Pie data={data} />
      </div>
    </>
  );
};

export default PieChart;

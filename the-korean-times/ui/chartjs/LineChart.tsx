"use client";

import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

export default function ChartJsLineChart() {
  return <Line data={data} options={options} />;
}

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "My First Dataset",
      data: [65, 59, 80, 100, 56, 55, 40],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

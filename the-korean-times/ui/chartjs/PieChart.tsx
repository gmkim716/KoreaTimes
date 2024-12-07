"use client";

import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ChartJsPieChart({
  labels = tempLabels,
  datasets = tempDatasets,
  width,
  height,
}: ChartJsPieChartProps) {
  const data = {
    labels,
    datasets,
  };

  return (
    <div style={{ width, height }}>
      <Pie data={data} options={options} />;
    </div>
  );
}

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Pie Chart",
    },
  },
};

type ChartJsPieChartProps = {
  labels?: string[];
  datasets?: dataset[];
  width?: string;
  height?: string;
};
type dataset = {
  data: number[];
  backgroundColor: string[];
  hoverOffset: number;
};

const tempLabels = ["더불어민주당", "국민의힘", "조국혁신당", "개혁신당"];
const tempDatasets = [
  {
    data: [170, 108, 12, 25],
    backgroundColor: [
      "rgb(0, 78, 161)",
      "rgb(230, 0, 36)",
      "rgb(109, 200, 234)",
      "rgb(255, 121, 33)",
    ],
    hoverOffset: 4,
  },
];

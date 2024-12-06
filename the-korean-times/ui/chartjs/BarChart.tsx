"use client";

import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function ChartJsBarChart({
  data = tempData,
  options = tempOptions,
}: ChartJSBarChartProps) {
  return <Bar data={data} options={options} />;
}

type ChartJSBarChartProps = {
  data?: ChartData<"bar">;
  options?: ChartOptions<"bar">;
};

const tempData: ChartData<"bar"> = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "판매량",
      data: [12, 19, 3, 5, 2],
      backgroundColor: "rgba(75, 192, 192, 0.6)",
    },
  ],
};
const tempOptions: ChartOptions<"bar"> = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "월별 판매량",
    },
  },
};

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
// @ts-ignore
import faker from "faker";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom" as const,
      display: false,
    },
    title: {
      display: true,
      text: "Your progress",
      color: "#e5e7eb",
      font: {
        family: "Satoshi",
        size: 30,
        weight: "bold",
      },
    },
  },
  scales: {
    y: {
      title: {
        display: true,
        color: "#e5e7eb",
        text: "Tasks Completed",
        font: {
          family: "Satoshi",
          size: 20,
          weight: "bold",
        },
      },
      ticks: {
        color: "#fff",
        beginAtZero: true,
        font: {
          family: "Satoshi",
          size: 15,
          weight: "bold",
        },
      },
    },
    x: {
      title: {
        display: true,
        color: "#e5e7eb",
        text: "Protocols",
        font: {
          family: "Satoshi",
          size: 20,
          weight: "bold",
        },
      },
      stacked: true,
      ticks: {
        color: "#FFF",
        beginAtZero: true,
        font: {
          family: "Satoshi",
          size: 15,
          weight: "bold",
        },
      },
    },
  },
};

const labels = ["Sign", "Lit", "Reclaim", "Mina", "KYC", "Lens", "Base"];
export const data = {
  labels,
  datasets: [
    {
      label: "Tasks Completed",
      data: [5, 6, 7, 4, 8, 6, 9],
      borderColor: "#593de6",
      backgroundColor: "#6e61f3",
      borderWidth: 1,
      borderRadius: 10,
      borderSkipped: false,
    },
    {
      label: "Total tasks",
      data: [10, 10, 10, 10, 10, 10, 10],
      borderColor: "#8280f9",
      backgroundColor: "#a4a9fd",
      borderWidth: 1,
      borderRadius: 10,
      borderSkipped: false,
    },
  ],
};

const BarChart = () => {
  // @ts-ignore
  return <Bar options={options} data={data} />;
};

export default BarChart;

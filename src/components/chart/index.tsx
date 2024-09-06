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
      color: "#FFF",
    },
  },
  scales: {
    y: {
      title: {
        display: true,
        color: "#FFF",
        text: "Tasks Completed",
      },
      ticks: { color: "#fff", beginAtZero: true },
    },
    x: {
      title: {
        display: true,
        color: "#FFF",
        text: "Protocols",
      },
      stacked:true,
      ticks: { color: "#FFF", beginAtZero: true },
    },
  },
};

const labels = ["MetaMask", "Solana", "Mantle", "Base"];
export const data = {
  labels,
  datasets: [
    {
      label: "Tasks Completed",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 10 })),
      borderColor: "#0000aa",
      backgroundColor: "#000033",
      borderWidth: 1,
      borderRadius: 6,
      borderSkipped: false,
    },
    {
      label: "Total tasks",
      data: [10,10,10,10],
      borderColor: "#00aaaa",
      backgroundColor: "#00aa33",
      borderWidth: 1,
      borderRadius: 6,
      borderSkipped: false,
    },
  ],
};

const BarChart = () => {
  return <Bar options={options} data={data} />;
};

export default BarChart;

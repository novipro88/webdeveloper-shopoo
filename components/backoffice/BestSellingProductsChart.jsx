"use client";

import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function BestSellingProductsChart() {
  const data = {
    labels: ["Cabbage", "Watermelon", "Broccoli", "Maize"],
    datasets: [
      {
        label: "# of Votes",
        data: [50, 10, 20, 20],
        backgroundColor: [
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 99, 132, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(153, 102, 255, 0.5)",
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="dark:bg-slate-700 bg-slate-50 p-8 rounded-lg shadow-xl">
      <h2 className="text-xl font-bold mb-4 text-slate-800 dark:text-slate-50">
        Best Selling Charts
      </h2>
      {/* Chart */}
      <div className="p-2">
        <Pie data={data} />
      </div>
    </div>
  );
}

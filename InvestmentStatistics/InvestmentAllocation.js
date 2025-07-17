import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import { FaChartPie, FaChartLine } from "react-icons/fa";
import "./InvestmentAllocation.css";

const fullDonutData = {
  labels: ["Livestock", "Equipment", "Infrastructure", "Technology", "Other"],
  datasets: [
    {
      data: [35, 25, 15, 15, 10],
      backgroundColor: ["#4caf50", "#2196f3", "#ff9800", "#9c27b0", "#cfd8dc"],
    },
  ],
};

const lineDataSets = {
  Livestock: {
    label: "Livestock ROI",
    data: [20, 22, 25, 27, 26, 28],
    borderColor: "#4caf50",
  },
  Equipment: {
    label: "Equipment ROI",
    data: [19, 20, 21, 22, 21, 22],
    borderColor: "#2196f3",
  },
};

const InvestmentAllocation = () => {
  const donutRef = useRef(null);
  const lineRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    let donutInstance;
    let lineInstance;

    const donutCtx = donutRef.current?.getContext("2d");
    const lineCtx = lineRef.current?.getContext("2d");

    if (donutCtx) {
      const donutData =
        selectedCategory === "All"
          ? fullDonutData
          : {
              labels: [selectedCategory],
              datasets: [
                {
                  data: [
                    fullDonutData.datasets[0].data[
                      fullDonutData.labels.indexOf(selectedCategory)
                    ],
                  ],
                  backgroundColor: [
                    fullDonutData.datasets[0].backgroundColor[
                      fullDonutData.labels.indexOf(selectedCategory)
                    ],
                  ],
                },
              ],
            };

      donutInstance = new Chart(donutCtx, {
        type: "doughnut",
        data: donutData,
        options: {
          cutout: "70%",
          plugins: { legend: { position: "bottom" } },
        },
      });
    }

    if (lineCtx) {
      const datasets =
        selectedCategory === "All"
          ? Object.values(lineDataSets).map((set) => ({
              ...set,
              fill: false,
              tension: 0.4,
            }))
          : [
              {
                ...lineDataSets[selectedCategory],
                fill: false,
                tension: 0.4,
              },
            ];

      lineInstance = new Chart(lineCtx, {
        type: "line",
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          datasets,
        },
        options: {
          plugins: { legend: { position: "bottom" } },
          scales: { y: { beginAtZero: true, max: 30 } },
        },
      });
    }

    return () => {
      donutInstance?.destroy();
      lineInstance?.destroy();
    };
  }, [selectedCategory]);

  return (
    <div className="investment-dashboard">
      <h2 className="header-title">
        <FaChartPie className="icon" /> Investment Allocation
      </h2>
      <div className="filter-buttons">
        {["All", "Livestock", "Equipment", "Infrastructure", "Technology", "Other"].map(
          (cat) => (
            <button
              key={cat}
              className={`filter-btn ${
                selectedCategory === cat ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          )
        )}
      </div>

      <div className="charts-container">
        <div className="chart-box">
          <h3 className="chart-title">
            <FaChartPie className="icon-sm" /> Portfolio Distribution
          </h3>
          <canvas ref={donutRef}></canvas>
        </div>
        <div className="chart-box">
          <h3 className="chart-title">
            <FaChartLine className="icon-sm" /> ROI Trend Analysis
          </h3>
          <canvas ref={lineRef}></canvas>
        </div>
      </div>
    </div>
  );
};

export default InvestmentAllocation;
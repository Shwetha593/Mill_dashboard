import React, { useState } from "react";
import './FarmInvestment.css';

const FarmInvestement = () => {
  const [view, setView] = useState("monthly");

  const data = {
    monthly: {
      capital: { value: "₹23.3L", subtext: "↑ 2.1% MoM" },
      roi: { value: "1.9%", subtext: "↑ 0.2% MoM" },
      cattle: { value: "2.3%", subtext: "↑ 0.4%" },
      equipment: { value: "1.6%", subtext: "+0%" }
    },
    yearly: {
      capital: { value: "₹2.8 Cr", subtext: "↑ 18% YoY" },
      roi: { value: "22%", subtext: "↑ 3% vs Industry" },
      cattle: { value: "28%", subtext: "↑ 5.5%" },
      equipment: { value: "19%", subtext: "+0% change" }
    }
  };

  const currentData = data[view];

  return (
    <div className="dashboard25">
      <div className="header25">
        <div className="title25">Farm Investment Intelligence</div>
        <div className="report-controls25">
          <button
            className={view === "monthly" ? "active" : ""}
            onClick={() => setView("monthly")}
          >
            Monthly
          </button>
          <button
            className={view === "yearly" ? "active" : ""}
            onClick={() => setView("yearly")}
          >
            Yearly
          </button>
        </div>
      </div>
      <div className="cards25">
        <div className="card25" id="capitalCard">
          <h4>
            <span className="icon25">
              <img src="https://img.icons8.com/ios-filled/50/000000/rupee.png" alt="Rupee Icon" />
            </span>
            Total Capital
          </h4>
          <div className="value25">{currentData.capital.value}</div>
          <div className="subtext25">{currentData.capital.subtext}</div>
        </div>
        <div className="card25" id="roiCard">
          <h4>
            <span className="icon25">
              <img src="https://img.icons8.com/ios-filled/50/000000/percentage.png" alt="Percentage Icon" />
            </span>
            Avg. ROI
          </h4>
          <div className="value25">{currentData.roi.value}</div>
          <div className="subtext25">{currentData.roi.subtext}</div>
        </div>
        <div className="card25" id="cattleCard">
          <h4>
            <span className="icon25">
              <img src="https://img.icons8.com/ios-filled/50/000000/cow.png" alt="Cow Icon" />
            </span>
            Cattle ROI
          </h4>
          <div className="value25">{currentData.cattle.value}</div>
          <div className="subtext25">{currentData.cattle.subtext}</div>
        </div>
        <div className="card25 equipment25" id="equipmentCard">
          <h4>
            <span className="icon25">
              <img src="https://img.icons8.com/ios-filled/50/000000/tractor.png" alt="Tractor Icon" />
            </span>
            Equipment ROI
          </h4>
          <div className="value25">{currentData.equipment.value}</div>
          <div className="subtext25">{currentData.equipment.subtext}</div>
        </div>
      </div>
    </div>
  );
};

export default FarmInvestement;
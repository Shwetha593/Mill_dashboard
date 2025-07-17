import InventoryAlerts from "./InventoryAlerts";
import InventoryAnalytics2 from "./InventoryAnalytics2";
import InventoryDashboard from "./InventoryDashboard";
import Quickactions from "./Quickactions";
import RawMilk from "./Rawmilk";





function Inventory() {
  return (
    <div className="Inventory">

      <div className="dashboard-section">
       
        <InventoryDashboard />
      </div>
  

     <div className="dashboard-section">
       
        <InventoryAlerts />
      </div>
    
       <div className="dashboard-section">
       
        <InventoryAnalytics2 />
      </div>
        <div className="dashboard-section">
       
        <RawMilk />
      </div>
      
         <div className="dashboard-section">
       
        <Quickactions />
      </div>

    </div>
  );
}

export default Inventory;



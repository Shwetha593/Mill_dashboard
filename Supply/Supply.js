
import SupplyDashboard from './SupplyDashboard';
import SupplierManagement from './SupplierManagement';
import ProcurementPlanning from './ProcurementPlanning';

import QuickActions from './QuickActions';
import UpcomingDeliveries from './UpcomingDeliveries';
import LogisticsDashboard from './LogisticsDashboard';
import MilkProcurementDashboard from './MilkProcurementDashboard';
import FleetManagement from './FleetManagement';


function Supply() {
  return (
    <div className="Supply">

      <div className="dashboard-section"
        style={{marginBottom: '60px'}}>
        <SupplyDashboard />
      </div>

      
      <div className="dashboard-section"
        style={{marginBottom: '60px'}}>
        <SupplierManagement />
      </div>
      
        <div className="dashboard-section"
        style={{marginBottom: '60px'}}>
        <ProcurementPlanning />
      </div>
       
       <div className="dashboard-section"
        style={{marginBottom: '60px'}}>
        <QuickActions />
      </div>
        
       <div className="dashboard-section"
        style={{marginBottom: '60px'}}>
        <UpcomingDeliveries />
      </div>

       <div className="dashboard-section"
        style={{marginBottom: '60px'}}>
        <LogisticsDashboard />
      </div>

       <div className="dashboard-section"
        style={{marginBottom: '60px'}}>
        <MilkProcurementDashboard />
      </div>
       
        <div className="dashboard-section"
        style={{marginBottom: '60px'}}>
        <FleetManagement />
      </div>

   
    </div>
  );
}

export default Supply;
import ManufacturingBatches from './ManufacturingBatches';
import ProductionDashboard from './ProductionDashboard';
import LineStatus from './LineStatus';
import QualityControl from './QualityControl';


function Production() {
  return (
    <div className="Production">

      <div className="dashboard-section">
       
        <ProductionDashboard />
      </div>
    
    <div className="dashboard-section">
        
        <ManufacturingBatches />
      </div>

       <div className="dashboard-section">
       
        <LineStatus />
      </div>
      
        <div className="dashboard-section">
       
        <QualityControl />
      </div>



    </div>
  );
}

export default Production;



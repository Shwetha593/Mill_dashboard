import SalesDashboard from './SalesDashboard';
import SalesGraph from './SalesGraph';
import MonthlySales from './MonthlySales';
import ProductSalesDashboard from './ProductSalesDashboard';

function Sale() {
  return (
    <div className="Sale">
      <div className="dashboard-section"
        style={{marginBottom: '80px'}}>
        <SalesDashboard />
      </div>

      <div className="graph-section"
        style={{marginBottom: '80px'}}>
        <SalesGraph />
      </div>

      
      <div className="graph-section"
        style={{marginBottom: '80px'}}>
        <MonthlySales />
      </div>

        <div className="dashboard-section"
        style={{marginBottom: '80px'}}>
        <ProductSalesDashboard />
      </div>



    </div>
  );
}

export default Sale;
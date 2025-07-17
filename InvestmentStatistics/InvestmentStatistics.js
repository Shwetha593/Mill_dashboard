


import FarmInvestement from './FarmInvestement';
import InvestmentAllocation from './InvestmentAllocation';
import RecentTransaction from './RecentTransaction';
import Funding from './Funding';
import FundingDashboard from './FundingDashboard';



function  InvestmentStatistics () {
  return (
    <div className="InvestmentStatistics">

      <div className="dashboard-section">
       <FarmInvestement />
      </div>

      <div className="dashboard-section">
       <InvestmentAllocation />
      </div>

       <div className="dashboard-section">
       <RecentTransaction />
      </div>
       
        <div className="dashboard-section">
       <Funding />
      </div>

       <div className="dashboard-section">
       <FundingDashboard />
      </div>
     
    </div>
  );
}

export default InvestmentStatistics;
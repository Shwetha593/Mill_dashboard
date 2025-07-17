import QualityAlerts from './QualityAlerts';
import QualityAnalytics from './QualityAnalytics';
import QualityCheck from './QualityCheck';
import QualityControl from './QualityControl';
import QualityPerformance from './QualityPerformance';
import YesterdayCheck from './YesterdayCheck';




function QualityReports() {
  return (
    <div className="QualityReports">

      <div className="dashboard-section2">
        <QualityControl />
      </div>

      <div className="dashboard-section2">
        
        <QualityCheck />
      </div>
      
      <div className="dashboard-section2">
        
        <YesterdayCheck />
      </div>
      
        <div className="dashboard-section2">
       
        <QualityAlerts />
      </div>
      
        <div className="dashboard-section2">
       
        <QualityPerformance />
      </div>

           <div className="dashboard-section2">
       
        <QualityAnalytics />
      </div>

    </div>
  );
}

export default QualityReports;
import React from 'react';

import MilkDashboard from './MilkDashboard';
import FarmSupport from './FarmSupport';
import Customer from './Customer';
import Veterinary from './Veterinary';

import './CRMpage.css' ;

const CRMpage = () => {
  return (
    <div style={{ padding: '0px' }}>


      <div className="full-width-section"
        style={{marginTop: '60px'}}>
           <MilkDashboard />
        </div>

      
      
 <div className="full-width-section"
        style={{marginTop: '60px'}}>
            <Customer />
        </div>


      <div className="full-width-section"
        style={{marginTop: '60px'}}>
            <FarmSupport/>
        </div>
      

       <div className="full-width-section"
        style={{marginTop: '60px'}}>
           <Veterinary/>
        </div>
            
        </div>
    
  );
};

export default CRMpage;
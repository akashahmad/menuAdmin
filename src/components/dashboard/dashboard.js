import React from 'react'
import './style.css'
export default()=>{
    return(
        <div className="container-fluid dashboard-main">
          <div className="container dashboard-inner">
             {/* 1st card */}
             <div className="card fnt-family-openSans">
                 <div><span>45</span></div>
                 <div><p>Dishes</p></div>
             </div>
             {/* 2nd card */}
             <div className="card fnt-family-openSans">
                 <div><span>15</span></div>
                 <div><p>Orders</p></div>
             </div>
             {/* 3rd card */}
             <div className="card fnt-family-openSans">
                 <div><span>10</span></div>
                 <div><p>Tables</p></div>
             </div>
             {/* 4th card */}
             <div className="card fnt-family-openSans">
                 <div><span>$3200.00</span></div>
                 <div><p>Todays's Sales</p></div>
             </div>
          </div>
        </div>
    );
}
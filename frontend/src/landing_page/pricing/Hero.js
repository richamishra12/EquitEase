import React from 'react';
function Hero() {
    return (
        <div className="container  p-2">
          <div className="row text-center p-5 mt-3">
            <h1 style={{lineHeight:"1.5",fontSize:"50px"}}>Charges</h1>
            <p style={{fontSize:"20px"}} className="text-muted">List of all charges and taxes</p>

            <div className="row  mt-4 border-top " >
            <div className="col-4 p-5">
              <img src="images\pricingEquity.svg"/>
              <h1 className="fs-2">Free equity delivery</h1>
              <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
            </div>
            <div className="col-4 p-5">
              <img src="images\intradayTrades.svg"/>
              <h1 className="fs-2">Intraday and F&O trades</h1>
              <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
            </div>
            <div className="col-4 p-5">
              <img src="images\pricingEquity.svg"/>
              <h1 className="fs-2">Free direct MF</h1>
              <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
            </div>
            </div>

            


          </div>
        </div>
      );
}

export default Hero;
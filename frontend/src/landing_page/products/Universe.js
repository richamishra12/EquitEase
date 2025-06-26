import React from 'react';
function Universe() {
return (
<div className="container mt-5 p-4">
  <div className="row text-center">
    <h1 className="text-muted mb-4">The Zerodha Universe</h1>
      <p>Extend your trading and investment experience even further with our partner platforms</p>
      <div className="col-2 "></div>
      <div className="col-3 mt-5">
        <img src="images\zerodhaFundhouse.png" style={{width:"70%"}}/>
        <p className="text-small text-muted mt-4" style={{fontSize:"14px"}}> Our asset management venture
             that is creating simple and transparent index
            funds to help you save for your goals.</p>
        
      </div>
      <div className="col-3 mt-5">
        <img src="images\sensibullLogo.svg" style={{width:"80%"}}/>
        <p className="text-small text-muted mt-4"style={{fontSize:"14px"}}>
           Options trading platform that lets you
           create strategies, analyze positions, and examine
           data points like open interest, FII/DII, and more.        
         </p>
      </div>
      <div className="col-3 mt-5">
        <img src="images\streakLogo.png" style={{width:"70%"}}/>
        <p className="text-small text-muted mt-4"style={{fontSize:"14px"}}>
          Systematic trading platform
          that allows you to create and backtest
          strategies without coding.</p>
      </div>
      <div className="col-1"></div>

      <div className="col-2 "></div>
      <div className="col-3 mt-5">
        <img src="images\smallcaseLogo.png" style={{width:"70%"}}/>
        <p className="text-small text-muted mt-4"style={{fontSize:"14px"}}>
          Thematic investing platform
          that helps you invest in diversified
          baskets of stocks on ETFs.
        </p>
        
      </div>
      <div className="col-3 mt-5">
        <img src="images\goldenpiLogo.png" style={{width:"70%"}}/>
        <p className="text-small text-muted mt-4"style={{fontSize:"14px"}}>
          Bonds trading platform
          stocks and management.
        </p>
      </div>
      <div className="col-3 mt-5">
        <img src="images\dittoLogo.png" style={{width:"40%"}}/>
        <p className="text-small text-muted mt-4"style={{fontSize:"14px"}}>
          
         Personalized advice on life
         and health insurance. No spam
         and no mis-selling.
        </p>
      </div>
      <div className="col-1"></div>
        <button className='p-2 btn btn-primary fs-5 mb-5 mt-5  'style={{width:'20%',margin:'0 auto'}}>Sign up for free</button>
               </div>
          </div>
      );
}

export default Universe;
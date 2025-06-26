import React from 'react';
function CreateTicket() {
return ( 
<div className="container">
<div className="row">
<h1 className="fs-3 text-muted p-5">
To create a ticket, select a relevant topic</h1>
 <div className="col-1"></div>
 <div className="col-3">
  <h4><i class="fa-solid fa-circle-plus fa-xs"></i> Account Opening</h4>
  <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>Resident individual</a><br></br>
  <a href=""style={{textDecoration:"none",lineHeight:"2.5"}}>Non Resident Indian (NRI)</a><br></br>
  <a href=""style={{textDecoration:"none",lineHeight:"2.5"}}>Company, Partnership, HUF and LLP</a><br></br>
  <a href=" "style={{textDecoration:"none",lineHeight:"2.5"}}>Glossary</a>
 </div>
 <div className="col-1"></div>
 <div className="col-3">
 <h4> <i class="fa-regular fa-user fa-xs"></i>&nbsp;Your Zerodha Account</h4>
  <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>Your Profile</a><br></br>
  <a href=""style={{textDecoration:"none",lineHeight:"2.5"}}>Account modification</a><br></br>
  <a href=""style={{textDecoration:"none",lineHeight:"2.5"}}>Client Master Report (CMR) and Depository</a><br></br>
  <a href=" "style={{textDecoration:"none",lineHeight:"2.5"}}>Nomination</a><br></br>
  <a href=" "style={{textDecoration:"none",lineHeight:"2.5"}}>Transfer and conversion of securities</a>
  </div>
  <div className="col-1"></div>
  <div className="col-3">
  <h4><i class="fa-solid fa-chart-simple fa-sm"></i> &nbsp;Kite</h4>
  <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>IPO</a><br></br>
  <a href=""style={{textDecoration:"none",lineHeight:"2.5"}}>Trading FAQs</a><br></br>
  <a href=""style={{textDecoration:"none",lineHeight:"2.5"}}>Margin Trading Facility (MTF) and Margins</a><br></br>
  <a href=" "style={{textDecoration:"none",lineHeight:"2.5"}}>Charts and orders</a>
  <a href=" "style={{textDecoration:"none",lineHeight:"2.5"}}>Alerts and Nudges</a>
  <a href=" "style={{textDecoration:"none",lineHeight:"2.5"}}>General</a>


  </div>
  <div className="row mt-5">

  <div className="col-1"></div>
 <div className="col-3">
  <h4><i class="fa-solid fa-wallet fa-sm"></i>&nbsp;Funds</h4>
  <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>Add money</a><br></br>
  <a href=""style={{textDecoration:"none",lineHeight:"2.5"}}>Withdraw money</a><br></br>
  <a href=""style={{textDecoration:"none",lineHeight:"2.5"}}>Add bank accounts</a><br></br>
  <a href=" "style={{textDecoration:"none",lineHeight:"2.5"}}>eMandates</a>
 </div>
 
 <div className="col-1"></div>
 <div className="col-3">
 <h4> <i class="fa-solid fa-gauge-high fa-sm"></i>&nbsp;Console</h4>
  <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>Portfolio</a><br></br>
  <a href=""style={{textDecoration:"none",lineHeight:"2.5"}}>Corporate actions</a><br></br>
  <a href=""style={{textDecoration:"none",lineHeight:"2.5"}}>Funds statement</a><br></br>
  <a href=" "style={{textDecoration:"none",lineHeight:"2.5"}}>Reports</a>
  <a href=" "style={{textDecoration:"none",lineHeight:"2.5"}}>Profile</a>
  <a href=" "style={{textDecoration:"none",lineHeight:"2.5"}}>Segments</a>

  </div>
  <div className="col-1"></div>
  <div className="col-3">
  <h4><i class="fa-solid fa-circle-notch fa-sm"></i>&nbsp;Coin</h4>
  <a href="" style={{textDecoration:"none",lineHeight:"2.5"}}>Mutual funds</a><br></br>
  <a href=""style={{textDecoration:"none",lineHeight:"2.5"}}>National Pension Scheme (NPS)</a><br></br>
  <a href=""style={{textDecoration:"none",lineHeight:"2.5"}}>Features on Coin</a><br></br>
  <a href=" "style={{textDecoration:"none",lineHeight:"2.5"}}>Payments and Orders</a>
  <a href=" "style={{textDecoration:"none",lineHeight:"2.5"}}>General</a>
  </div>
  </div>


 </div>
</div>
     );
}

export default CreateTicket;
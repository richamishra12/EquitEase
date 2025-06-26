import React from 'react';
function Hero() {
return (
<section className="container-fluid" id="supportHero">
 <div className=" p-5 " id="supportWrapper">
  <h4 className="mt-3">Support Portal</h4>
  <a href=""className="mt-3">Track Tickets</a>
  </div>

  <div className="row p-5 ">
    <div className="col-1"></div>
    <div className="col-5 mb-5">
      <h1 className="fs-4 mb-4 ">Search for an answer or browse help topics to create a 
        ticket</h1>
        <input className="mb-4" style={{width:"90%",height:"30%",padding:"0 4%",borderRadius:"10px",border:"none"}}placeholder="Eg: How do i activate F&O,why is my order getting rejected..."/><br></br>
        <a href="" style={{color:"white", fontSize:"18px"}}>Track account opening</a>&nbsp;&nbsp;&nbsp;
        <a href="" style={{color:"white", fontSize:"18px"}}>Track segment activation</a>&nbsp;&nbsp;&nbsp;
        <a href="" style={{color:"white", fontSize:"18px"}}>Intraday margins</a>&nbsp;&nbsp; <br></br>
        <a href="" style={{color:"white", fontSize:"18px"}}>Kite user manual</a>
        

        
    </div>

    <div className="col-5 mb-5">
      <h4>Featured</h4>
      <ol>
        <li><a href="">Surveillance measure on scrips - June 2025</a></li><br></br>
        <li><a href="">Rights Entitlements listing in June 2025</a></li>

      </ol>
    </div>

 </div>
</section>
      );
}

export default Hero;
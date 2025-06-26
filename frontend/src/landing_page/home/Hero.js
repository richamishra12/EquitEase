import React from 'react';
function Hero() {
return ( 
<div className='container p-4 mb-5'>
  <div className='row text-center'>
    <img src='images/homeHero.png'className='mb-5' alt='Homepage' />
     <h1 className='mt-4 mb-3'>Invest in everything</h1>
     <br></br>
     <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
     <br></br>
     <br></br>
     <button className='p-2 btn btn-primary fs-5 mb-5'style={{width:'20%',margin:'0 auto'}}>Sign up for free</button>


  </div>
</div>
     );
}

export default Hero;
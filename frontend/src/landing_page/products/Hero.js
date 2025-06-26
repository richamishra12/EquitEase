import React from 'react';
function Hero() {
    return (
        <div className='container border-bottom p-5 mt-5'  >
          <div className='row text-center'>
            <h1 className="" style={{fontSize:"3rem",lineHeight:"1.2"}}>Zerodha Products</h1>
            <h3 className="fs-5 text-muted" style={{lineHeight:"2"}}>Sleek, modern, and intuitive trading platforms</h3>
            <p className="fs-6">check out our <a href="" style={{textDecoration:"none"}}>investment offerings <i class="fa-solid fa-arrow-right-long"></i></a></p>

          </div>

        </div>
      );
}

export default Hero;
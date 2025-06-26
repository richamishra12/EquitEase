import React from 'react';
function RightSection({imageURL,productName,productDescription,learnMore}) {
    return (
        <div className="container mt-5">
          <div className="row">
             <div className="col-1"></div>
            <div className="col-5 p-5 mt-5">
              <h1>{productName}</h1>
              <p>{productDescription}</p>
              <div>
                
              <a href={learnMore}  style={{marginLeft:"50px",textDecoration:"none"}}>Learn More<i class="fa-solid fa-arrow-right-long"></i></a>
              </div>
              

            </div>
            

            <div className="col-5 mb-5  ">
              <img src={imageURL}/>
            </div>
             <div className="col-1"></div>


          </div>
          </div>
      );
}

export default RightSection;
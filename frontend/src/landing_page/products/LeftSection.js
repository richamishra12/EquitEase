import React from 'react';
function LeftSection({imageURL,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}) {
    return (
        <div className="container">
          <div className="row">
             <div className="col-1"></div>
            <div className="col-5 p-5">
              <img src={imageURL}/>
            </div>
             
             <div className="col-1"></div>
           

            <div className="col-5 p-5 mt-5">
              <h1>{productName}</h1>
              <p>{productDescription}</p>
              <div>
                <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo<i class="fa-solid fa-arrow-right-long"></i></a>
              <a href={learnMore}  style={{marginLeft:"50px",textDecoration:"none"}}>Learn More<i class="fa-solid fa-arrow-right-long"></i></a>
              </div>

              <div className="mt-3">
                <a href={googlePlay}><img src="images\googlePlayBadge.svg"/></a>
              <a href={appStore} style={{marginLeft:"50px"}}><img src="images\appstoreBadge.svg"/></a>
              </div>
              

            </div>


          </div>

        </div>
      );
}

export default LeftSection;
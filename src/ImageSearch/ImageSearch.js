import React from 'react';



import "./ImageSearch.css";

const ImageSearch=({handlegetrequest})=>{
    return(
      
      <div className="imageSearch">
       <form onSubmit={handlegetrequest} className="imageSearch__form">
         <input type="text" autoComplete="off" name="searchValue" placeholder="Search for images.."></input>
          <button>Search</button>
       </form>
      </div>
    )
}

export default ImageSearch
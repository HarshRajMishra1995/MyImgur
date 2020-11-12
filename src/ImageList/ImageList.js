import React from 'react';
import {Link} from 'react-router-dom';

import "./ImageList.css";

const ImageList=(props)=>{ 
console.log(props)
    return (
        // <div>Image List</div>
        <div className="container">
        {/* {props.images.map(({id,largeImageURL,tags})=>{
             return(
            //  <p key={id}>{tags}</p>
            <div key={id}>
                <img src={largeImageURL} alt={tags}/>
                <button>Search</button>
            </div>
             )
         
        })} */}

        <div className="row">
          {props.images.map((image)=>{
             return(
            //  <p key={id}>{tags}</p>
            <div key={image.id} className="col-md-4" style={{ marginBottom:"2rem" }}>
               
               <div className="imageList__container">
                <img  className="imageList__image"  src={image.largeImageURL} alt={image.tags}/>
               </div>
               <div className="image__details">
               <Link to={{
                   pathname:`/images/${image.id}`,
                   state:{image}
               }}>
               <button>View</button>
               </Link> 
                </div>
            </div>
             )
         
        })}
        </div> 


        </div>
    )
}

export default ImageList
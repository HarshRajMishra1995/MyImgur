import React from 'react';


const ImageView=(props)=>{

    const {largeImageURL:image,user:owner,tags}=props.location.state.image
    return(
        <div>
            <img src={image} alt={tags}/>
        </div>
    )
}

export default ImageView;
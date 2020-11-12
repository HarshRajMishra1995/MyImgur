import React from "react";

import ImageSearch from "./ImageSearch/ImageSearch";

import ImageList from "./ImageList/ImageList";

const API_KEY="19080217-f53e1ed53770ab546054f4841"

//const url=`https://pixabay.com/api/?key=${API_KEY}&q=yellow+flowers&image_type=photo`


class App extends React.Component {

  state={
    images:[],
  };
  handlegetrequest= async (e)=>{
   
    e.preventDefault()

    const searchTerm=e.target.elements.searchValue.value;
    const url=`https://pixabay.com/api/?key=${API_KEY}&q=${searchTerm}&image_type=photo`

    const request= await fetch(url)

    const response=await request.json()
     
    this.setState({
      images: response.hits
    })
    console.log(searchTerm);
    console.log(this.state.images);
    
  }
  // componentDidMount(){
  //   this.handlegetrequest()
  // }
  render() {
    return(
      <div>
        <ImageSearch handlegetrequest={this.handlegetrequest}/>
        {/* {this.state.images.length>0&&this.state.images.map((image)=>{
          return(
          <p key={image.id}>{image.tags}</p>
          )
        })} */}
        <ImageList images={this.state.images}/>
      </div>
    )
  }
}


export default App
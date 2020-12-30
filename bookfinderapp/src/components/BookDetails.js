import React,{useState,useEffect} from "react"
import {getBookDetails} from './../api/GBApi'

import {Link} from 'react-router-dom';
import SingleBook from "./singleBook";
const BookDetails =(props)=>{
    const currentBook= props.location.bookInfo
    
    



   
    return(<div>
        
        <img src={currentBook.imageLinks.thumbnail} style={{width: "100",height:"200"}}/>
        <div class="row">
    <div class="col" >
      <div class="card blue-grey darken-1" class="card large">
        <div class="card-content black-text">
          <span class="card-title">Book Name: {currentBook.title}</span>
          <div >Author: {currentBook.authors[0]}</div>
          <div >Published On: {currentBook.publishedDate}</div>
          <div>Publisher:{currentBook.publisher}</div>
          <p>Description:{currentBook.description}</p>
          <a href={currentBook.previewLink}>Preview Link</a>

        </div> 
        </div> 
        </div> 

          
        
  </div>
            
        
        </div>
    



    
    
    
    )
    
}

export default BookDetails;
import React,{useState,useEffect} from "react"
import {getBookDetails} from './../api/GBApi'

import {Link} from 'react-router-dom';
import SingleBook from "./singleBook";
const BookDetails =(props)=>{
    const [currentBook,setCurrentBook] =useState({});



    useEffect(()=>{

        setCurrentBook(props.location.bookInfo)
   
    },[]);

   
    return(<div>{currentBook.title}</div>
    



    
    
    
    )
    
}

export default BookDetails;
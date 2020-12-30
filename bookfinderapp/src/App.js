import React,{useState} from "react"
import {Link} from 'react-router-dom'

import Searchbar from "./components/Searchbar"
import {getBooksByTerm} from "./api/GBApi"
import BookList from "./components/BookList"
import Pagination from "./components/Pagination"
const App =()=>{
    const [searchTerm,setSearchTerm] =useState("");
    const [books,setBooks] =useState([]);
    const [currentPage,setCurrentPage]=useState(1);
    const [totalPages,setTotalPages] =useState(0)
    const [sort,setSort]=useState("");
    

    const handleSubmit = async(event) => {
        event.preventDefault();
        
        await getBooksByTerm(searchTerm,setBooks,currentPage,setTotalPages);

      
        
         
    }

    
    const handleNewest = async(event) => {
        event.preventDefault();
        await getBooksByTerm(searchTerm,setBooks,currentPage,setTotalPages);
    }

    
    const handleOldest = async(event) => {
        event.preventDefault();
        await getBooksByTerm(searchTerm,setBooks,currentPage,setTotalPages);
    }
    const handleChange =(event) =>{

       
        
        setSearchTerm(event.target.value);
    }

    const handleSort =(e)=>
    {
        console.log(e.target.value)
        setSort({sort:e.target.value})
    }

    const cleanData =(data) =>{
        const cleanedData=data.body.items.map((book)=>
        {
            if(book.volumeInfo.hasOwnProperty('publishedDate') ===false)
            {
                book.volumeInfo['publishedDate'] ='0000'
            }

            else if(book.volumeInfo.hasOwnProperty('imageLinks') ===false)
            {
                book.volumeInfo['imageLinks']={smallThumbnail:'https://picsum.photos/200/300'}
            }

            return book;

        })
        return cleanedData;
    }

    const nextPage= async(page_number)=>
    {
        setCurrentPage(page_number);
        await getBooksByTerm(searchTerm,setBooks,currentPage,setTotalPages)
    }
    return (<div>
      
        <Searchbar handleChange ={handleChange} handleSubmit ={handleSubmit} handleSort ={handleSort} handleOldest={handleOldest} handleNewest={handleNewest}></Searchbar>
        
        <BookList books={books}/>
        {totalPages>1?(
            <Pagination 
        nextPage={nextPage}
        currentPage={currentPage}
        totalPages={totalPages}/>):("")
}
    </div>)
  }

export default App;
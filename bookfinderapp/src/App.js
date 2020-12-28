import React,{useState} from "react"
import Navbar from "./components/Navbar"
import Searchbar from "./components/Searchbar"
import {getBooksByTerm} from "./api/GBApi"
const App =()=>{
    const [searchTerm,setSearchTerm] =useState("");
    const[bookss,setBooks] =useState([]);

    const handleSubmit =() => {}
    const handleChange =(event) =>{
        console.log(event.target.value);
        setSearchTerm(event.target.value);
    }
    return (<div>
        <Navbar></Navbar>
        <Searchbar handleChange ={handleChange}></Searchbar>
    </div>)
  }

export default App;
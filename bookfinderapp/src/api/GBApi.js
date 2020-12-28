import axios from "axios";

const GBAPI= axios.create({
    baseURL:"https://www.googleapis.com/books/v1"
})

const getBooksByTerm = (SearchTerm,setBooks)=>
{
    GBAPI.get("/volumes",{
        params:{
            projection: "lite",
            q: SearchTerm,
            key:"AIzaSyB2kMv3bJuWG8R1lxZKMAJnl1TdBGlA9xo"


        }
    },
    ).then((response)=>
    {
        console.log(response.data.items);
        setBooks(response.data);
    })
    
}

export {getBooksByTerm};
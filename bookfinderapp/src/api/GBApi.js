import axios from "axios";

const GBAPI= axios.create({
    baseURl:"https://www.googleapis.com/books/"
})

const getBooksByTerm = (SearchTerm,setBooks)=>
{
    GBAPI.get("/v1/volumes",{
        params:{
            projection: "lite",
            q: SearchTerm,
            key:"AIzaSyB2kMv3bJuWG8R1lxZKMAJnl1TdBGlA9xo"


        }
    },
    ).then((response)=>
    {
        console.log(response);
        setBooks(response.data);
    })
    
}

export {getBooksByTerm};
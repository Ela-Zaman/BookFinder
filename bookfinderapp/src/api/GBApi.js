import axios from "axios";

const GBAPI= axios.create({
    baseURL:"https://www.googleapis.com/books/v1"
})

const getBooksByTerm = (SearchTerm,setBooks,page_number,setTotalPages)=>
{
    const book_index=(page_number-1)*10

    GBAPI.get("/volumes",{
        params:{
            projection: "lite",
            q: SearchTerm,
            key:"AIzaSyB2kMv3bJuWG8R1lxZKMAJnl1TdBGlA9xo",
            startIndex: book_index,
            maxResults: 10

        }
    },
    ).then((response)=>
    {
        console.log(response.data);
        setBooks(response.data.items);
        setTotalPages(response.data.totalItems/10)
    })
    
}

export {getBooksByTerm};
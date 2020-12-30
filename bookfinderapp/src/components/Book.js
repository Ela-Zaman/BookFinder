import React from "react"
import {Link} from 'react-router-dom'
import { getBookDetails } from "../api/GBApi";

const Book =(props)=>
{
    

   
    const bookInfo=props.data.volumeInfo
    const ImageURL =bookInfo.imageLinks.thumbnail;
   
    
    return (
       
    
    <div className="col s12 m4" >
      <div className="card" >
        <div className="card-image">
            {ImageURL == null ?(
                <img 
                    src ="https://picsum.photos/200/300"
                    alt=""
                    style={{width:"100",height:"200"}}
                    />
            ):(
                <img src={ImageURL} style={{width: "100",height:"200"}}/>
          
            )
            }
          <span className="card-title">{bookInfo.title}</span>
        </div>
        <div className="card-content">
        
     
        </div>
        <div className="card-action">
          <Link to ={{
              pathname:"/book/"+props.data.id,
              volume_id:props.data.id,
              bookInfo: bookInfo
            
          }}>See Details
          </Link>
        </div>
      </div>
    </div>
 
 
            
        
    )
}

export default Book;
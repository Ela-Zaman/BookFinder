import React from "react"

const Book =(props)=>
{
   
    const bookInfo=props.data.volumeInfo
    const ImageURL =bookInfo.imageLinks.thumbnail;
    
    return (
       
    
    <div class="col s12 m4" >
      <div class="card" >
        <div class="card-image">
            {ImageURL == null || ImageURL ==undefined?(
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
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
 
 
            
        
    )
}

export default Book;
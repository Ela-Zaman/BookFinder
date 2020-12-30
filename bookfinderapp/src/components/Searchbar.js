import React from 'react'

const Searchbar = (props)=>
{
    console.log(props)
return(
<div className ="container">
    <div className="row">
        <section className="col s6 offset-s4">
            <form action ="" onSubmit={props.handleSubmit}>
                <div className="input-field">
                    <input placeholder ="Search for books" type="text" onChange={props.handleChange}></input>
                    <button type="submit" onClick={props.handleSort}>Newest</button>
                    <button type="submit" onClick={props.handleSort}>Oldest</button>
                    
                </div>
            </form>
        </section>
    </div>


</div>)
}
export default Searchbar
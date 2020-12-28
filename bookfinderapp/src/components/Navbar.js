import React from 'react'
import {Link} from 'react-router-dom'

const Navbar =()=>
{
    return(<div>
        <nav>
    <div className="nav-wrapper">
      <Link to="/" className="brand-logo" style ={{"marginLeft": 30}}>Book Finder</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="sass.html">Popular Books</a></li>
        <li><a href="badges.html">Blog</a></li>
        <li><a href="collapsible.html">About Us</a></li>
      </ul>
    </div>
  </nav>
    </div>)
}

export default Navbar
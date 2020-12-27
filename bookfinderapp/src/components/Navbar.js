import React from 'react'

const Navbar =()=>
{
    return(<div>
        <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo" style ={{"marginLeft": 30}}>Book Finder</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="sass.html">Popular Books</a></li>
        <li><a href="badges.html">Blog</a></li>
        <li><a href="collapsible.html">About Us</a></li>
      </ul>
    </div>
  </nav>
    </div>)
}

export default Navbar
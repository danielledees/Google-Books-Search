import React from "react";


function Navbar () {
    return (
<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <a className="navbar-brand" href="/search">Google Books</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

<ul>
      <li className="nav-item">
        <a className="nav-link" href="/search">Search</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/saved">Saved</a>
      </li>
      </ul>
    
  
  
</nav>
    )
}

export default Navbar;
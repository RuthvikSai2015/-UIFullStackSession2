import React from 'react';

function Header() {
   return (
      <div>
         <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container-fluid">
               <a className="navbar-brand" href="login">Navbar</a>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul className="navbar-nav">
                     <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="login">Home</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="login">Features</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="login">Pricing</a>
                     </li>
                     <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="login" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                           Dropdown link
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                           <li><a className="dropdown-item" href="login">Action</a></li>
                           <li><a className="dropdown-item" href="login">Another action</a></li>
                           <li><a className="dropdown-item" href="login">Something else here</a></li>
                        </ul>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
      </div>
   )
}
export default Header;

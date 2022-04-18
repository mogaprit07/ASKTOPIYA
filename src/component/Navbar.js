import React from 'react'
import { Link } from 'react-router-dom'


export const Navbar = () =>{
  return (
    <div>
           <nav className="navbar navbar-expand-lg navbar light bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand text-danger" to="/"><h2>Ask<h3>Topea</h3></h2></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/HOME">Home</Link>
        </li>
       
        <li className="nav-item">
                <Link className="nav-link text-white" to="/question">Questions</Link>
        </li>
        <li className="nav-item">
             <Link className="nav-link text-white" to="/tags">Tags</Link>
        </li>
         <li className="nav-item">
                <Link className="nav-link text-white" to="/contact">Contact Us</Link>
         </li>
     
      </ul>
      <form className="d-flex">
        
        <Link className="btn btn-primary mx-1" to="/login" button="submit">Login</Link>
        <Link className="btn btn-primary mx-1" to="/signup" button="submit">Signup</Link>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

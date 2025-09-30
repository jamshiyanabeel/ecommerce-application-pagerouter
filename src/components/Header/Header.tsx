'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import CartIcon from '../CartIcon/CartIcon'
import SearchBar from '../searchBar/SearchBar'


function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container-fluid">
          <Link className="navbar-brand" href="/">Quickart</Link>
          <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded={isOpen} aria-label="Toggle navigation" onClick={() => setIsOpen(!isOpen)}>
                <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item"><Link className="nav-link" href="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" href="/products">Products</Link></li>
              <li className="nav-item"><Link className="nav-link" href="/about-us">About Us</Link></li>
              <li className="nav-item"><Link className="nav-link" href="/contact-us">Contact Us</Link></li>
            </ul>
            
        </div>
        <div className="mx-3">
            <SearchBar />
        </div>

        
        <div className="d-flex align-items-center">
          <Link className="nav-link me-3" href="/login" style={{ color:'white' }}> Login </Link>
          <Link href="/cart" className="btn btn-outline-light me-2" >Cart<CartIcon /></Link>
        </div>
       
      </div>
    </nav>
    
    </div>
  )
}

export default Header

import React from 'react'

function Footer() {
  return (
    <div>
        <footer className="bg-dark text-white text-center py-3 mt-4">
        <div className="container">
            <p className="mb-0"> &copy; {new Date().getFullYear()} Flipart. All rights reserved. </p>
        </div>
        </footer>
    </div>
  )
}

export default Footer
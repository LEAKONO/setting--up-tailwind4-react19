import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="flex justify-end gap-8 p-4 bg-blue-100 shadow-sm">
  <Link to="/" className="text-blue-700 hover:underline font-medium">Home</Link>
  <Link to="/about" className="text-blue-700 hover:underline font-medium">About</Link>
  <Link to="/contact" className="text-blue-700 hover:underline font-medium">Contact</Link>
</div>

  )
}

export default Navbar

import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <>
        <div>Contact Page</div>
        <Link to="/">Home</Link>
        <br />
        <Link to="/about">About</Link>
        <br />
        <Link to="/contact">Contact</Link>
    </>
  )
}

export default Contact
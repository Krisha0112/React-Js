import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Home() {
  const data = {
    color:['red', 'green', 'blue' ], 
    user: [
      {id:1, name:"krisha", phone:1234},
      {id:2, name:"ayushi", phone:123456  }
    ]
  }

  const navigate = useNavigate();
  
  const handleSubmit = () => {
    navigate('about', state.data )
  }
  return (
    <>
      <div>Home Page</div>
      <Link to="/">Home</Link>
      <br />
      <Link to="/about">About</Link>
      <br />
      <Link to="/contact">Contact</Link>
      <br />
      <button onClick={() => handleSubmit()}>Click</button>
    </>
  )
}

export default Home
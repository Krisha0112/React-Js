import { useState } from "react"

function App() {

  const [input, setInput] = useState({
    name: '',
    email: ''
  })

  const handleChange = (e) => {
    const { name, email } = e.target
    const obj = {
      ...input,
      [name]: value
    }
    setInput(obj)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  }

  return (
    <div align="center">
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        Name :- <input onChange={handleChange} placeholder="Enter Your Name" name="username" />
        <br /><br />
        Email :- <input placeholder="Enter Your Email" email="useremail" />
        <br /><br />
        <input type="submit" />
      </form>
    </div>
  )
}

export default App

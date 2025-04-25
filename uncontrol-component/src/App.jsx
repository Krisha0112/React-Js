import { useRef } from "react";

function App() {

  const name = useRef("")
  const age = useRef("")

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name.current.value)
    console.log(age.current.value)
  }

  return (
    <div align="center">
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <table border={1}>
          <tbody>
            <tr>
              <td>Name</td>
              <td><input type="text" ref={name}/></td>
            </tr>
            <tr>
              <td>Age</td>
              <td><input type="number" ref={age}/></td>
            </tr>
            <tr>
              <td></td>
              <td><input type="submit" /></td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  )
}

export default App

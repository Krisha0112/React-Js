import { useState } from "react"

function App() {

  const [name, setName] = useState("");
  const [phone , setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let obj = {
      id : Math.floor(Math.random()*10000),
      name : name,
      phone: phone
    }

    console.log("Submitted object:", obj);

    setName("");
    setPhone("");
  }

  return (
    <div align="center">
      <h1>Control Component</h1>
      <form onSubmit={handleSubmit}>
        <table border={1}>
          <tbody> 
            <tr>
              <td>Name</td>
              <td>
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </td>
            </tr>
            <tr>
              <td>Phone</td>
              <td>
                <input
                  type="number"
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <input type="submit" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  )
}

export default App;

  
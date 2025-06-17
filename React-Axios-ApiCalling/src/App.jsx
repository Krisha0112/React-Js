import axios from "axios"
import { useEffect, useState } from "react"

function App() {

  const [tododata, setTodoData] = useState([])

  const getTodos = () => {
    axios.get (`https://dummyjson.com/todos`)
    .then((res) => {
      console.log(res.data.todos);
      setTodoData(res.data.todos)
    })
  }

  useEffect(() => {
    getTodos();
  }, [])

  return (
    <>
      <table border={1} align="center">
        <thead>
          <tr>
            <th>Id</th>
            <th>Todos</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {

            tododata.map((t) => {
              return (
                <tr key={t.id}>
                  <td>{t.id}</td>
                  <td>{t.todo}</td>
                  <td>{t.completed}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default App

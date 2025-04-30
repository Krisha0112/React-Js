function App() {

  return (
    <>
      <div align="center">
        <h1>Control Component</h1>
        <form>
          <table border={1}>
            <tbody> 
              <tr>
                <td>Name </td>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <td>Phone</td>
                <td><input type="number" /></td>
              </tr>
              <tr>
                <td></td>
                <td><input type="submit" /></td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </>
  )
}

export default App

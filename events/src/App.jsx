import { category, products } from "./Data";
function App() {

  console.log(category);
  console.log(products);
  
  

  return (
    <div align="center">
      <h1>Filter App</h1>
      <button>All</button>
      <button>Category</button>
      <button>Products</button>
      <br></br>
      <br></br>
      <table border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map((p, index) => {
              const {id, name, category} = p;
              return(
                <>
                  <tr key={index}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{category}</td>
                  </tr>
                </>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default App

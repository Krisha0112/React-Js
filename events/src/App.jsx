import { useState } from "react";
import { category, product } from "./Data";
function App() {

    const [filter, setFilter] = useState([])

    const filterCategory = (name) => {
      if(!name) {
        setFilter(category)
      }else{
        let filtered = category.map( c => c.name === name)
        setFilter(filtered)
      }
    }

    console.log(category);
    console.log(product);

    return (
        <div align="center">
            <h1>Filter App</h1>
            <button onClick={ () => filterCategory()}>All</button> 
            {
                product.map((p , i) => {
                    <button key={i} onClick={ () => filterCategory(p.name)}>{p.name}</button>
                })
            }
            <button >Mobile</button>
            <button>Electronics</button>
            <button>Appliance</button>
            <button>Furniture</button>
            <button>Clothes</button>
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
                        filter.map((p, index) => {
                            const { id, name, category } = p;
                            return (
                                <tr key={index}>
                                    <td>{id}</td>
                                    <td>{name}</td>
                                    <td>{category}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default App

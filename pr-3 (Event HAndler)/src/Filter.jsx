const Filter = ({categories , items , filterItem , filterData}) => {
    return(
        <div align="center">
        <h1>Filter App</h1>
        <button onClick={() => filterData("all")}>All</button>
        {
          categories.map((categories, index)=>{
            const {id , name} = categories
            return(
              <button onClick={() => filterData(name)} key={id}>{name}</button>
            )
          })
        }
        <br /><br />
        <table border={2}>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>CATEGORIES</th>
            </tr>
          </thead>
          <tbody>
            {
              filterItem.length === 0 ?
              (
                items.map((items,index)=>{
                  const {id , item , category} = items
                  return(
                    <tr key={id}>
                      <td>{id}</td>
                      <td>{item}</td>
                      <td>{category}</td>
                    </tr>
                  )
                })
              ) : (
                filterItem.map((items,index)=>{
                  const {id , item , category} = items
                  return(
                    <tr key={id}>
                      <td>{id}</td>
                      <td>{item}</td>
                      <td>{category}</td>
                    </tr>
                  )
                })
              )
            }
          </tbody>
        </table>
        
      </div>
    )
}
export default Filter;
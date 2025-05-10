
import { useState } from "react";
import { categories, items } from "./data"
import Filter from "./Filter";


function App() {

  const [filterItem, setFilterItem] = useState([])

  const filterData = (category) => {
    const filter = items.filter(items => items.category == category)
    setFilterItem(filter);

  }

  return (

    <Filter
      categories={categories}
      items={items}
      filterItem={filterItem}
      filterData={filterData} />
  )
}

export default App
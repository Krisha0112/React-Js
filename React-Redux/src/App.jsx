import { BrowserRouter, Route, Routes } from "react-router"
import View from "./crud/View"
import Add from "./crud/Add"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<View />}/>
          <Route path="/add" element={<Add />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

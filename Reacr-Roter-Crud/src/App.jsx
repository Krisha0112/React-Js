import { BrowserRouter, Route, Routes } from "react-router-dom"
import View from "./pages/View"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<View />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

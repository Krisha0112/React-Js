import React from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Counter from './Page/Counter'
import Add from './Page/Add'
import View from './Page/View'
import Edit from './Page/Edit'

const App = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Counter />} />
        <Route path='/add' element={<Add />} />
        <Route path='/view' element={<View />} />
        <Route path='/edit/:id' element={<Edit />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App

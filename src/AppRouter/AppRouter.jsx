import React from 'react'
import { Route, Routes } from 'react-router'
import NewHappy from '../Pages/NewHappy/NewHappy'

function AppRouter() {
  return (
    
    
    <Routes>
        <Route path='newhappy' element={<NewHappy />}></Route>
    </Routes>
  )
}

export default AppRouter
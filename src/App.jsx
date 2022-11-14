import React from 'react'
import {Routes, Route} from "react-router-dom"
import { Login } from './pages'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/dashboard' element={<h1>Dashboard</h1>} />
    </Routes>
  )
}

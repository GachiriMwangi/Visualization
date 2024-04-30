import { useState } from 'react'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import { Routes, Route } from "react-router-dom"
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/signin" element={ <SignIn />} />
      <Route path="/signup" element={ <SignUp/> }/>
    </Routes>
    </>
  )
}

export default App

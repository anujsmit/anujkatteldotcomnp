import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Portfolio from './Pages/Portfolio'
import Project1 from './Projects/Project1'
import NotFound from './Pages/NotFound'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/project1" element={<Project1 />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  )
}

export default App
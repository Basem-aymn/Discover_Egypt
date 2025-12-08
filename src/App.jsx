import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Places from './pages/Places'
import PlaceDetail from './pages/PlaceDetail'

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/places" element={<Places />} />
        <Route path="/place/:id" element={<PlaceDetail />} />
      </Routes>
    </Router>
  )
}

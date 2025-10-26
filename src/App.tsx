import React from 'react'
import { Routes, Route } from 'react-router-dom'
// import Home from './pages/Home'
import BESTLyonLanding from './pages/BESTLyonLanding'
import Course from './pages/Course'
import Schedule from './pages/Schedule'
import SurvivalGuide from './pages/SurvivalGuide'
import Layout from './components/Layout'

export default function App() {
  return (
    <Layout>
      <Routes>
  <Route path="/" element={<BESTLyonLanding />} />
        <Route path="/course" element={<Course />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/survival" element={<SurvivalGuide />} />
      </Routes>
    </Layout>
  )
}

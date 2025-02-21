import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import LandingPage from './pages/Landing/LandingPage'
import Incubator from './pages/Incubator/Incubator'
import DroneAcademy from './pages/DroneAcademy/DroneAcademy'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="/incubator" element={<Incubator />} />
          <Route path="/droneacademy" element={<DroneAcademy />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
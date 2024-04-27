import './App.css'
import NavBar from './components/NavBar'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { ShipList } from './components/ShipList'
import  MisionList  from './components/MisionList'
import CrewList from './components/CrewList'

function App() {


  return (
    <div>
      <BrowserRouter>
      <NavBar />
    <Routes>
      <Route path="/nave" element={<ShipList />} />
      <Route path="/mision" element={<MisionList />} />
      <Route path="/tripulacion" element={<CrewList />} />
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App

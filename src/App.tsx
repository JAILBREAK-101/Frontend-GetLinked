import './root.css'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Contact from './pages/Contact'

function App() {

  return (
    <>
     <Routes>
      <Route path='/' Component={Home} />
      <Route path='/contact' Component={Contact} />
     </Routes>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from  './Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App

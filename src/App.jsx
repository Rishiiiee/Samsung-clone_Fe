import { useState } from 'react'
import AllRoutes from './Allroutes'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <AllRoutes />
      <Footer />
    </>
  )
}

export default App

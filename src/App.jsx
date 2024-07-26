import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyForm from './components/Example'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="container">
      <MyForm/>
     </div>
    </>
  )
}

export default App

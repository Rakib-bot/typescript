import { useState } from 'react'
import MyComponent from './components/MyComponent'
import { MyContextProvider } from './context_api/myContext'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <MyContextProvider>
      <MyComponent/>
    </MyContextProvider>
  )
}

export default App

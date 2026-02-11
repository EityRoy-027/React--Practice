import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


 

function App() {

   const [count, setCount] = useState(0);
  return(
    
  <>

  <Person></Person>

</>  
  )
}

function Person(){

  const date="11/2/20026";
  return(
    <p>This is my first React Code:{date}</p>
  )
}


export default App
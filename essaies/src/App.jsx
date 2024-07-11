import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Papa from './joh.jsx';
import Quiz from './quiz.jsx'
import {ChangeColor} from './component/changeColor';
function App() {
  const [count, setCount] = useState(0)
 
  return (
    <>
{/* export {ChangeColor} */}
    {/* <ChangeColor/> */}
    <Quiz/>
    </>
  )
}

export default App

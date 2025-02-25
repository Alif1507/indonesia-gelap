
import { motion } from 'motion/react'
import './App.css'

function App() {

  return (
    <>
    <motion.div animate={{ translateY: -900 }} transition={{ duration: 1.2, ease: [0.39, 0.24, 0.15, 0.12] }} className='bg-black w-screen h-screen fixed top-0 left-0'>.</motion.div>
    <motion.div animate={{ translateY: -900 }} transition={{ duration: 1, ease: [0.39, 0.24, 0.15, 0.12] }} className='bg-amber-700 w-screen h-screen fixed top-0 left-0'>.</motion.div>
      <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>
    </>
  )
}

export default App
  
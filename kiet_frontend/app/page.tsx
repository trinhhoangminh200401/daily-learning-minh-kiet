// rafce
import React from 'react'
import Hello from './components/hello'
const Home = () => {
console.log("what type of component is this?")
  return (
    <div>

    <div className='text-5xl underline'>Welcome to Nextjs</div>
    <Hello />
    </div>
  )
}

export default Home
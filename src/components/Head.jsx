import React from 'react'
import { Link } from "react-router-dom"
// import Head from "./components/Head"
// import Foot from "./components/Foot"
const Head = () => {
  return (
    <div className='flex flex-col items-center gap-y-4'>
      <h1 className='text-xl text-red-500'>Simple Application!</h1>
      <div className="px-2 flex gap-x-5 border-b hover:shadow-sm hover:transition-shadow hover:shadow-blue-500">
        <Link to={"/about"}>About Me</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/projects"}>Projects</Link>
      </div>
    </div>
  )
}

export default Head
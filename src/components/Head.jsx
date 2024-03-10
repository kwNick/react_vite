import React from 'react'
import { Link } from "react-router-dom"
// import Head from "./components/Head"
// import Foot from "./components/Foot"
const Head = () => {
  return (
    <div className='flex flex-col items-center gap-y-4'>
      <h1 className='text-xl text-red-500'>Simple Application!</h1>
      <div className="flex gap-x-5">
        <Link to={"/about"} className='p-2 border-b hover:rounded-xl hover:shadow hover:transition-shadow hover:shadow-slate-500 hover:text-xl duration-300'>About Me</Link>
        <Link to={"/contact"} className='p-2 border-b hover:rounded-xl hover:shadow hover:transition-shadow hover:shadow-slate-500 hover:text-xl duration-300'>Contact</Link>
        <Link to={"/projects"} className='p-2 border-b hover:rounded-xl hover:shadow hover:transition-shadow hover:shadow-slate-500 hover:text-xl duration-300'>Projects</Link>
      </div>
    </div>
  )
}

export default Head
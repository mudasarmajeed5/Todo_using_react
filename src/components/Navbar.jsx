import React from 'react'
const Navbar = () => {
  return (
    <nav className='navbar flex justify-around p-2 items-center bg-[#FFE66D]'>
        <div><img className='w-[50%] md:w-[200px] sm:w-[30%] mx-auto hover:cursor-pointer' src={"https://upload.wikimedia.org/wikipedia/commons/6/6d/Todoist_logo.png"} alt=""/></div>
        <ul className='hidden md:flex justify-between gap-8 text-lg '>
            <li className='hover:bg-[#343434] hover:text-[#F7FFF7] px-2 py-1 rounded-md cursor-pointer transition-all duration-300'>Buy me a Coffee</li>
            <li className='hover:bg-[#343434] hover:text-[#F7FFF7] px-2 py-1 rounded-md cursor-pointer transition-all duration-300'>More Projects</li>
            <li className='hover:bg-[#343434] hover:text-[#F7FFF7] px-2 py-1 rounded-md cursor-pointer transition-all duration-300'>Github</li>
        </ul>
    </nav>
  )
}

export default Navbar

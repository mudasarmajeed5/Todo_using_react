import React from 'react'
const Navbar = () => {
  return (
    <nav className='navbar flex justify-center md:items-start flex-col md:flex-row md:justify-around p-2 items-center bg-[#FFE66D]'>
        <div className='font-bold text-xl'>
          <a href="/">TodoApp</a>
        </div>
        <ul className='flex justify-around gap-8'>
          <li><a className='underline underline-offset-4 transition-all hover:underline-offset-8' href="/">TodoList</a></li>
          <li><a className='underline underline-offset-4 transition-all hover:underline-offset-8' href="https://github.com/mudasarmajeed5">Follow Creator</a></li>
          <li><a className='underline underline-offset-4 transition-all hover:underline-offset-8' href="https://github.com/mudasarmajeed5?tab=repositories">See Projects</a></li>
        </ul>
    </nav>
  )
}

export default Navbar

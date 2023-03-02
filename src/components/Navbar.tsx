import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    
    <nav className={`px-4  sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0  bg-yellow-500 ${isScrolled ? 'bg-opacity-100' : 'bg-opacity-0'} shadow-xl`}>
      <div className="container flex flex-wrap items-center justify-between mx-auto">
      <a href="#" className="flex items-center">
          <span className="self-center text-3xl font-semibold whitespace-nowrap text-gray-900 font font-crimson">Van Gogh.</span>
      </a>
      <div className="items-center justify-start hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
        <ul className={`flex flex-col p-1 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 bg-yellow-500 ${isScrolled ? 'bg-opacity-100' : 'bg-opacity-0'}`}>
          <li>
            <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:hover:text-gray-800 md:p-0" aria-current="page">Home</a>
          </li>
          <li>
            <a href="#Collection" className="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:hover:text-gray-800 md:p-0 ">Collection</a>
          </li>
          <li>
            <a href="#Programs" className="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:hover:text-gray-800 md:p-0 ">Classes</a>
          </li>
          <li>
            <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:hover:text-gray-800 md:p-0 ">Contact</a>
          </li>
        </ul>
      </div>
      <div className="flex md:order-2">
          <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0">Register</button>
          <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
      </div>
      
      </div>
    </nav>

  )  
}

export default dynamic(() => Promise.resolve(Navbar), { ssr: false })
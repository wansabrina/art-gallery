import React from 'react'
import dynamic from 'next/dynamic'

const Footer = () => {
  return (
    <footer className="p-4 bg-yellow-500 rounded-t-lg shadow md:px-6 md:py-8hu">
    <div className="sm:flex sm:items-center sm:justify-between">
        <a href="#" className="flex items-center mb-4 sm:mb-0">
          <a href="#" className="font-bold text-3xl text-gray-800 font-crimson">Van Gogh Academy.</a>
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-800 sm:mb-0">
            <li>
                <a href="https://art-gallery-oacease.vercel.app/" className="mr-4 hover:underline md:mr-6 ">Home</a>
            </li>
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
            </li>
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
            </li>
            <li>
                <a href="#Contact" className="hover:underline">Contact</a>
            </li>
        </ul>
    </div>
    <hr className="my-3 border-gray-700 sm:mx-auto lg:my-8" />
    <span className="block text-sm text-gray-800 sm:text-center">© <a href="#" className="hover:underline"> 2023 Art Gallery™</a>. All Rights Reserved.
    </span>
</footer>
  )
}

export default dynamic (() => Promise.resolve(Footer), {ssr: false})
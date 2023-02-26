import React, { useState, useEffect } from 'react'
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

  /*
  Baris 1: Mendefinisikan sebuah komponen bernama "Navbar" menggunakan arrow function.

  Baris 2: Mendefinisikan state "isScrolled" yang digunakan untuk menyimpan 
  status dari posisi scroll.

  Baris 4-13: Menggunakan hook "useEffect" untuk menangani perubahan yang 
  terjadi pada komponen ini. Pada useEffect, kita membuat sebuah fungsi bernama 
  "handleScroll" yang akan dipanggil ketika terjadi perubahan pada halaman 
  (scroll). Fungsi ini akan mengecek posisi scroll pada halaman. Jika posisi 
  scrollnya lebih dari 0, maka kita mengatur nilai state "isScrolled" menjadi true, 
  jika tidak maka kita mengatur nilai state "isScrolled" menjadi false.

  Baris 6-12: Mendefinisikan event listener pada window, sehingga ketika terjadi 
  perubahan pada scroll, fungsi "handleScroll" akan dipanggil.

  Baris 14-16: Menggunakan return pada useEffect, dimana pada return kita 
  menghapus event listener yang telah dibuat agar tidak terjadi memory leak.

  Baris 18: Menutup fungsi "Navbar".

  */

  return (
    <nav className={`fixed top-0 left-0 w-full bg-yellow-500 ${isScrolled ? 'bg-opacity-100' : 'bg-opacity-0'} shadow-xl z-10`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="w-1/4">
            <ul className="flex justify-start items-center">
              <li className="mr-6">
                <a href="#Home" className="text-gray-800 font-semibold hover:text-white scroll-behavior:smooth">Home</a>
              </li>
              <li className="mr-6">
                <a href="#Programs" className="text-gray-800 font-semibold hover:text-white scroll-behavior:smooth">Programs</a>
              </li>
              <li className="mr-6">
                <a href="#Campaign" className="text-gray-800 font-semibold hover:text-white scroll-behavior:smooth">Campaign</a>
              </li>
            </ul>
          </div>
          <div className="w-2/4 text-center">
            <a href="#" className="font-bold text-3xl text-gray-800 font-crimson">Van Gogh Academy.</a>
          </div>
          <div className="w-1/4">
            <ul className="flex justify-end items-center">
              <li className="mr-6">
                <a href="#Contact" className="text-gray-800 font-semibold hover:text-white scroll-behavior:smooth">Contact</a>
              </li>
              <li>
                <form className="flex" action="#" method="get">
                  <input className="rounded-full py-1 px-3  border-t mr-0 mx-2 border-b border-l text-gray-800 border-gray-200 bg-white text-sm" type="search" name="search" placeholder="Search..." />
                </form>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default dynamic(() => Promise.resolve(Navbar), { ssr: false })
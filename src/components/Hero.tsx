import React from 'react'
import dynamic from 'next/dynamic'
import ButtonLink from './ButtonLink'
import Image from 'next/image'

const About = () => {
  return (
    <section id='Home' className='scroll-behavior:smooth'>
    <main className="bg-cover bg-center pt-16 min-h-screen h-screen" style={{ marginTop: '-4rem', height: 'calc(100vh + 4rem)'}}>
    <div className="w-full h-full flex justify-center items-center" style={{ backgroundImage: 'url("img/43202.jpg")', paddingTop: '4rem', backgroundSize: 'cover' }}>
      <div className="w-3/4 h-3.5/4 bg-white bg-opacity-50 rounded-md shadow-lg p-8 flex flex-row items-center" style={{ minWidth: '600px' }}>
        <div className="w-1/2 pr-8">
          <h1 className="text-4xl text-left font-bold text-gray-800 mb-4">Unleashing Your Inner Artist: Inspired by Van Gogh</h1>
          <p className="text-lg text-justify text-gray-600 mb-4">The Van Gogh Academy is launching a new campaign to inspire aspiring artists around the world to explore their creativity. Join our classes to develop your skills and discover your unique artistic style.</p>
          <div className='flex'>
            <div className='py-3'>
              <ButtonLink title='Join Our Campaign' link='basicrq'/>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <Image src="/img/vangoghhh.gif" alt="Gogh Self Portrait" className="w-full h-full rounded-md h-30" height={600} width={600}/>
        </div>
      </div>
    </div>
    </main>
    </section>
  )
}

export default dynamic (() => Promise.resolve(About), {ssr: false})
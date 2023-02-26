import React from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import CollectionImage from './CollectionImage'
import ButtonLink from './ButtonLink'
import { FaArrowRight } from 'react-icons/fa';


const Paintings = () => {
  return (
    <section className='bg-yellow-100 scroll-behavior:smooth' id='Collection'>
      <div className="py-10">
        <div className='flex flex-row justify-between'>
          <h2 className="text-4xl ml-10 font-bold text-gray-800">Van Gogh Self-Collection</h2>
            <div className='flex'>
              <h1 className="text-xl mt-4 mr-2 font-semibold font-crimson">Unveiling the Many Faces of Van Gogh</h1>
              <a href="https://www.vangoghmuseum.nl/en/collection" className="mr-10 mt-6">
                <span><FaArrowRight /></span>
              </a>
            </div>
        </div>
        <hr className="my-4 mx-4 border-gray-700" />
        <div className="w-max-full flex flex-wrap justify-center mx-10">
          <div className="w-full md:w-1/3 px-5 py-5">
            <div>
              <CollectionImage 
                image='/img/art6.png' 
                title='Van Gogh Self-Portrait (1889)'
                paragraph='A striking self-portrait showing the artists intense gaze and characteristic brushwork.'/>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-5 py-5">
            <div>
              <CollectionImage 
                image='/img/art3.png' 
                title='The Sunflower (1888)'
                paragraph='A series of still life paintings of bright yellow sunflowers in various arrangements, showing the artists mastery of color and form.'/>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-5 py-5">
            <div>
              <CollectionImage 
                image='/img/art1.png' 
                title='The Starry Night (1889)'
                paragraph='A mesmerizing and surreal nighttime landscape, with swirling stars and a moonlit village.'/>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-5 py-5">
            <div>
              <CollectionImage 
                image='/img/art2.png' 
                title='Starry Night Over the Rhône (1888)'
                paragraph='A stunning and atmospheric nocturnal scene, with sparkling stars reflected in the calm waters of the Rhône river.'/>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-5 py-5">
            <div>
              <CollectionImage 
                image='/img/art4.png' 
                title='Seascape at Saintes-Maries (1888)'
                paragraph='A dramatic and stormy seascape, capturing the wild beauty and power of the sea.'/>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-5 py-5">
            <div>
              <CollectionImage 
                image='/img/art5.png' 
                title='The Bedroom (1889)'
                paragraph='A vivid and colorful depiction of the artists bedroom, with bold colors and thick brushstrokes conveying a sense of intimacy and emotional depth.'/>
            </div>
          </div>
        </div>
        <div className='py-10 flex justify-center items-center'>
          <ButtonLink title='See More' link='https://www.vangoghmuseum.nl/en/collection'/>
        </div>
      </div>
    </section>
  )
}

export default dynamic(() => Promise.resolve(Paintings), { ssr: false })

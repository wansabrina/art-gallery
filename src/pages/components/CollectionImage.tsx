import React from 'react'
import Image from 'next/image'

type CollectionType = {
    title: string;
    paragraph: string;
    image: string;
}

const CollectionImage = ({title, paragraph, image}: CollectionType) => {
  return (
    <div>
      <div className="relative">
        <Image src={image} alt="Product 1" className="w-full h-50 hover:shadow-xl transition-transform duration-500" height={600} width={600} />
        <div className="absolute top-0 left-0 w-full h-full bg-white opacity-0 hover:opacity-80 flex justify-start flex-col transition-opacity duration-500">
          <h3 className="text-3xl px-20 pt-20  font-bold text-gray-800 font-baskerville">{title}</h3>
          <p className="text-m px-20 text-gray-800 mb-4">{paragraph}</p>
        </div>
      </div>
    </div>
  )
}

export default CollectionImage
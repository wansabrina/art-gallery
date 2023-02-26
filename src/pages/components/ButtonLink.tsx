import React from 'react'

type ButtonLinkType = {
    title: string;
    link?: string;
}

const ButtonLink = ({title, link}: ButtonLinkType) => {
  return (
    <button>
        <a href={link} className="bg-yellow-500 hover:bg-white text-white hover:text-yellow-500 font-bold py-2 px-4 rounded-md">
            {title}
        </a>
    </button>
  )
}

export default ButtonLink
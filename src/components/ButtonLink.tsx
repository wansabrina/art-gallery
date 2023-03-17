import React from "react";

type ButtonLinkType = {
  title: string;
  link?: string;
};

const ButtonLink = ({ title, link }: ButtonLinkType) => {
  return (
    <button>
      <a
        href={link}
        className="bg-yellow-500 text-white hover:bg-yellow-600 font-bold py-2 px-4 rounded-md"
      >
        {title}
      </a>
    </button>
  );
};

export default ButtonLink;

import React from "react";
import dynamic from "next/dynamic";
import ButtonLink from "./ButtonLink";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="Home" data-testid="hero-section">
      <main
        className="bg-cover bg-center pt-16"
        style={{
          marginTop: "-4rem",
          height: "calc(100vh + 4rem)",
        }}
      >
        <div
          className="bg-fixed w-full h-screen flex justify-center items-center sm:h-screen"
          style={{
            backgroundImage: 'url("/img/432020.png")',
            padding: "2rem",
            paddingTop: "5rem",
            backgroundSize: "cover",
          }}
        >
          <div
            className="md:w-3/4 md:h-3.5/4 sm:w-full bg-white bg-opacity-50 rounded-md shadow-lg p-8 flex flex-col sm:flex-row items-center"
            style={{ minWidth: "300px" }}
          >
            <div className="sm:w-1/2 pr-6">
              <h1 className="text-3xl sm:text-3xl text-center sm:text-left font-bold text-gray-800 mb-2">
                Unleashing Your Inner Artist: Inspired by Van Gogh
              </h1>
              <p className="text-base text-justify sm:text-lg  text-gray-600 mb-4">
                The Van Gogh Academy is launching a new campaign to inspire
                aspiring artists around the world to explore their creativity.
                Join our classes to develop your skills and discover your unique
                artistic style.
              </p>
              <div className="flex justify-center sm:justify-start">
                <div className="pt-1 pb-4">
                  <ButtonLink title="Join Our Campaign" link="CampaignPage" />
                </div>
              </div>
            </div>
            <div className="sm:w-1/2">
              <Image
                src="/img/vangoghhh.gif"
                alt="Gogh Self Portrait"
                className="w-full h-auto rounded-md"
                height={500}
                width={500}
              />
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default dynamic(() => Promise.resolve(Hero), { ssr: false });

import React, { useState } from 'react'
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CampaignForm from '@/components/CampaignForm';
import ExhibitSlider from '@/components/ExhibitSlider'
import SubmittedPainting from '@/components/Artworks'

export default function CampaignPage() {
        return (
            <main className='bg-yellow-100'>
            <Navbar/>
            <div>
                <div className='pt-24 pb-14 flex flex-col items-center justify-center sm:' style={{ backgroundImage: 'url("img/43202.jpg")'}}>
                    <h1 className="mb-4 text-4xl text-center font-extrabold leading-none tracking-tight sm:text-5xl text-black font-crimson">Experience art from around the world at our global exhibitions.</h1>
                    <p className="mb-6 text-lg font-normal text-gray-800 text-center lg:text-xl sm:px-16 xl:px-48">Van Goghs emotionally charged and vividly colorful paintings have become some of the most recognizable and beloved artworks in history.</p>
                </div>
                <div className='mt-10'>
                    <h1 className="pl-24 text-3xl underline underline-offset-8 font-extrabold leading-none tracking-tight text-gray-900 font-crimson">Current Exhibitions</h1>
                    <ExhibitSlider/>
                </div>
                <div className='mt-10'>
                    <h1 className="pr-24 text-3xl underline underline-offset-8 flex justify-end font-extrabold leading-none tracking-tight text-gray-900 font-crimson">Submitted Collections</h1>
                    <SubmittedPainting/>
                </div>
            </div>
            <div className='h-screen mb-20'>
                <div className="flex flex-wrap mb-20 px-20 pb-20 h-screen" id='Programs'>
                    <div className="w-full md:w-2/6 flex justify-center bg-yellow-500">
                        <CampaignForm/>
                    </div>
                    <div className="w-full md:w-4/6 bg-cover bg-center bg-yellow-500" style={{ backgroundImage: 'url("img/bgkuning.webp")' }}>
                    </div>
                </div>
            </div>
            <Footer/>
            </main>
        )
      }
            
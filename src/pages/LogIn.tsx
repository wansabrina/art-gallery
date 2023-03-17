import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InputField from '@/components/InputField';

type FormValues = {
  email: string,
  password: string,
}

export default function Demo() {
  const { register, handleSubmit, formState, reset, formState: { errors, isSubmitSuccessful} } = useForm();
  const router = useRouter();

  useEffect(() => {
    if (isSubmitSuccessful) {
      router.push('https://art-gallery-oacease.vercel.app/') // replace "success-page" with your desired URL
    }
  }, [isSubmitSuccessful, router])

  register('email', {
    required: {
      value: true,
      message: "Email is required."
    },
    pattern: {
      value: /^\S+@\S+$/i,
      message: "Please enter a valid email address."
    }
  });

  register('password', {
    required: {
      value: true,
      message: "Password is required."
    },
  });

  return (
    <main className='bg-center pt-12 h-screen' style={{ marginTop: '-4rem', height: 'calc(100vh + 4rem)'}}>
      <Navbar/>
      <div className="w-full h-full flex justify-center items-center bg-cover pt-7" style={{ backgroundImage: 'url("img/43202.jpg")'}}>
          <div className="w-1/2.5 h-1/2 bg-white bg-opacity-80 rounded-md shadow-lg pl-8 flex flex-row items-center py-20">
            <form onSubmit={handleSubmit((data)=>{ console.log(data); })} className='flex flex-col gap-y-3 pr-20 pl-10'>
              <p className='text-black font-semibold text-2xl'>Log in</p>
                <InputField type='text' name='email' label='Email' register={register} errors={errors} />
                <InputField type='password' name='password' label='Password' register={register} errors={errors} />          
              <span className="mt-2  text-sm text-black">Dont have account? <a href="RegisterForm" className="font-medium text-blue-500 hover:underline">Register here</a>.</span>
              <input type="submit" className='text-black bg-yellow-500 hover:bg-yellow-600 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center cursor-pointer'/>
            </form>
          </div>
      </div>
    <Footer/>
  </main>
  )
}

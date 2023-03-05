import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InputField from '@/components/InputField';
import SubmitMessage from '@/components/SubmitMessage'

type FormValues = {
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    Country: string,
    City: string,
    password: string,
}

export default function Demo() {
    const { register, handleSubmit, formState, reset, formState: { errors, isSubmitSuccessful} } = useForm();

    register('firstName', {
        required: {
            value: true,
            message: "First Name is required."
        },
        minLength: {
            value: 4,
            message: "Minimum 4."
        }
    });

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

    register('phoneNumber', {
        required: {
            value: true,
            message: "Phone number is required."
        },
        minLength: {
            value: 10,
            message: "Phone number should be at least 10 digits."
        },
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
            {isSubmitSuccessful ? (  
                <div>
                    <SubmitMessage message='Congrats! Youre one of us now!' paragraph='You have successfully registered. Please check your email for a confirmation message and further instructions. Welcome to the team!' buttonmsg='Home' buttonlink='http://localhost:3000/' />
                </div>
            ) : (
              <div className="w-1/2.5 h-5/6 bg-white bg-opacity-80 rounded-md shadow-lg pl-8 flex flex-row items-center py-20">
                <div className="w-1/2 pr-8">
                  <Image src="/img/vangogh.jpg" alt="formImg" width={500} height={500} />
                </div>
                <form onSubmit={handleSubmit((data)=>{ console.log(data); })} className='flex flex-col gap-y-3'>
                  <p className='text-black font-semibold text-2xl'>Register</p>
                  <div className='flex flex-row'>
                    <InputField type='text' name='firstName' placeholder='First Name' register={register} errors={errors} />
                    <div className='ml-6'>
                      <InputField type='text' name='lastName' placeholder='Last Name' register={register} errors={errors} />                            
                    </div>
                  </div>
                  <InputField type='text' name='email' placeholder='name@gmail.com' register={register} errors={errors} />
                  <InputField type='text' name='phoneNumber' placeholder='Phone Number' register={register} errors={errors} />
                  <InputField type='password' name='password' placeholder='Password' register={register} errors={errors} />
                  <div className='flex flex-row'>
                    <div className='flex flex-col'>
                      <label className="block mb-2 text-sm font-medium text-black">City</label>
                      <InputField type='text' name='City' placeholder='City' register={register} errors={errors} />
                    </div>
                    <div className='flex flex-col ml-6'>
                      <label className='block text-sm font-medium text-black mb-2' htmlFor="Country">Country</label>
                      <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-black block w-full p-2.5 mr-12' {...register("Country", { required: true })}>
                        <option>United States</option>
                        <option>Indonesia</option>
                        <option>Japan</option>
                        <option>North Korea</option>
                      </select>
                    </div>
                  </div>            
                  <span className="mt-2  text-sm text-black">Already registered? <a href="LogIn" className="font-medium text-blue-500 hover:underline">Log in</a>.</span>
                  <input type="submit" className='text-black bg-yellow-500 hover:bg-yellow-600 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center cursor-pointer'/>
                </form>
              </div>
            )}
          </div>
        <Footer/>
    </main>
    )
}
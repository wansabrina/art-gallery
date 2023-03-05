import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InputField from '@/components/InputField';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import SubmitMessage from '@/components/SubmitMessage'

type FormValues = {
    displayName: string,
    email: string,
    arttitle: string,
    artdesc: string,
}

export default function CampaignForm() {
    const { register, handleSubmit, formState, reset, formState: { errors, isSubmitSuccessful} } = useForm();

    register('displayName', {
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

    register('arttitle', {
        required: {
            value: true,
            message: "Art Title is required."
        },
        maxLength: {
            value: 30,
            message: "Maximum 30 character."
        }
    });

    register('artdesc', {
        required: {
            value: true,
            message: "Art Description is required."
        },
        maxLength: {
            value: 200,
            message: "Maximum 200 character."
        }
    });

    return (
        <main>
            <div>
                {isSubmitSuccessful ? (  
                    <div className='pt-28'>
                        <SubmitMessage message='Thank You For Joining Us!' paragraph='Please check your email for a confirmation message and further instructions. Welcome to the team!' buttonmsg='Submit Another Art' buttonlink='CampaignPage' />
                    </div>
                ) : (
                <div className="w-1/2.5 h-5/6 flex flex-row py-20">
                    <form onSubmit={handleSubmit((data)=>{ console.log(data); })} className='flex flex-col gap-y-3'>
                    <p className='text-black font-semibold text-2xl'>Register For Campaign</p>
                    <InputField type='text' name='displayName' placeholder='Display Name' register={register} errors={errors} />
                    <InputField type='text' name='email' placeholder='name@gmail.com' register={register} errors={errors} />
                    <InputField type='text' name='arttitle' placeholder='Art Title' register={register} errors={errors} />
                    <textarea {...register("artdesc")} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Art Description (Max 200 characters)"></textarea>
                    <label className="text-sm font-medium text-gray-900" >Upload Your Art</label>
                    <InputField type='file' name='fileInput' placeholder='Input Your Art' register={register} errors={errors} />
                    <p className="mt-2  text-sm text-black">Dont have account? <a href="LogIn" className="font-medium text-blue-500 hover:underline">Log in</a> or <a href="RegisterForm" className="font-medium text-blue-500 hover:underline">Register here.</a></p>
                    <input type="submit" className='text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center cursor-pointer'/>
                    </form>
                </div>
                )}
            </div>
    
    </main>
    )
}
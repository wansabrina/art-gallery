import React from 'react'
import { useForm } from 'react-hook-form'
import Image from 'next/image';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import InputField from './components/InputField';
import { FaSearch } from 'react-icons/fa';

type FormValues = {
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    Country: string,
    City: string,
    password: string,
    fileInput: file,

}

export default function Demo() {
    const {register, watch, formState, reset, setValue, handleSubmit, formState: { errors, isSubmitSuccessful } } = useForm<FormValues>({
        // defaultValues: {
        //     firstName: 'Sabrina',
        //     lastName: 'Mayzura'
        // }
    });

    // console.log(watch(['firstName', 'lastName']))

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

    React.useEffect(()=> {
        if(formState.isSubmitSuccessful){
            reset({
                firstName: "",
                lastName: "",
                email: "",
                phoneNumber: "",
                Country: "",
                City: "",
                password: "",

            })
        }
    },  [formState, reset])

    React.useEffect(() => {
        if (formState.isSubmitSuccessful) {
          setValue('fileInput', null); // reset the file input element to empty
        }
      }, [formState.isSubmitSuccessful, setValue]);

    return (
        <main className='bg-center pt-12 h-screen' style={{ marginTop: '-4rem', height: 'calc(100vh + 10rem)'}}>
        <Navbar/>
        <div className="w-full h-full flex justify-center items-center bg-cover pt-7" style={{ backgroundImage: 'url("img/43202.jpg")'}}>
            <div className="w-1/2.5 h-5/6 bg-white bg-opacity-80 rounded-md shadow-lg pl-8 flex flex-row items-center">
                <div className="w-1/2 pr-8">
                    <Image src="/img/vangogh.jpg" alt="formImg" width={500} height={500} />
                </div>
                <form onSubmit={handleSubmit((data)=>{ console.log(data); })} className='flex flex-col gap-y-3'>
                    <p className='text-black font-semibold text-2xl'>Register For Campaign</p>
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
                                <option>Wakanda</option>
                                <option>Sukolilo</option>
                            </select>
                        </div>
                    </div>          
                    <label className="text-sm font-medium text-gray-900" >Upload Your Art</label>
                    <InputField type='file' name='fileInput' placeholder='Input Your Art' register={register} errors={errors} />
                    <p className="mt-2  text-sm text-black">We’ll never share your details. Read our <a href="#" className="font-medium text-blue-500 hover:underline">Privacy Policy</a>.</p>
                    <input type="submit" className='text-black bg-yellow-500 hover:bg-yellow-600 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center cursor-pointer'/>
                </form>
            </div>
        </div>
        <Footer/>
    </main>
    )
}
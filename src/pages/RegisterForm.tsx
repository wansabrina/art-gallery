import React from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InputField from "@/components/InputField";
import SubmitMessage from "@/components/SubmitMessage";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  Country: string;
  City: string;
  password: string;
};

export default function Demo() {
  const {register, handleSubmit, formState, reset, formState: { errors, isSubmitSuccessful },} = useForm();

  register("firstName", { required: { value: true, message: "First Name is required." }, minLength: { value: 4, message: "Minimum 4." } });
  register("email", { required: { value: true, message: "Email is required." }, pattern: { value: /^\S+@\S+$/i, message: "Please enter a valid email address." } });
  register("phoneNumber", { required: { value: true, message: "Phone number is required." }, minLength: { value: 10, message: "Phone number should be at least 10 digits." } });
  register("password", { required: { value: true, message: "Password is required." } });

  return (
    <main className="bg-center pt-12 h-screen" style={{ marginTop: "-4rem", height: "calc(100vh + 4rem)" }}>
      <Navbar />
      <div className="w-full h-full flex justify-center items-center bg-cover pt-10" style={{ backgroundImage: 'url("img/43202.jpg")' }}>
        {isSubmitSuccessful ? (
          <div>
            <SubmitMessage message="Congrats! Youre one of us now!" paragraph="You have successfully registered. Please check your email for further instructions." buttonmsg="Home" buttonlink="http://localhost:3000/"/>
          </div>
        ) : (
          <div className="flex items-center min-h-screen pt-9">
            <div className="flex-1 h-full max-w-4xl mx-auto bg-white bg-opacity-80 rounded-lg shadow-xl">
              <div className="flex flex-col md:flex-row">
                <div className="h-32 md:h-auto md:w-1/2">
                  <Image className="object-cover w-full h-full rounded-l-lg" src="/img/vangogh.jpg" alt="" height={300} width={300}/>
                </div>
                <div className="flex items-center justify-center sm:p-12 md:w-1/2 p-10">
                  <form onSubmit={handleSubmit((data) => {console.log(data);})}className="flex flex-col gap-y-3">
                    <p className="text-black font-semibold text-2xl">Register</p>
                    <div className="flex flex-row">
                      <InputField type="text" label="First Name" name="firstName" register={register} errors={errors}/>
                      <div className="ml-6">
                        <InputField type="text" label="Last Name" name="lastName" register={register} errors={errors}/>
                      </div>
                    </div>
                    <InputField type="text" label="Email" name="email" register={register} errors={errors}/>
                    <InputField type="text" label="Phone Number" name="phoneNumber" register={register} errors={errors}/>
                    <InputField type="password" label="Password" name="password" register={register} errors={errors}/>
                    <div className="flex flex-row">
                      <div className="flex flex-col">
                        <label className="block mb-2 text-sm font-medium text-black">City</label>
                        <InputField type="text" label="City" name="City" register={register} errors={errors}/>
                      </div>
                      <div className="flex flex-col ml-6">
                        <label className="block text-sm font-medium text-black mb-2" htmlFor="Country">Country</label>
                        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-black block w-full p-2.5 mr-12"{...register("Country", { required: true })}>
                          <option>United States</option>
                          <option>Indonesia</option>
                          <option>Japan</option>
                          <option>North Korea</option>
                        </select>
                      </div>
                    </div>
                    <span className="mt-2  text-sm text-black">{" "}Already registered?{" "}<a href="LogIn" className="font-medium text-blue-500 hover:underline">{" "}Log in</a>.</span>
                    <input type="submit" className="text-black bg-yellow-500 hover:bg-yellow-600 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center cursor-pointer"/>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}

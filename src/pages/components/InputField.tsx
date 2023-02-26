import React, { FC } from "react";
import { FormValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  type: string;
  name: string;
  placeholder: string;
  register: UseFormRegister<FormValues>;   //register: UseFormRegister<any>; 
  errors: FormErrors;     //errors: any;   
}

const InputField: FC<InputProps> = ({type, name, placeholder, register, errors }) => {
  return (
    <div>
      <input type={type} {...register(name)} name={name} className='bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 block w-full p-2.5' placeholder={placeholder}/>
      <p className='text-black text-sm'>{errors[name]?.message}</p>
    </div>
  );
};

export default InputField;
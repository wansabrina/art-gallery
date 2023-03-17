import React, { FC } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  type: string;
  name: string;
  label: string;
  register: UseFormRegister<FieldValues>; //register: UseFormRegister<any>;
  errors: any;
}

const InputField = ({ type, name, register, label, errors }: InputProps) => {
  return (
    <div>
      <div className="relative">
        <input type={type} {...register(name)} name={name} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-white rounded-lg border-1 appearance-none   border-gray-600  focus:outline-none focus:ring-0 focus:border-gray-600 peer" placeholder=" "/>
        <label className="absolute text-sm text-gray-800  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent  px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">{label}</label>
      </div>
      <p id="outlined_error_help" className="mt-2 text-xs text-red-600 ">
        {errors[name]?.message}
      </p>
    </div>
  );
};

export default InputField;

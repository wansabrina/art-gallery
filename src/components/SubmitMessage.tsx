import React from 'react'
import ButtonLink from './ButtonLink';
import { BsFillCheckCircleFill } from 'react-icons/bs';

type product = {
    message: string;
    paragraph: string;
    buttonmsg: string;
    buttonlink: string;
}

const SubmitMessage = ({message, paragraph, buttonmsg, buttonlink}: product) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
    <div className="flex justify-end px-10 pt-10"></div>
    <div className="flex flex-col items-center pb-10 px-10">
    <span className="text-green-500 pb-4"><BsFillCheckCircleFill size={80} /></span>
        <h5 className="mb-2 text-xl font-medium text-gray-900">{message}</h5>
        <span className="text-m text-gray-500 text-center pb-4">{paragraph}</span>
        <ButtonLink title={buttonmsg} link={buttonlink}/>
    </div>
</div>
  )
}

export default SubmitMessage
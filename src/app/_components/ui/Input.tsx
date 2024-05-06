import React from 'react';
import {IQuest} from "@/interfaces/interfaces";

interface IInput {
  label?: string,
  placeholder?: string,
  className?: string,
}

const Input:React.FC< IInput > = ({
  label,
  placeholder,
  className
}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <label className="mb-3">{label}</label>
      <input type="text" className="rounded outline-none py-3 px-8 border-[#777676] border border-solid bg-transparent text-[#9D9C9C]" placeholder={placeholder}/>
    </div>
  );
};

export default Input;
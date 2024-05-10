import React from 'react';
import { UseFormRegister, FieldError} from "react-hook-form";
import { IForm, ValidFieldNames } from "@/interfaces/interfaces";

interface IInput {
  label?: string,
  placeholder?: string,
  className?: string,
  register: UseFormRegister<IForm>;
  valueAsNumber?: boolean;
  name: ValidFieldNames;
  error?: FieldError;
  type?: string,
}

const Input: React.FC<IInput>  = ({
  label,
  placeholder,
  className,
  register,
  valueAsNumber,
  name,
  error,
  type = valueAsNumber ? "number" : "text",
}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <label className="mb-3">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        {...register(name, {
          valueAsNumber,
        })}
        className="rounded outline-none py-3 px-8 border-[#777676] border border-solid bg-transparent text-[#9D9C9C] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
      />
      {error && <span className="text-orange mt-1">{error.message}</span>}
    </div>
  );
};

export default Input;
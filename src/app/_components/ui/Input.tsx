import React from 'react';
import { FieldValues, UseFormRegister, Path } from "react-hook-form";

interface IInput<T extends FieldValues> {
  label?: string,
  placeholder?: string,
  className?: string,
  register: UseFormRegister<T>;
  valueAsNumber?: boolean;
  name: Path<T>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  type?: string,
}

const Input = <T extends object> ({
  label,
  placeholder,
  className,
  register,
  valueAsNumber,
  name,
  onChange,
  type = valueAsNumber ? "number" : "text",
} : IInput<T>) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <label className="mb-3">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        {...register(name, {
          onChange,
          valueAsNumber,
        })}
        className="rounded outline-none py-3 px-8 border-[#777676] border border-solid bg-transparent text-[#9D9C9C] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
      />
    </div>
  );
};

export default Input;
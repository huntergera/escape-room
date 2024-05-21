"use client";
import React, { useState } from 'react';
import { UseFormRegister, FieldError, Path, FieldValues} from "react-hook-form";
import Image from "next/image";

interface IInput<T extends FieldValues> {
  label?: string,
  placeholder?: string,
  className?: string,
  register: UseFormRegister<T>,
  valueAsNumber?: boolean,
  name: Path<T>,
  error?: FieldError,
  type?: string,
}

const Input = <T extends object> ({
  label,
  placeholder,
  className,
  register,
  valueAsNumber,
  name,
  error,
  type = valueAsNumber ? "number" : "text",
} : IInput<T>) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={`flex flex-col ${className} relative`}>
      <label className="mb-3">{label}</label>
      <input
        type={showPassword ? "text" : type}
        placeholder={placeholder}
        {...register(name, {
          valueAsNumber,
        })}
        className="rounded outline-none py-3 px-8 border-[#777676] border border-solid bg-transparent text-[#9D9C9C] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
      />
      {error && <span className="text-orange mt-1">{error.message}</span>}
      {type === "password" && (
        <span onClick={handleTogglePassword} className="absolute right-2 top-10 cursor-pointer">
          <Image
            src={showPassword ? "/img/icons/eye.svg" : "/img/icons/eye-slash.svg"}
            alt={showPassword ? "Hide password" : "Show password"}
            className=""
            width={24}
            height={24}
          />
          </span>
      )}
    </div>
  );
};

export default Input;
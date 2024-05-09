import React from 'react';
import { FieldError, UseFormRegister } from "react-hook-form";

import { IForm, ValidFieldNames } from "@/interfaces/interfaces";

interface CheckboxProps {
  name: ValidFieldNames,
  className: string,
  id: string,
  text: string,
  error?: FieldError;
  register: UseFormRegister<IForm>,
}

const Checkbox: React.FC<CheckboxProps> = ({
  className,
  id,
  text,
  error,
  register,
  name,
}) => {
  return (
    <div className={className}>
      <div className="flex items-start gap-2">
        <input
          id={id}
          type="checkbox"
          {...register(name)}
          className="mt-1"
        />
        <label htmlFor={id}>{text}</label>
      </div>
      {error && <p className="text-orange mt-1">{error.message}</p>}
    </div>
  );
};

export default Checkbox;
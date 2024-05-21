import React from 'react';
import {FieldError, FieldValues, Path, UseFormRegister} from "react-hook-form";

import { IForm } from "@/interfaces/interfaces";

interface CheckboxProps<T extends FieldValues> {
  name: Path<T>,
  className: string,
  id: string,
  text: string,
  error?: FieldError,
  register: UseFormRegister<T>,
}

const Checkbox= <T extends object> ({
  className,
  id,
  text,
  error,
  register,
  name,
} : CheckboxProps<T>) => {
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
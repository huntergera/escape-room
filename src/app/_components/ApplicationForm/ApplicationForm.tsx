"use client";
import React from 'react';
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Input from "@/app/_components/ui/Input";
import Button from "@/app/_components/ui/Button";

import { IForm } from "@/interfaces/interfaces";
import { validationSchema } from "@/app/_components/ApplicationForm/form";

const ApplicationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    resolver: zodResolver(validationSchema),
  })
  const onSubmit: SubmitHandler<IForm> = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="text-h3 mb-10">Залишити заявку</div>
      <Input<IForm>
        label="Ваше ім'я"
        placeholder="Ім'я"
        className="mb-8"
        register={register}
        name="userName"
      />
      <Input<IForm>
        label="Контактний телефон"
        placeholder="Телефон"
        className="mb-8"
        register={register}
        valueAsNumber
        name="tel"
      />
      <Input<IForm>
        label="Кількість учасників"
        placeholder="Кількість учасників"
        register={register}
        valueAsNumber
        name="participantsNumber"
      />
      <Button
        type="submit"
        className="bg-orange hover:bg-orange/90 transition-colors mt-12 mx-auto flex">
        Відправити заявку
      </Button>
      <div className="mt-4">
        <input id="agree" type="checkbox"/>
        <label htmlFor="agree">Я согласен с правилами обработки персональных данных и пользовательским соглашением</label>
      </div>
    </form>
  );
};

export default ApplicationForm;
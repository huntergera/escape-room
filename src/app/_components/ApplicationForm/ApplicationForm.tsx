"use client";
import React from 'react';
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Input from "@/app/_components/ui/Input";
import Button from "@/app/_components/ui/Button";

import { IForm } from "@/interfaces/interfaces";
import { validationSchema } from "@/app/_components/ApplicationForm/form";
import Checkbox from "@/app/_components/ui/Checkbox";

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
        error={errors.userName}
      />
      <Input<IForm>
        label="Контактний телефон"
        placeholder="Телефон"
        className="mb-8"
        register={register}
        name="tel"
        error={errors.tel}
      />
      <Input<IForm>
        label="Кількість учасників"
        placeholder="Кількість учасників"
        register={register}
        valueAsNumber
        name="participantsNumber"
        error={errors.participantsNumber}
      />
      <Button
        type="submit"
        className="bg-orange hover:bg-orange/90 transition-colors mt-12 mx-auto flex">
        Відправити заявку
      </Button>
      <Checkbox
        register={register}
        name="privateDataAgreement"
        error={errors.privateDataAgreement}
        className="mt-4"
        id="agree"
        text="Я согласен с правилами обработки персональных данных и пользовательским соглашением"
      />
    </form>
  );
};

export default ApplicationForm;
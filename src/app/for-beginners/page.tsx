"use client";
import React from 'react';
import { Controller, SubmitHandler, useForm } from "react-hook-form";

import Loading from "@/app/loading";
import Input from "@/app/_components/ui/Input";
import Button from "@/app/_components/ui/Button";
import Checkbox from "@/app/_components/ui/Checkbox";

import {IForm} from "@/interfaces/interfaces";
import {TextField} from "@mui/material";

const Page = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid, isSubmitting },
  } = useForm<IForm>({
    mode: 'onChange', //onBlur, onSubmit, onTouched, all
    defaultValues: {
      tel: '+380'
    }
  })

  const onSubmit: SubmitHandler<IForm> = (data) => console.log(data)

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative pt-20"
    >
      {isSubmitting && <Loading className="absolute top-0 left-0 w-full h-full"/>}
      <div className="text-h3 mb-10">Залишити заявку</div>
      <Input
        label="Ваше ім'я"
        placeholder="Ім'я"
        className="mb-8"
        register={register}
        name="userName"
        error={errors.userName}
        required="This is required"
        minLength={{value: 4, message: "Min length is 4"}}
        //required
        // min
        // max
        // minLength
        // maxLength
        // pattern
        // validate
      />
      <Input
        label="Контактний телефон"
        placeholder="Телефон"
        className="mb-8"
        register={register}
        name="tel"
        error={errors.tel}
      />
      <Controller
        render={({ field }) => <TextField {...field} />}
        name="TextField"
        control={control}
      />
      <Input
        label="Кількість учасників"
        placeholder="Кількість учасників"
        register={register}
        valueAsNumber
        name="participantsNumber"
        error={errors.participantsNumber}
      />
      <Button
        type="submit"
        disabled={!isValid}
        className={`transition-colors mt-12 mx-auto flex ${isValid ? 'bg-orange hover:bg-orange/90' : 'bg-grey-400'}`}
      >
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

export default Page;
"use client";
import React from 'react';
import {redirect, useRouter} from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Loading from "@/app/loading";
import Input from "@/app/_components/ui/Input";
import Button from "@/app/_components/ui/Button";
import Checkbox from "@/app/_components/ui/Checkbox";


import { createAccount } from "@/actions";
import { IRegistrationForm } from "@/interfaces/interfaces";
import { registrationValidationSchema } from "@/app/_components/RegistrationForm/form";

const RegistrationForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    setError,
  } = useForm<IRegistrationForm>({
    mode: 'onChange',
    resolver: zodResolver(registrationValidationSchema),
  })
  const onSubmit: SubmitHandler<IRegistrationForm> = async (data) => {
    try {
      const orderData = {
        name: data.userName,
        email: data.email,
        password: data.password,
        isAgreeRules: data.privateDataAgreement,
      };
      await createAccount(orderData);
      router.push('/');
      // redirect('/')
    } catch (error: any) {
      if (error.message === 'An account with this data already exists') {
        setError('root', {
          type: 'error',
          message: 'An account with this data already exists',
        });
      } else {
        console.error("Error creating order:", error);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative"
    >
      {isSubmitting && <Loading className="absolute top-0 left-0 w-full h-full"/>}
      <Input
        label="Ваше ім'я"
        placeholder="Ім'я"
        className="mb-8"
        register={register}
        name="userName"
        error={errors.userName}
      />
      <Input
        label="Email"
        placeholder="Email"
        className="mb-8"
        register={register}
        name="email"
        error={errors.email}
      />
      <Input
        label="Пароль"
        placeholder="Password"
        className="mb-8"
        register={register}
        name="password"
        error={errors.password}
        type="password"
      />
      {errors.root && <p className="text-orange mt-1">{errors.root.message}</p>}
      <Checkbox
        register={register}
        name="privateDataAgreement"
        error={errors.privateDataAgreement}
        className="mt-4"
        id="agree"
        text="Я згоден з правилами обробки персональних даних та користувальницькою угодою"
      />
      <Button
        type="submit"
        disabled={!isValid}
        className={`transition-colors mt-12 mx-auto flex ${isValid ? 'bg-orange hover:bg-orange/90' : 'bg-grey-400'}`}
      >
        Зареєструватися
      </Button>
    </form>
  );
};

export default RegistrationForm;
"use client";
import React from 'react';
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Loading from "@/app/loading";
import Input from "@/app/_components/ui/Input";
import Button from "@/app/_components/ui/Button";

import { ILoginForm } from "@/interfaces/interfaces";
import { validationSchema } from "@/app/_components/LoginForm/form";
import { logInAccount } from "@/actions";

const LoginForm = () => {

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    setError,
  } = useForm<ILoginForm>({
    mode: 'onChange',
    resolver: zodResolver(validationSchema),
  })
  const onSubmit: SubmitHandler<ILoginForm> = async (data) => {
    try {
      const orderData = {
        email: data.email,
        password: data.password,
      };
      await logInAccount(orderData);
      router.push('/');
    } catch (error) {
      if (error.message === 'Email or password is incorrect, please enter again') {
        setError('root', {
          type: 'error',
          message: 'Email or password is incorrect, please enter again',
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
      <Button
        type="submit"
        disabled={false}
        className={`transition-colors mt-12 mx-auto flex ${isValid ? 'bg-orange hover:bg-orange/90' : 'bg-grey-400'}`}
      >
        Enter
      </Button>
    </form>
  );
};

export default LoginForm;
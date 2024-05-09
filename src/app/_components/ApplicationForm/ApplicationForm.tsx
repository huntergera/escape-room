"use client";
import React from 'react';
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

import Input from "@/app/_components/ui/Input";
import Button from "@/app/_components/ui/Button";
import Checkbox from "@/app/_components/ui/Checkbox";
import Loading from "@/app/loading";

import { IForm } from "@/interfaces/interfaces";
import { validationSchema } from "@/app/_components/ApplicationForm/form";
import { createOrder } from "@/actions";
import { showSuccess } from "@/helpers/utils/toasts";

const ApplicationForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<IForm>({
    mode: 'onChange',
    resolver: zodResolver(validationSchema),
  })
  const onSubmit: SubmitHandler<IForm> = async (data) => {
    try {
      const orderData = {
        name: data.userName,
        peopleCount: data.participantsNumber,
        phone: data.tel,
        isLegal: data.privateDataAgreement,
      };
      await createOrder(orderData);
      router.back();
      showSuccess("Заявка відправлена, в найближчий час з ваши зв'яжеться оператор для уточнення даних");
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative"
    >
      {isSubmitting && <Loading className="absolute top-0 left-0 w-full h-full" />}
      <div className="text-h3 mb-10">Залишити заявку</div>
      <Input
        label="Ваше ім'я"
        placeholder="Ім'я"
        className="mb-8"
        register={register}
        name="userName"
        error={errors.userName}
      />
      <Input
        label="Контактний телефон"
        placeholder="Телефон"
        className="mb-8"
        register={register}
        name="tel"
        error={errors.tel}
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

export default ApplicationForm;
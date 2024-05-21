import React from 'react';
import Link from "next/link";

import RegistrationForm from "@/app/_components/RegistrationForm/RegistrationForm";

const SignUp = () => {
  return (
    <section className="container max-w-[600px] pt-[90px]">
      <h2 className="text-h3 text-center mb-3">Реєстрація до Escape Room</h2>
      <RegistrationForm />
      <p className="text-15 mt-4">Якщо у вас вже є акаунт, то перейдіть будь ласка на сторінку
        <Link href="/sign-in" className="text-orange cursor-pointer"> авторизації</Link>
      </p>
    </section>
  );
};

export default SignUp;
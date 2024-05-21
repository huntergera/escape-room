import React from 'react';
import Link from "next/link";

import LoginForm from "@/app/_components/LoginForm/LoginForm";

const SignIn = () => {
  return (
    <section className="container max-w-[600px] pt-[90px]">
      <div className="text-h3 text-center mb-3">Авторизація до Escape Room</div>
      <LoginForm/>
      <p className="text-15 mt-4">Якщо у вас ще немає акаунту, то перейдіть будь ласка на сторінку
        <Link href="/sign-up" className="text-orange cursor-pointer"> регистрації</Link>
      </p>
    </section>
  );
};

export default SignIn;
"use client"
import React from 'react';
import Image from "next/image";
import {logout} from "@/actions";

const ExitAccount = () => {

  return (
    <div className="cursor-pointer" onClick={() => logout()}>
      <Image
        src="/img/icons/exit.svg"
        alt="icon person"
        width={24}
        height={24}
        priority
      />
    </div>
  );
};

export default ExitAccount;
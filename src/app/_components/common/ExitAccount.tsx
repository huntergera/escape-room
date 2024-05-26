"use client"
import React from 'react';
import Image from "next/image";
import { logout } from "@/actions";
import {useRouter} from "next/navigation";

const ExitAccount = () => {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      const response = await logout();
      if (response.shouldRedirect) {
        router.push('/');
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="cursor-pointer" onClick={() => handleLogout()}>
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
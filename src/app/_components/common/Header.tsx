"use client"
import { usePathname } from "next/navigation";

import Logo from "@/app/_components/common/Logo";
import MainNavigation from "@/app/_components/common/MainNavigation";
import ExitAccount from "@/app/_components/common/ExitAccount";

const Header: React.FC = () => {
  const pathname = usePathname();

  return (
    <header className="flex justify-between items-center pt-6 px-8 absolute top-0 left-0 w-full z-10">
      <Logo />
      <MainNavigation />
      <a href="tel:88003335599">8 (800) 333-55-99</a>
      {pathname !== '/sign-up' && pathname !== '/sign-in' && <ExitAccount />}
    </header>
  );
};

export default Header;
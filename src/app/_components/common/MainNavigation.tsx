"use client";
import {usePathname} from "next/navigation";

import NavLink from "@/app/_components/common/NavLink";

import {navLinks} from "@/helpers/constants/common";

const MainNavigation = () => {
  const pathname = usePathname()
  if(!navLinks?.length ) return null;

  return (
    <div className="flex gap-x-9">
      {navLinks.map((item, index: number) =>
        <NavLink
          key={index}
          item={item}
          className={`link ${pathname === item.link ? '!text-orange' : ''}`}
        />
      )}
    </div>
  );
};

export default MainNavigation;
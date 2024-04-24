import type { Metadata } from "next";

import Header from "@/app/_components/common/Header";

import "./globals.css";
import {raleway} from "@/helpers/utils/customFonts";
import Socials from "@/app/_components/common/Socials";

export const metadata: Metadata = {
  title: "Escape room",
  description: "Quests for all",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="min-h-full">
      <body className={`${raleway.variable} text-14 text-grey-200 flex flex-col min-h-full bg-no-repeat bg-gradient-to-b from-black-900 to-black-800`}>
        <Header />
        <main className='flex-auto'>{children}</main>
        <Socials />
      </body>
    </html>
  );
}

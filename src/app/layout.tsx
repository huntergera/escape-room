import type { Metadata } from "next";

import Header from "@/app/_components/common/Header";

import "./globals.css";
import {raleway} from "@/helpers/utils/customFonts";
import Socials from "@/app/_components/common/Socials";

export const metadata: Metadata = {
  title: "Escape room",
  description: "Quests for all",
};

type RootLayoutProps = {
  children: React.ReactNode;
  modal: React.ReactNode;
};

const RootLayout: React.FC<RootLayoutProps> = ({ children, modal }) => {
  return (
    <html lang="en">
      <body className={`${raleway.variable} min-h-screen flex flex-col text-14 text-grey-200 bg-no-repeat bg-gradient-to-b from-black-900 to-black-800`}>
        <Header />
        <main>{children}</main>
        <Socials />
        {modal}
        <div id="modal-root" />
      </body>
    </html>
  );
};

export default RootLayout;

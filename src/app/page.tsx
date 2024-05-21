import { Suspense } from "react";

import CatalogNavigation from "@/app/_components/CatalogNavigation";
import Catalog from "@/app/_components/Catalog";
import Loading from "@/app/loading";
import Header from "@/app/_components/common/Header";
import Socials from "@/app/_components/common/Socials";

interface HomeProps {
  searchParams: {
    filter?: string;
  };
}

const Home: React.FC<HomeProps> = ({ searchParams }: HomeProps) => {
  return (
    <>
      <Header />
      <section className="container max-w-[1096px] pt-[122px]">
        <p className="text-orange">Квести в Одесі</p>
        <h2 className="text-h2 text-white mt-1">В яку гру зіграємо?</h2>
        <CatalogNavigation filter={searchParams.filter} />
        <Suspense fallback={<Loading />}>
          <Catalog filter={searchParams.filter}/>
        </Suspense>
      </section>
      <Socials />
    </>
  );
}

export default Home;

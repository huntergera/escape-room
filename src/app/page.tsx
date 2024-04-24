"use client";
import {Suspense, useState} from "react";

import CatalogNavigation from "@/app/_components/CatalogNavigation";
import Catalog from "@/app/_components/Catalog";
import Loading from "@/app/loading";

export default function Home() {
  const [questTypeFilter, setQuestTypeFilter] = useState<string | null>('all');

  const handleFilterChange = (type: string | null) => {
    setQuestTypeFilter(type);
  };

  return (
    <section className="container max-w-[1096px] pt-12">
      <p className="text-orange">Квести в Одесі</p>
      <h2 className="text-h2 text-white mt-1">В яку гру зіграємо?</h2>
      <CatalogNavigation onFilterChange={handleFilterChange} questTypeFilter={questTypeFilter}/>
      <Suspense fallback={<Loading />}>
        <Catalog questTypeFilter={questTypeFilter}/>
      </Suspense>
    </section>
  );
}

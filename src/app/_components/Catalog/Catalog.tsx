"use client";
import CatalogItem from "@/app/_components/CatalogItem";
import Loading from "@/app/loading";

import {useQuests} from "@/app/_components/Catalog/hooks/useQuests";

const Catalog = () => {
  const { quests, pending, fetchQuests } = useQuests();

  if(pending) {
    return <Loading className="min-h-[190px] mt-16" />
  }
  return (
    <div className="mt-10 mb-10 grid grid-cols-3 gap-x-6 gap-y-8">
      {quests.map((quest, index: number) => (
        <CatalogItem key={index} quest={quest} />
      ))}
    </div>
  );
};

export default Catalog;
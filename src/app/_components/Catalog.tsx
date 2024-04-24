import {useEffect} from "react";

import CatalogItem from "@/app/_components/CatalogItem";

import { IQuests } from "@/interfaces/interfaces";
import {useQuestsStore} from "@/store/store";

interface CatalogProps {
  questTypeFilter: string | null;
}

export default function Catalog({ questTypeFilter }: CatalogProps) {
  const { quests, fetchQuests } = useQuestsStore();

  useEffect(() => {
    fetchQuests();
  }, [fetchQuests]);

  const filteredQuests = questTypeFilter !== 'all'
    ? quests.filter((quest: IQuests) => quest.type === questTypeFilter)
    : quests;

  return (
    <div className="mt-10 mb-10 grid grid-cols-3 gap-x-6 gap-y-8">
      {filteredQuests.map((quest: IQuests) => (
        <CatalogItem key={quest.id} quest={quest} />
      ))}
    </div>
  );
};
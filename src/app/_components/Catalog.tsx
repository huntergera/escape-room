"use client";
import {useEffect} from "react";

import CatalogItem from "@/app/_components/CatalogItem";

import { IQuest } from "@/interfaces/interfaces";
import { useQuestsStore } from "@/store/store";
import {getAllQuests} from "@/actions";

const Catalog: React.FC = () => {
  const { quests,setQuests , questTypeFilter } = useQuestsStore();

  useEffect(() => {
    const fetchQuests = async () => {
      try {
        const allQuests = await getAllQuests();
        setQuests(allQuests);
      } catch (error) {
        console.error("Error fetching quests:", error);
      }
    };

    fetchQuests();
  }, []);

  const filteredQuests = questTypeFilter !== 'all'
    ? quests.filter((quest: IQuest) => quest.type === questTypeFilter)
    : quests;

  return (
    <div className="mt-10 mb-10 grid grid-cols-3 gap-x-6 gap-y-8">
      {filteredQuests.map((quest: IQuest) => (
        <CatalogItem key={quest.id} quest={quest} />
      ))}
    </div>
  );
};

export default Catalog;
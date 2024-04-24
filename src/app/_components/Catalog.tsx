import CatalogItem from "@/app/_components/CatalogItem";

import {getAllQuests} from "@/actions/quests";
import { IQuests } from "@/interfaces/interfaces";

export default async function Catalog() {
  const quests = await getAllQuests();

  return (
    <div className="mt-10 mb-10 grid grid-cols-3 gap-x-6 gap-y-8">
      {quests.map((quest: IQuests) => (
        <CatalogItem key={quest.id} quest={quest} />
      ))}
    </div>
  );
};
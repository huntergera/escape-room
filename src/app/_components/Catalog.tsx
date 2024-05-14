import CatalogItem from "@/app/_components/CatalogItem";

import { IQuest } from "@/interfaces/interfaces";
import { getAllQuests } from "@/actions";

interface IQuestsProps {
  filter: string | undefined
}

const Catalog: React.FC<IQuestsProps> = async ({ filter = 'all' }) =>  {
  const quests = await getAllQuests();

  const filteredQuests = filter === 'all' ? quests : quests.filter((quest: IQuest) => quest.type === filter);

  return (
    <div className="mt-10 mb-10 grid grid-cols-3 gap-x-6 gap-y-8">
      {filteredQuests?.map((quest: IQuest) => (
        <CatalogItem key={quest.id} quest={quest} />
      ))}
    </div>
  );
};

export default Catalog;
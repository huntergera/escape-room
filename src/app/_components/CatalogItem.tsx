import Image from "next/image";
import Link from "next/link";

import {IQuests} from "@/interfaces/interfaces";

const CatalogItem: React.FC<{ quest: IQuests }> = ({ quest }) => {
  const backgroundImageStyle = {
    backgroundImage: `url('${quest.previewImg}')`,
  };

  return (
    <Link href={`/quests/${quest.id}`} className="p-5 min-h-[232px] flex flex-col justify-end cursor-pointer hover:scale-105  transition-all duration-100 ease-in rounded"
         style={backgroundImageStyle}>
      <div className="text-h4 text-white">{quest.title}</div>
      <div className="flex">
        <div className="flex items-center gap-2 mr-3 pr-3 border-r border-grey-400">
          <Image
            src="/img/icons/icon-person.svg"
            alt="icon person"
            className="mx-auto"
            width={13}
            height={16}
            priority
          />
          <span>{quest.peopleCount[0]}-{quest.peopleCount[1]} чел</span>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src="/img/icons/icon-puzzle.svg"
            alt="icon complexity"
            className="mx-auto"
            width={16}
            height={16}
            priority
          />
          <span>{quest.level}</span>
        </div>
      </div>
    </Link>
  );
};

export default CatalogItem;
import Image from "next/image";
import Link from "next/link";

import { IQuest } from "@/interfaces/interfaces";

const CatalogItem: React.FC<{ quest: IQuest }> = ({ quest }) => {

  console.log(quest.previewImg)
  return (
    <Link href={`/quests/${quest.id}`} className="p-5 min-h-[232px] flex flex-col justify-end cursor-pointer group transition-all duration-100 ease-in rounded relative overflow-hidden">
      <Image
        src={`/${quest.previewImg}`}
        alt="icon person"
        className="w-full h-full absolute top-0 left-0 z-0 group-hover:scale-105 transition-all"
        width={344}
        height={232}
        priority
      />
      <div className="relative z-10">
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
      </div>
    </Link>
  );
};

export default CatalogItem;
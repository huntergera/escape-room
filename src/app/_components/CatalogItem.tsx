import Image from "next/image";

import {IQuests} from "@/interfaces/interfaces";

const CatalogItem: React.FC<{ quest: IQuests }> = ({ quest }) => {
  const backgroundImageStyle = {
    backgroundImage: `url('${quest.previewImg}')`,
  };
  return (
    <div className="p-5 min-h-[232px] flex flex-col justify-end cursor-pointer hover:bg-[length:105%_105%] bg-center transition-transform duration-600"
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
          <span>{quest.peopleCount[0]}-{quest.peopleCount[1]} осіб</span>
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
  );
};

export default CatalogItem;
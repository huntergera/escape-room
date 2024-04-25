import {getQuestById} from "@/actions/quest";
import Image from "next/image";
import {notFound} from "next/navigation";

const QuestDetails = async ({params}: { params: { questId: string } }) => {
  const quest = await getQuestById(params.questId)
  const backgroundImageStyle = {
    backgroundImage: `url('${quest.coverImg}')`,
  };

  if (!quest.id) notFound();

  return (
    <div className="min-h-screen pt-[122px] flex-auto bg-cover bg-center"
         style={backgroundImageStyle}>
      <div className="ml-[45%]">
        <div className="text-orange mb-2">{quest.type}</div>
        <h1 className="text-h1 mb-8">{quest.title}</h1>
        <div className="flex mb-5">
          <div className="flex items-center gap-2 mr-3 pr-3 border-r border-grey-400 py-2">
            <Image
              src="/img/icons/icon-clock.svg"
              alt="icon person"
              className="mx-auto"
              width={20}
              height={20}
              priority
            />
            {quest.duration} мин
          </div>
          <div className="flex items-center gap-2 mr-3 pr-3 border-r border-grey-400 py-2">
            <Image
              src="/img/icons/icon-person.svg"
              alt="icon person"
              className="mx-auto"
              width={19}
              height={24}
              priority
            />
            <span>{quest.peopleCount[0]}-{quest.peopleCount[1]} чел</span>
          </div>
          <div className="flex items-center gap-2 py-2">
            <Image
              src="/img/icons/icon-puzzle.svg"
              alt="icon complexity"
              className="mx-auto"
              width={21}
              height={21}
              priority
            />
            <span>{quest.level}</span>
          </div>
        </div>
        <p className="text-15 mb-10">{quest.description}</p>
        <button>Забронировать</button>
      </div>
    </div>
  );
};

export default QuestDetails;
import Image from "next/image";
import {notFound} from "next/navigation";

import ButtonLink from "@/app/_components/ui/ButtonLink";

import {getQuestById} from "@/actions";
import {questDictionary} from "@/helpers/constants/common";

const QuestDetails = async ({params}: { params: { questId: string } }) => {
  const quest = await getQuestById(params.questId);

  if (!quest.id) notFound();

  return (
    <section className="min-h-screen pt-[122px] flex-auto bg-cover bg-center">
      <Image
        src={`/${quest.coverImg}`}
        alt="icon person"
        className="w-full h-full absolute top-0 left-0 z-0 object-cover"
        width={1366}
        height={768}
        priority
      />
      <div className="ml-[45%] relative z-10">
        <div className="text-orange mb-2">{questDictionary[quest.type]}</div>
        <h1 className="text-h1 mb-8">{quest.title}</h1>
        <div className="flex mb-5">
          <div className="flex items-center gap-2 mr-3 pr-3 border-r border-grey-500 py-2">
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
          <div className="flex items-center gap-2 mr-3 pr-3 border-r border-grey-500 py-2">
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
        <ButtonLink href={`/quests/${quest.id}/application-form`} className="bg-orange hover:bg-orange/90 transition-colors">
          Забронировать
        </ButtonLink>
      </div>
    </section>
  );
};

export default QuestDetails;
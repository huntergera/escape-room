"use client";
import CatalogNavigationItem from "@/app/_components/CatalogNavigationItem";

import {catalogNavLinks} from "@/helpers/constants/common";
import {useQuestsStore} from "@/store/store";

const CatalogNavigation: React.FC = () => {
  const { questTypeFilter, setQuestTypeFilter } = useQuestsStore();
  const handleClick = (type:string | null) => {
    setQuestTypeFilter(type);
  };

  return (
    <div className="flex mt-12">
      {catalogNavLinks.map((item, index: number) =>
        <CatalogNavigationItem
          key={index}
          item={item}
          onClick={() => handleClick(item.type)}
          isActive={item.type === questTypeFilter}
        />
      )}
    </div>
  );
};

export default CatalogNavigation;
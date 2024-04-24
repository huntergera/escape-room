import Image from "next/image";

import { ICatalogNavLink } from "@/interfaces/interfaces";

interface CatalogNavigationItemProps {
  item: ICatalogNavLink;
  onClick: () => void;
  isActive: boolean;
}

const CatalogNavigationItem: React.FC<CatalogNavigationItemProps> = ({ item, onClick, isActive  }) => {
  return (
    <div className={`flex items-center gap-3 py-2 px-9 border-r border-grey-400 last:border-0 cursor-pointer group ${isActive ? 'filter-active' : ''}`}
         onClick={onClick}
    >
      <Image
        src={item.icon}
        alt="icon catalog"
        className="mx-auto"
        width={30}
        height={36}
        priority
      />
      <span className="relative">
        {item.title}
        <span
          className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-orange transition-all duration-400 group-hover:w-full filter-item-span"></span>
      </span>
    </div>
  );
};

export default CatalogNavigationItem;
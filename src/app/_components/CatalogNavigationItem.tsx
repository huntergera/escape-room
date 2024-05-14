import Image from "next/image";
import Link from "next/link";

import { ICatalogNavLink } from "@/interfaces/interfaces";

interface CatalogNavigationItemProps {
  item: ICatalogNavLink;
  filter: string | undefined;
}

const CatalogNavigationItem: React.FC<CatalogNavigationItemProps> = ({ item, filter = 'all'  }) => {
  return (
    <Link href={`/?filter=${item.type}`}  className={`flex items-center gap-3 py-2 px-9 border-r border-grey-500 last:border-0 cursor-pointer group ${ item.type === filter ? 'filter-active' : ''}`}
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
    </Link>
  );
};

export default CatalogNavigationItem;
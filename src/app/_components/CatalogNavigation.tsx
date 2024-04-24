import CatalogNavigationItem from "@/app/_components/CatalogNavigationItem";

import {catalogNavLinks} from "@/helpers/constants/common";

interface CatalogNavigationProps {
  onFilterChange: (type: string | null) => void;
  questTypeFilter: string | null;
}

const CatalogNavigation : React.FC<CatalogNavigationProps> = ({ onFilterChange, questTypeFilter  }) => {
  const handleClick = (type:string | null) => {
    onFilterChange(type);
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
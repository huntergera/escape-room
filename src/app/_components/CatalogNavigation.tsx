import CatalogNavigationItem from "@/app/_components/CatalogNavigationItem";

import {catalogNavLinks} from "@/helpers/constants/common";

interface ICatalogNavigationProps {
  filter: string | undefined
}

const CatalogNavigation: React.FC<ICatalogNavigationProps> = ({ filter }) => {

  return (
    <div className="flex mt-12">
      {catalogNavLinks.map((item, index: number) =>
        <CatalogNavigationItem
          key={index}
          item={item}
          filter={filter}
        />
      )}
    </div>
  );
};

export default CatalogNavigation;
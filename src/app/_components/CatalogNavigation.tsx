import CatalogNavigationItem from "@/app/_components/CatalogNavigationItem";

import {catalogNavLinks} from "@/helpers/constants/common";

const CatalogNavigation = () => {
  return (
    <div className="flex mt-12">
      {catalogNavLinks.map((item, index: number) =>
        <CatalogNavigationItem
          key={index}
          item={item}
        />
      )}
    </div>
  );
};

export default CatalogNavigation;
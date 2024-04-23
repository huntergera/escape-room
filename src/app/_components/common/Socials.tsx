import SocialItem from "@/app/_components/common/SocialItem";

import {socialsLinks} from "@/helpers/constants/common";
import {TwitterIcon} from "@/app/_components/icons/TwitterIcon";

const Socials = () => {
  return (
    <div className="flex z-10 items-center gap-x-2 fixed bottom-6 left-8">
      {socialsLinks.map((item, index: number) =>
        <SocialItem
          key={index}
          item={item}
        />
      )}
    </div>
  );
};

export default Socials;
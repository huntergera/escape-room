import {ISocialLink} from "@/interfaces/interfaces";

const SocialItem: React.FC<{ item: ISocialLink }> = ({ item }) => {
  const {link, Icon, color} = item;

  return (
    <a href={link} className="group">
      <Icon className={`fill-[#535353] transition-all duration-200 icon`} />
    </a>
  );
};

export default SocialItem;
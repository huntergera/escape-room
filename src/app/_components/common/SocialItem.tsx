import {ISocialLink} from "@/interfaces/interfaces";
import logo from "@/app/_components/common/Logo";

const SocialItem: React.FC<{ item: ISocialLink }> = ({ item }) => {
  const {link, Icon, color} = item;
  console.log(color)
  console.log(1)

  return (
    <a href={link} className="group">
      <Icon className={`fill-[#535353] group-hover:fill-[${color}] transition-all duration-200`} />
    </a>
  );
};

export default SocialItem;
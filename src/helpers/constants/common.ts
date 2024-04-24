import { ICatalogNavLink, INavLink, ISocialLink } from "@/interfaces/interfaces";

import { InstagramIcon } from "@/app/_components/icons/InstagramIcon";
import { TwitterIcon } from "@/app/_components/icons/TwitterIcon";
import { YoutubeIcon } from "@/app/_components/icons/YoutubeIcon";

export const navLinks: INavLink[] = [
  {
    title: "Квести",
    link: "/"
  },
  {
    title: "Новачкам",
    link: "/for-beginners"
  },
  {
    title: "Відгуки",
    link: "/reviews"
  },
  {
    title: "Акції",
    link: "/promotions"
  },
  {
    title: "Контакти",
    link: "/contacts"
  },
]

export const catalogNavLinks: ICatalogNavLink[] = [
  {
    title: "Всі квести",
    icon: "/img/icons/icon-all-quests.svg",
    type: "all"
  },
  {
    title: "Пригодне",
    icon: "/img/icons/icon-adventures.svg",
    type: "adventures"
  },
  {
    title: "Страшне",
    icon: "/img/icons/icon-horrors.svg",
    type: "horror"
  },
  {
    title: "Містичне",
    icon: "/img/icons/icon-mystic.svg",
    type: "mystic"
  },
  {
    title: "Детективне",
    icon: "/img/icons/icon-detective.svg",
    type: "detective"
  },
  {
    title: "Sci-Fi",
    icon: "/img/icons/icon-scifi.svg",
    type: "sci-fi"
  },
]

export const socialsLinks: ISocialLink[] = [
  {
    link: "#",
    Icon: InstagramIcon,
    color: "#8A43FF"
  },
  {
    link: "#",
    Icon: TwitterIcon,
    color: "#3A94E7"
  },
  {
    link: "#",
    Icon: YoutubeIcon,
    color: "#FF3535"
  }
]
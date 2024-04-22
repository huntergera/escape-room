import {ICatalogNavLink, INavLink} from "@/interfaces/interfaces";

export const navLinks: INavLink[] = [
  {
    title: 'Квести',
    link: '/'
  },
  {
    title: 'Новачкам',
    link: '/for-beginners'
  },
  {
    title: 'Відгуки',
    link: '/reviews'
  },
  {
    title: 'Акції',
    link: '/promotions'
  },
  {
    title: 'Контакти',
    link: '/contacts'
  },
]

export const catalogNavLinks: ICatalogNavLink[] = [
  {
    title: 'Всі квести',
    icon: '/img/icons/icon-all-quests.svg'
  },
  {
    title: 'Пригодне',
    icon: '/img/icons/icon-adventures.svg'
  },
  {
    title: 'Страшне',
    icon: '/img/icons/icon-horrors.svg'
  },
  {
    title: 'Містичне',
    icon: '/img/icons/icon-mystic.svg'
  },
  {
    title: 'Детективне',
    icon: '/img/icons/icon-detective.svg'
  },
  {
    title: 'Sci-Fi',
    icon: '/img/icons/icon-scifi.svg'
  },
]
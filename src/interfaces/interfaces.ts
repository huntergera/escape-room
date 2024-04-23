export interface INavLink {
  title: string,
  link: string
}

export interface ICatalogNavLink {
  title: string,
  icon: string
}

export interface ISocialLink {
  link: string,
  Icon: React.FC<IconProps> | string;
  color: string
}

export interface IconProps {
  className?: string,
  style?: string,
}

export interface IQuests {
  "id": number,
  "title": string,
  "description": string,
  "previewImg": string,
  "coverImg": string,
  "type": string,
  "level": string,
  "peopleCount": [],
  "duration": number
}
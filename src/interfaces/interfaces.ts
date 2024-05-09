export interface INavLink {
  title: string,
  link: string
}

export interface ICatalogNavLink {
  title: string,
  icon: string,
  type: string
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

export interface IQuest {
  "id": number,
  "title": string,
  "description": string,
  "previewImg": string,
  "coverImg": string,
  "type": string,
  "level": string,
  "peopleCount": [number, number],
  "duration": number
}

export interface IDictionary {
  [key: string]: string;
}

export interface IForm {
  userName: string,
  tel: number,
  participantsNumber: number,
  privateDataAgreement: boolean,
}

export type ValidFieldNames =
  | 'userName'
  | 'tel'
  | 'participantsNumber'
  | 'privateDataAgreement';
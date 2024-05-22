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
  "peopleCount": number[],
  "duration": number
}

export interface IDictionary {
  [key: string]: string;
}

export interface IForm {
  userName: string,
  tel: string,
  participantsNumber: number,
  privateDataAgreement: boolean,
}

export interface IRegistrationForm {
  userName: string,
  email: string,
  password: string,
  privateDataAgreement: boolean,
}

export interface ILoginForm {
  email: string,
  password: string,
}

export interface IOrder {
  name: string
  phone: string
  peopleCount: number
  isLegal: boolean
}
export interface IAccount {
  name: string
  email: string
  password: string
  isAgreeRules: boolean
}

export interface ILogin {
  email: string
  password: string
}
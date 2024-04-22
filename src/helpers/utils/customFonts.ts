import localFont from "next/font/local";

const raleway = localFont({
  src: [
    {
      path: '../../local-fonts/Raleway/raleway-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../local-fonts/Raleway/raleway-medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../local-fonts/Raleway/raleway-semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../local-fonts/Raleway/raleway-bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../local-fonts/Raleway/raleway-extrabold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../local-fonts/Raleway/raleway-black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: "--font-raleway"
})

export { raleway };
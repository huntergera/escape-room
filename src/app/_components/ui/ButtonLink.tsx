import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  className: string;
  href: string;
}

const ButtonLink: React.FC<ButtonProps> = ({children, className, href}) => {
  return (
    <Link href={href} className={`py-4 px-7 text-18 font-medium rounded-3xl uppercase text-white ${className}`}>
      {children}
    </Link>
  )
}

export default ButtonLink;
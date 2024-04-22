import Link from "next/link";
import Image from "next/image";

const Logo: React.FC = () =>  {
  return (
    <Link href="/public">
      <Image
        src="/img/icons/logo.svg"
        alt="Logo"
        width={134}
        height={50}
      />
    </Link>
  );
}

export default Logo;

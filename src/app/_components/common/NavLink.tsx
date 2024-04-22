import Link from "next/link";
import { INavLink } from "@/interfaces/interfaces";

interface INavigationProps {
    item: INavLink,
    className?: string
}

const NavLink: React.FC<INavigationProps> = ({ item, className }) => {
    return (
        <Link href={item.link} className={`text-gray hover:text-blue transition-colors ${className}`}>
            {item.title}
        </Link>
    );
}

export default NavLink;

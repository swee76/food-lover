'use client'

import React from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";

interface NavLinkProps {
    href: string;
    children?: string;
}

const NavLink: React.FC<NavLinkProps> = ({href, children}) => {
    const pathname = usePathname()
    return (
        <Link href={href}
              className={`${pathname.startsWith(href) ? 'text-amber-300' : 'text-white'} hover:text-amber-400`}>{children}</Link>
    );
};

export default NavLink;
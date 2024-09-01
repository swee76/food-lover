import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavLink from "@/components/Common/NavLink";

const Header = () => {
    return (
        <header
            className={'fixed top-0 z-30 w-full flex items-center justify-between bg-green-950 mx-auto px-6 py-4 shadow-md shadow-gray-900'}>
            <Link href={'/'} className={'flex items-center gap-x-2'}>
                <Image src={'/img/logo.webp'} alt={'Logo'} width={50} height={50} className={'rounded-full'}
                       priority quality={100}/>
                <h1 className={'text-white text-4xl font-semibold'}>NextLevel Food</h1>
            </Link>

            <nav>
                <ul className={'flex items-center gap-x-10'}>
                    <li><NavLink href={'/meals'}>Browse Meals</NavLink></li>
                    <li><NavLink href={'/community'}>Foodies Community</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
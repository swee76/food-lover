import React from 'react';
import Link from "next/link";

const Page = () => {
    return (
        <div className={'w-full max-w-[95rem] mx-auto'}>
            <div className={'text-5xl font-semibold'}>
                Delicious meals, created <span
                className={'bg-gradient-to-r from-green-950 to-amber-400 bg-clip-text text-transparent'}>by you</span>
            </div>
            <p className={'mt-10 mb-6 text-xl text-gray-500'}>Choose your favourite recipe & cook it yourself. It is easy and
                fun!</p>
            <Link href={`/meals/share`}
                  className={'py-2 px-4 bg-amber-400 hover:bg-green-600 text-black font-semibold rounded-lg'}>Share Your
                Favourite Recipe</Link>
        </div>
    );
};

export default Page;
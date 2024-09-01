import React from 'react';
import Image from "next/image";

const Page = () => {
    return (
        <div className={'flex flex-col justify-center items-center w-full mx-auto gap-y-10'}>
            <div className={'text-5xl font-semibold'}>
                One shared passion: <span
                className={'bg-gradient-to-r from-green-950 to-amber-400 bg-clip-text text-transparent'}>Food</span>
            </div>
            <p className={'italic text-xl text-gray-500'}>Join our community and share your favourite recipes!</p>
            <div className={'mt-4'}>
                <h4 className={'mb-14 flex justify-center items-center text-3xl font-semibold underline underline-offset-8'}>Community
                    Perks</h4>
                <div className={'flex flex-col justify-center items-center gap-y-8'}>
                    <Image src={'/img/share-discover-recipes.webp'} alt={'Share & Discover Img'} width={200}
                           height={200} className={'object-cover rounded-3xl shadow-md shadow-amber-500'}/>
                    <p className={'text-lg text-green-800'}>Share & discover recipes</p>
                </div>
                <div className={'mt-14 flex flex-col justify-center items-center gap-y-8'}>
                    <Image src={'/img/find-new-friends.jpg'} alt={'Find new Friends Img'} width={200}
                           height={200} className={'object-cover rounded-3xl shadow-md shadow-amber-500'}/>
                    <p className={'text-lg text-green-800'}>Find new friends & like-minded people</p>
                </div>
                <div className={'mt-14 flex flex-col justify-center items-center gap-y-8'}>
                    <Image src={'/img/participate-in-events.jpeg'} alt={'Participate in Exclusive Events Img'}
                           width={200}
                           height={200} className={'object-cover rounded-3xl shadow-md shadow-amber-500'}/>
                    <p className={'text-lg text-green-800'}>Participate in exclusive events</p>
                </div>
            </div>
        </div>
    );
};

export default Page;
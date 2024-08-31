import Link from "next/link";
import FoodSwiper from "@/components/Home/FoodSwiper";

export default function Home() {
    return (
        <main>
            <div className={'flex flex-col lg:flex-row items-center justify-center gap-x-10'}>
                <div className={'w-1/3 flex items-center justify-center'}>
                    <FoodSwiper/>
                </div>
                <div>
                    <h2 className={'text-5xl font-semibold uppercase max-w-xl leading-[60px] bg-gradient-to-r from-green-950 to-amber-400 bg-clip-text text-transparent'}>NextLevel
                        Food For
                        NextLevel Foodies</h2>
                    <p className={'mt-7 text-xl text-gray-300'}>Taste & share food from all over the world.</p>
                    <div className={'flex items-center gap-x-8 mt-8'}>
                        <Link href={'/community'} className={'text-amber-400 hover:text-green-600 font-semibold'}>Join
                            the
                            Community</Link>
                        <Link href={'/meals'}
                              className={'py-2 px-4 bg-amber-400 hover:bg-green-600 text-black font-semibold rounded-lg'}>Explore
                            Meals</Link>
                    </div>
                </div>
            </div>
            <div className={'mt-56 w-full max-w-4xl mx-auto text-center flex flex-col gap-y-3'}>
                <div className={'text-4xl'}>How it works</div>
                <p className={'text-2xl text-gray-400'}>NextLevel Food is a platform for foodies to share their favorite
                    recipes with
                    the world. It&apos;s a
                    place to discover new dishes, and to connect with other food lovers.</p>
                <p className={'mt-4 text-2xl text-gray-400'}>NextLevel Food is a place to discover new dishes, and to
                    connect with
                    other food lovers.</p>
            </div>
            <div className={'my-36 w-full mx-auto max-w-4xl text-center flex flex-col gap-y-3'}>
                <div className={'text-4xl'}>Why NextLevel Food?</div>
                <p className={'text-2xl text-gray-400'}>NextLevel Food is a platform for foodies to share their favorite
                    recipes with
                    the world. It&apos;s a
                    place to discover new dishes, and to connect with other food lovers.</p>
                <p className={'mt-4 text-2xl text-gray-400'}>NextLevel Food is a place to discover new dishes, and to
                    connect with
                    other food lovers.</p>
            </div>
        </main>
    );
}

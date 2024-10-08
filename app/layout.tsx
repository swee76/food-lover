import type {Metadata} from "next";
import {Inter} from "next/font/google";

import "./globals.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Header from "@/components/Common/Header";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Header/>
        <div className={'relative mt-44'}>
            {children}
        </div>
        </body>
        </html>
    );
}

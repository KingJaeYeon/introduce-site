'use client'
import Link from "next/link";
import React from "react";
import {usePathname} from "next/navigation";
import Image from "next/image";
import Profile01 from '@/public/profile01.jpeg';
import Profile02 from '@/public/profile02.jpeg';
import Profile03 from '@/public/profile03.jpeg';
import Profile04 from '@/public/profile04.jpeg';


export function IconRenderer() {
    const pathname = usePathname()

    let icon = Profile01;

    switch (pathname) {
        case '/skills':
            icon = Profile03
            break;
    }


    return <Link href={'/browse'} className={'h-[30px] w-[30px] rounded-full overflow-hidden'}>
        <Image src={icon} alt={'icon'} priority/>
    </Link>
}
import React from "react";
import TitleImg from "@/public/title.png";
import Image from "next/image";
import Link from "next/link";
import {IconRenderer} from "@/app/(introduce)/components/IconRenderer";
import {NavLink} from "@/app/(introduce)/components/NavLinks";
import TitleBarMB from "@/app/(introduce)/components/TitleBarMB";

export default function Layout({children}: { children: React.ReactNode; }) {
    return <div className="flex min-h-svh w-full flex-col justify-center">
        <TitleBar/>
        <div className="scrollWidth3 relative flex flex-1 flex-col gap-4 overflow-auto">
            <div className={'absolute h-full w-full p-4 pt-0 top-[70px]'}>{children}</div>
        </div>
    </div>
}

function TitleBar() {
    return (
        <div className={'h-[70px] sm:h-20 flex items-center px-4 fixed w-full bg-background z-1 top-0'}>
            <div className={'flex flex-1 items-center gap-6'}>
                <Link href={'/'}>
                    <Image src={TitleImg} alt={'title'} priority className={'w-[200px]'}/>
                </Link>
                <div className={'hidden md:flex items-center gap-5'}>
                    <NavLink label={'Home'} to={'/browse'}/>
                    <NavLink label={'Professional'} to={'/professional'}/>
                    <NavLink label={'Skills'} to={'/skills'}/>
                    <NavLink label={'Projects'} to={'/projects'}/>
                    <NavLink label={'Certifications'} to={'/certifications'}/>
                </div>
            </div>
            <TitleBarMB/>
            <IconRenderer/>
        </div>
    )
}


import React from "react";
import TitleImg from "@/public/title.png";
import Image from "next/image";
import Link from "next/link";
import {IconRenderer} from "@/app/(introduce)/components/IconRenderer";
import {NavLink} from "@/app/(introduce)/components/NavLinks";
import TitleBarMB from "@/app/(introduce)/components/TitleBarMB";

export default function Layout({children}: { children: React.ReactNode; }) {
    return <div><TitleBar/>{children}</div>
}

function TitleBar() {
    return (
        <div className={'h-[70px] sm:h-20 flex items-center px-4'}>
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


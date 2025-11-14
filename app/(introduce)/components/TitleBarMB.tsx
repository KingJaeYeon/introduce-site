'use client'
import {Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger,} from "@/components/ui/sheet"
import {Briefcase, FolderGitIcon, Home, LucideIcon, LucideMenu, Scale, Swords} from "lucide-react";
import {useMediaQuery} from "@/hooks/useMediaQuery";
import Image from "next/image";
import TitleLogo from '@/public/title.png'
import Link from "next/link";

export default function TitleBarMB() {
    const isInnerTbSize = useMediaQuery('(max-width: 768px)')

    if (!isInnerTbSize) {
        return null
    }

    return <Sheet>
        <SheetTrigger asChild>
            <button className={'inline md:hidden mr-1'}>
                <LucideMenu/>
            </button>
        </SheetTrigger>
        <SheetContent side={'left'} className={'w-3/4 pt-24 px-10'}>
            <SheetHeader>
                <SheetTitle>
                    <Image src={TitleLogo} alt={'logo'} priority/>
                </SheetTitle>
                <div className={'flex text-xl flex-col py-4 px-7 gap-6'}>
                    <NavLink icon={Home} label={'Home'} to={'/browse'}/>
                    <NavLink icon={Briefcase} label={'Professional'} to={'/browse'}/>
                    <NavLink icon={Swords} label={'Skills'} to={'/skills'}/>
                    <NavLink icon={FolderGitIcon} label={'Projects'} to={'/browse'}/>
                    <NavLink icon={Scale} label={'Certifications'} to={'/browse'}/>
                </div>
            </SheetHeader>

        </SheetContent>
    </Sheet>
}

function NavLink({label, to, ...props}: { icon: LucideIcon, label: string, to: string }) {
    return <Link href={to} className={'flex gap-2 items-center'}>
        {<props.icon/>}
        {label}
    </Link>
}
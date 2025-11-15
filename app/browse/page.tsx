import Image from "next/image";
import Profile01 from '@/public/profile01.jpeg';
import Profile02 from '@/public/profile02.jpeg';
import Profile03 from '@/public/profile03.jpeg';
import Profile04 from '@/public/profile04.jpeg';
import Link from "next/link";
import {StaticImport} from "next/dist/shared/lib/get-img-props";

export default function Page() {
    return (<div className={'flex flex-1 justify-center items-center flex-col min-h-screen'}>
        <div className={'flex justify-center items-center text-3xl sm:text-[3.3rem] font-semibold my-14'}>무엇을 보고 싶은가요?
        </div>
        <div
            className={'grid grid-cols-2 sm:flex justify-center items-center px-8 sm:px-10 gap-8 sm:gap-5 sm:gap-10 mb-[10rem] w-full'}>
            <Card link={''} src={Profile01} label={'이력서'}/>
            <Card link={'/projects'} src={Profile02} label={'프로젝트'}/>
            <Card link={'/skills'} src={Profile03} label={'스킬'}/>
            <Card link={'/certifications'} src={Profile04} label={'인증'}/>
        </div>
    </div>)
}

function Card({src, label, link}: { src: StaticImport, label: string, link: string }) {
    return <Link href={link}
                 className={'flex flex-1 flex-col gap-3 sm:max-w-[160px]  min-h-[84px] min-w-[84px]'}>
        <div className={'pt-[85%] relative rounded-xl overflow-hidden'}>
            <Image src={src} alt={'profile01'} className={'top-0 absolute h-full object-cover'} priority/>
        </div>
        <p className={'text-center font-semibold text-lg'}>{label}</p>
    </Link>
}
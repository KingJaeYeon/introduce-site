'use client'
import useSound from "use-sound";
import {useState} from "react";
import {useRouter} from "next/navigation";
import Image from "next/image";
import TitleImg from "@/public/title.png";

export function Title() {
    const [play] = useSound('/sounds/Intro.mp3')
    const [isClick, setIsClick] = useState(false)
    const {push} = useRouter()

    const onClick = () => {
        setIsClick(true)
        play()
        setTimeout(() => push('/browse'), 3000)
    }


    return isClick ?
        <Image src={TitleImg} alt={'Sumname'}
               style={{animationIterationCount: 1}}
               className={'cursor-pointer delay-1000 duration-[3000ms] animate-ping'} priority/>
        : <Image onClick={onClick}
                 src={TitleImg}
                 alt={'Sumname'}
                 className={'cursor-pointer duration-1000 fade-in-0 animate-in'} priority/>
}
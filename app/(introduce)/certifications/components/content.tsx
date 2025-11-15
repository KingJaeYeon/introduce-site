'use client'
import React from "react";
import {ExternalLinkIcon} from "lucide-react";
import {DataType} from "@/app/(introduce)/certifications/page";
import {useModalStore} from "@/store/modalStore";

export function Content({data}: { data: DataType[] }) {
    return <div className={'w-full flex flex-col items-center gap-4'}>
        <div className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 w-full'}>
            {data.map((value, i) => (
                <ContentItem key={i} icon={value.icon} title={value.title} link={value.link}
                             description={value.description} isModal={value.isModal}/>))}
        </div>
    </div>
}

function ContentItem({title, description, icon, link, isModal}: DataType) {
    const {openModal} = useModalStore()
    return (
        <div
            onClick={() => isModal ? openModal('view', {link, title}) : window.open(link, '_blank')}
            style={{animationIterationCount: 1}}
            className={'animate-[fadeSlideUp] duration-500  cursor-pointer shadow-[0_4px_10px_#0000004d] hover:scale-105 hover:shadow-[0_8px_20px_#ff000080] flex flex-col bg-[#1e1e1e] p-5 rounded-lg '}>
            <div className={'mb-2'}>
                {icon}
            </div>
            <div className={'font-semibold text-xl py-3 flex min-h-[80px]'}>
                {title}
            </div>
            <p className={'text-sm text-muted-foreground pb-3 flex items-center gap-2'}>{description}
                <ExternalLinkIcon className={'w-4 h-4 text-red-600'}/>
            </p>
        </div>
    )
}

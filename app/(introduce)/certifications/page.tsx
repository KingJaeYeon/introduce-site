import React, {ReactElement} from "react";
import {Nodejs} from "@/components/assets/icons/nodejs";
import {IconSql} from "@/components/assets/icons/sql";
import {Content} from "@/app/(introduce)/certifications/components/content";

export type DataType = { icon: ReactElement, title: string, description: string, link: string, isModal: boolean };

const arr: DataType[] = [
    {
        icon: <IconSql className={'w-[30px] h-[30px]'}/>,
        title: 'SQLD',
        description: '국가공인 SQL 전문가',
        link: `/certifications/sqld.pdf`,
        isModal: true
    },
    {
        icon: <Nodejs className={'w-[30px] h-[30px]'}/>,
        title: 'Node.js',
        description: 'Backend Runtime',
        link: 'https://www.udemy.com/certificate/UC-a26de7c8-2ceb-4fb8-a4a8-86b5373950cd/',
        isModal: false,
    },
    {
        icon: <Nodejs className={'w-[30px] h-[30px]'}/>,
        title: 'Node.js',
        description: 'Backend Runtime',
        link: 'https://www.udemy.com/certificate/UC-a26de7c8-2ceb-4fb8-a4a8-86b5373950cd/',
        isModal: false,
    },
]


export default function SkillPage() {
    return (
        <div className={'flex flex-1 justify-center pt-[20px] px-10 h-full'}>
            <div className={'w-[970px] flex flex-col gap-[50px] pt-[100px]'}>
                <Content data={arr}/>
                <div className={'pb-[50px]'}/>
            </div>
        </div>
    )
}



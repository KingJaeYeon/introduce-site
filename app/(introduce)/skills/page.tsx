import {AWS} from "@/components/assets/icons/aws";
import React, {ReactElement} from "react";
import {Nodejs} from "@/components/assets/icons/nodejs";
import {Nestjs} from "@/components/assets/icons/nestjs";
import {Docker} from "@/components/assets/icons/docker";
import {Nginx} from "@/components/assets/icons/nginx";
import {Pm2} from "@/components/assets/icons/pm2";
import {IconReact} from "@/components/assets/icons/react";
import {IconNextjs} from "@/components/assets/icons/nextjs";
import {ElectronIcon} from "@/components/assets/icons/electron";
import {IconTailwind} from "@/components/assets/icons/tailwind";
import {IconReactQuery} from "@/components/assets/icons/reactquery";
import {IconZustand} from "@/components/assets/icons/zustand";
import {IconTS} from "@/components/assets/icons/ts";
import {IconPostgresql} from "@/components/assets/icons/postgresql";
import {IconMysql} from "@/components/assets/icons/mysql";
import {IconPrisma} from "@/components/assets/icons/prisma";
import {Content} from "@/app/(introduce)/skills/components/content";

export type DataType = { icon: ReactElement, title: string, description: string }

const frontend: DataType[] = [
    {icon: <IconReact className={'w-[30px] h-[30px]'}/>, title: 'HTML&CSS', description: 'Web Markup and Styling'},
    {icon: <Nodejs className={'w-[30px] h-[30px]'}/>, title: 'JavaScript', description: 'Scripting Language'},
    {icon: <IconTS className={'w-[30px] h-[30px]'}/>, title: 'TypeScript', description: 'Type-safe JavaScript'},
    {
        icon: <IconNextjs className={'w-[30px] h-[30px] text-red-600'}/>,
        title: 'Next.js',
        description: 'FullStack React Framework'
    },
    {icon: <IconReact className={'w-[30px] h-[30px]'}/>, title: 'React', description: 'JS Library'},
    {
        icon: <IconTailwind className={'w-[30px] h-[30px] text-blue-500'}/>,
        title: 'Tailwind',
        description: 'CSS Framework'
    },
    {icon: <IconReact className={'w-[30px] h-[30px] text-white'}/>, title: 'Shadcn', description: 'UI Library'},
    {icon: <IconZustand className={'w-[30px] h-[30px]'}/>, title: 'Zustand', description: 'React 상태관리툴'},
    {icon: <IconReactQuery className={'w-[30px] h-[30px]'}/>, title: 'React-Query', description: 'Server 상태관리툴'},
    {
        icon: <ElectronIcon className={'w-[30px] h-[30px] text-red-600'}/>,
        title: 'Electron',
        description: 'Framework for Cross Platform Desktop App'
    }
]

const backend: DataType[] = [
    {icon: <Nodejs className={'w-[30px] h-[30px]'}/>, title: 'Node.js', description: 'Backend Runtime'},
    {icon: <Nestjs className={'w-[30px] h-[30px]'}/>, title: 'Nest.js', description: 'NodeJS Framework'},
    {icon: <Nodejs className={'w-[30px] h-[30px]'}/>, title: 'Express', description: 'NodeJS Framework'}
]

const cloud: DataType[] = [
    {icon: <Docker className={'w-[33px] h-[33px]'}/>, title: 'Docker', description: 'Containerization'},
    {icon: <AWS className={'w-[33px] h-[33px] text-red-600'}/>, title: 'AWS-EC2', description: 'Cloud Platform'},
    {icon: <AWS className={'w-[33px] h-[33px] text-red-600'}/>, title: 'AWS-RDS', description: 'Cloud Platform'},
    {icon: <AWS className={'w-[33px] h-[33px] text-red-600'}/>, title: 'AWS-S3', description: 'Cloud Platform'},
    {icon: <AWS className={'w-[33px] h-[33px] text-red-600'}/>, title: 'AWS-SES', description: 'Cloud Platform'},
    {icon: <Nginx className={'w-[33px] h-[33px]'}/>, title: 'Nginx', description: 'Web Application Server'},
    {icon: <Pm2 className={'w-[33px] h-[33px]'}/>, title: 'Pm2', description: 'Process Manager'}
]

const db: DataType[] = [
    {icon: <IconPostgresql className={'w-[33px] h-[33px]'}/>, title: 'Postgresql', description: 'Relational Database'},
    {icon: <IconMysql className={'w-[33px] h-[33px]'}/>, title: 'MySQL', description: 'Relational Database'},
    {icon: <IconPrisma className={'w-[33px] h-[33px]'}/>, title: 'Prisma', description: 'JS 및 TS에서 사용하는 ORM Library'},
]

export default function SkillPage() {
    return (
        <div className={'flex flex-1 justify-center pt-[20px] px-10 h-full'}>
            <div className={'w-[970px] flex flex-col gap-[50px]'}>
                <Content data={frontend} title={'Frontend'}/>
                <Content data={backend} title={'Backend'}/>
                <Content data={cloud} title={'Cloud & DevOps'}/>
                <Content data={db} title={'Databases & ORM'}/>
                <div className={'pb-[50px]'}/>
            </div>
        </div>
    )
}


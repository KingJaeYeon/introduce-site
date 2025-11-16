import AWS from '@/public/assets/aws.svg'
import IconFigma from '@/public/assets/figma.svg'
import IconJira from '@/public/assets/jira.svg'
import IconTS from "@/public/assets/typescript.svg";
import IconHtml from "@/public/assets/html.svg";
import IconZustand from "@/public/assets/zustand.svg";
import IconPostgresql from "@/public/assets/postgresql.svg";
import IconMysql from "@/public/assets/mysql.svg";
import IconPrisma from "@/public/assets/prisma.svg";
import IconShadcn from '@/public/assets/shadcn.svg'
import ElectronIcon from "@/public/assets/electron.svg";
import IconTailwind from "@/public/assets/tailwind.svg";
import IconReactQuery from "@/public/assets/react-query.svg";
import Docker from "@/public/assets/docker.svg";
import Nginx from "@/public/assets/nginx.svg";
import Pm2 from "@/public/assets/pm2.svg";
import IconNextjs from "@/public/assets/nextjs.svg";
import IconReact from "@/public/assets/react.svg";
import Nodejs from "@/public/assets/nodejs.svg";
import Nestjs from "@/public/assets/nestjs.svg";
import React, {ReactElement} from "react";



import {Content} from "@/app/(introduce)/skills/components/content";

export type DataType = { icon: ReactElement, title: string, description: string }

const frontend: DataType[] = [
    {icon: <IconHtml className={'w-[30px] h-[30px] text-red-600'}/>, title: 'HTML&CSS', description: 'Web Markup and Styling'},
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
    {icon: <IconShadcn className={'w-[30px] h-[30px] text-red-600'}/>, title: 'Shadcn', description: 'UI Library'},
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

const tools: DataType[] = [
    {icon: <IconFigma className={'w-[33px] h-[33px]'}/>, title: 'Figma', description: '디자이너와 협업툴'},
    {icon: <IconJira className={'w-[33px] h-[33px]'}/>, title: 'Jira', description: 'Task 관리툴'},
]

export default function SkillPage() {
    return (
        <div className={'flex flex-1 justify-center pt-[20px] px-10 h-full'}>

            <div className={'w-[970px] flex flex-col gap-[50px]'}>
                <Content data={frontend} title={'Frontend'}/>
                <Content data={backend} title={'Backend'}/>
                <Content data={cloud} title={'Cloud & DevOps'}/>
                <Content data={db} title={'Databases & ORM'}/>
                <Content data={tools} title={'Tools'}/>
                <div className={'pb-[50px]'}/>
            </div>
        </div>
    )
}


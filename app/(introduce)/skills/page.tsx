import AWS from '@/public/assets/aws.svg';
import IconFigma from '@/public/assets/figma.svg';
import IconJira from '@/public/assets/jira.svg';
import IconTS from '@/public/assets/typescript.svg';
import IconHtml from '@/public/assets/html.svg';
import IconZustand from '@/public/assets/zustand.svg';
import IconPostgresql from '@/public/assets/postgresql.svg';
import IconMysql from '@/public/assets/mysql.svg';
import IconPrisma from '@/public/assets/prisma.svg';
import IconShadcn from '@/public/assets/shadcn.svg';
import ElectronIcon from '@/public/assets/electron.svg';
import IconTailwind from '@/public/assets/tailwind.svg';
import IconReactQuery from '@/public/assets/react-query.svg';
import Docker from '@/public/assets/docker.svg';
import Nginx from '@/public/assets/nginx.svg';
import Pm2 from '@/public/assets/pm2.svg';
import IconNextjs from '@/public/assets/nextjs.svg';
import IconReact from '@/public/assets/react.svg';
import Nodejs from '@/public/assets/nodejs.svg';
import Nestjs from '@/public/assets/nestjs.svg';
import React, { ReactElement } from 'react';

import { Content } from '@/app/(introduce)/skills/components/content';

export type DataType = {
  icon: ReactElement;
  title: string;
  description: string;
};

const frontend: DataType[] = [
  {
    icon: <IconHtml className={'h-[30px] w-[30px] text-red-600'} />,
    title: 'HTML&CSS',
    description: 'Web Markup and Styling',
  },
  {
    icon: <Nodejs className={'h-[30px] w-[30px]'} />,
    title: 'JavaScript',
    description: 'Scripting Language',
  },
  {
    icon: <IconTS className={'h-[30px] w-[30px]'} />,
    title: 'TypeScript',
    description: 'Type-safe JavaScript',
  },
  {
    icon: <IconNextjs className={'h-[30px] w-[30px] text-red-600'} />,
    title: 'Next.js',
    description: 'FullStack React Framework',
  },
  {
    icon: <IconReact className={'h-[30px] w-[30px]'} />,
    title: 'React',
    description: 'JS Library',
  },
  {
    icon: <IconTailwind className={'h-[30px] w-[30px] text-blue-500'} />,
    title: 'Tailwind',
    description: 'CSS Framework',
  },
  {
    icon: <IconShadcn className={'h-[30px] w-[30px] text-red-600'} />,
    title: 'Shadcn',
    description: 'UI Library',
  },
  {
    icon: <IconZustand className={'h-[30px] w-[30px]'} />,
    title: 'Zustand',
    description: 'React 상태관리툴',
  },
  {
    icon: <IconReactQuery className={'h-[30px] w-[30px]'} />,
    title: 'React-Query',
    description: 'Server 상태관리툴',
  },
  {
    icon: <ElectronIcon className={'h-[30px] w-[30px] text-red-600'} />,
    title: 'Electron',
    description: 'Framework for Cross Platform Desktop App',
  },
];

const backend: DataType[] = [
  {
    icon: <Nodejs className={'h-[30px] w-[30px]'} />,
    title: 'Node.js',
    description: 'Backend Runtime',
  },
  {
    icon: <Nestjs className={'h-[30px] w-[30px]'} />,
    title: 'Nest.js',
    description: 'NodeJS Framework',
  },
  {
    icon: <Nodejs className={'h-[30px] w-[30px]'} />,
    title: 'Express',
    description: 'NodeJS Framework',
  },
];

const cloud: DataType[] = [
  {
    icon: <Docker className={'h-[33px] w-[33px]'} />,
    title: 'Docker',
    description: 'Containerization',
  },
  {
    icon: <AWS className={'h-[33px] w-[33px] text-red-600'} />,
    title: 'AWS-EC2',
    description: 'Cloud Platform',
  },
  {
    icon: <AWS className={'h-[33px] w-[33px] text-red-600'} />,
    title: 'AWS-RDS',
    description: 'Cloud Platform',
  },
  {
    icon: <AWS className={'h-[33px] w-[33px] text-red-600'} />,
    title: 'AWS-S3',
    description: 'Cloud Platform',
  },
  {
    icon: <AWS className={'h-[33px] w-[33px] text-red-600'} />,
    title: 'AWS-SES',
    description: 'Cloud Platform',
  },
  {
    icon: <Nginx className={'h-[33px] w-[33px]'} />,
    title: 'Nginx',
    description: 'Web Application Server',
  },
  {
    icon: <Pm2 className={'h-[33px] w-[33px]'} />,
    title: 'Pm2',
    description: 'Process Manager',
  },
];

const db: DataType[] = [
  {
    icon: <IconPostgresql className={'h-[33px] w-[33px]'} />,
    title: 'Postgresql',
    description: 'Relational Database',
  },
  {
    icon: <IconMysql className={'h-[33px] w-[33px]'} />,
    title: 'MySQL',
    description: 'Relational Database',
  },
  {
    icon: <IconPrisma className={'h-[33px] w-[33px]'} />,
    title: 'Prisma',
    description: 'JS 및 TS에서 사용하는 ORM Library',
  },
];

const tools: DataType[] = [
  {
    icon: <IconFigma className={'h-[33px] w-[33px]'} />,
    title: 'Figma',
    description: '디자이너와 협업툴',
  },
  {
    icon: <IconJira className={'h-[33px] w-[33px]'} />,
    title: 'Jira',
    description: 'Task 관리툴',
  },
];

export default function SkillPage() {
  return (
    <div className={'flex h-full flex-1 justify-center px-10 pt-[20px]'}>
      <div className={'flex w-[970px] flex-col gap-[50px]'}>
        <Content data={frontend} title={'Frontend'} />
        <Content data={backend} title={'Backend'} />
        <Content data={cloud} title={'Cloud & DevOps'} />
        <Content data={db} title={'Databases & ORM'} />
        <Content data={tools} title={'Tools'} />
        <div className={'pb-[50px]'} />
      </div>
    </div>
  );
}

import IconPostgresql from '@/public/assets/postgresql.svg';
import IconMysql from '@/public/assets/mysql.svg';
import IconPrisma from '@/public/assets/prisma.svg';
import React, { ReactElement } from 'react';
import Nodejs from '@/public/assets/nodejs.svg';
import Nestjs from '@/public/assets/nestjs.svg';
import IconHtml from '@/public/assets/html.svg';
import IconTS from '@/public/assets/typescript.svg';
import IconNextjs from '@/public/assets/nextjs.svg';
import IconReact from '@/public/assets/react.svg';
import IconTailwind from '@/public/assets/tailwind.svg';
import IconShadcn from '@/public/assets/shadcn.svg';
import IconZustand from '@/public/assets/zustand.svg';
import IconReactQuery from '@/public/assets/react-query.svg';
import ElectronIcon from '@/public/assets/electron.svg';
import Docker from '@/public/assets/docker.svg';
import AWS from '@/public/assets/aws.svg';
import Nginx from '@/public/assets/nginx.svg';
import Pm2 from '@/public/assets/pm2.svg';
import IconFigma from '@/public/assets/figma.svg';
import IconJira from '@/public/assets/jira.svg';

export type TypeSkill = {
  icon: ReactElement;
  title: string;
  description: string;
};
export const frontend: TypeSkill[] = [
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
export const backend: TypeSkill[] = [
  {
    icon: <Nodejs className={'h-[30px] w-[30px]'} />,
    title: 'Node.js',
    description: 'JS Runtime',
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
export const cloud: TypeSkill[] = [
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
export const db: TypeSkill[] = [
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
export const tools: TypeSkill[] = [
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

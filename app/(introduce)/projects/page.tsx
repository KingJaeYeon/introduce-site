import React from 'react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { LinkOutBtn } from '@/app/(introduce)/projects/components/linkOutBtn';
import ImgContentRenderer from '@/app/(introduce)/projects/components/ImgContentRenderer';

type DataType = {
  title: string;
  type: 'company' | 'toy';
  meta: {
    device: '반응형 웹' | 'PC' | '모바일';
    contribution: string;
    others: string[];
    frameworks: string[];
    developers: string;
  };
  duration: string;
  libraries: string[];
  functions: string[];
  role: string[];
  links: { label: '보기' | '깃허브'; href: string }[];
  images: string[];
};

const data: DataType[] = [
  {
    title: 'The Solve',
    type: 'company',
    meta: {
      device: '반응형 웹',
      contribution: '40%',
      others: ['OpenAPI'],
      frameworks: ['NextJS', 'NestJS'],
      developers: '3명',
    },
    duration: '2024.01 ~ 2024.04',
    libraries: [
      'prisma',
      'shadcn',
      'react-query',
      'lottie',
      'zustand',
      'tailwind',
      'slate.js',
      'passport',
      'sesv2',
      's3',
      'axios',
      'date-fns',
    ],
    functions: [
      '사용자가 사건등록하면 어드민에서 해당사건과 관련되는 전문가를 매칭시켜주는 The Solve입니다.',
      '드랍되서 현재는 프론트만 동작중이고 서버는 내려갔습니다.',
      '설문시트 기반으로 OpenAPI를 사용하여 사기피해 자동 진단 안내',
      'slate.js기반 게시반으로 전문가 지식 백과사전',
      '크롤링 및 사용자 사건등록 기반 유사사례 검색',
      '커뮤니티 및 사례 공유 그외 등등',
    ],
    role: [
      '페이지 단위 풀스택 개발 (프론트엔드 + 백엔드 API)',
      '인증 시스템 (로컬/OAuth 로그인, 회원가입)',
      'Slate.js 기반 에디터 개발 및 관련 페이지 구현 - 사건 등록, 사기방지 백과사전, 게시물 작성',
      '커뮤니티 게시판 (인기글/추천 시스템 포함)',
      '관리자 페이지 (게시물/댓글 관리)',
      '상태 관리 (React Query, Zustand) 및 API 설계',
    ],
    links: [{ label: '보기', href: 'https://www.thesolve.net' }],
    images: [
      '/projects/thesolve/dt-main.png',
      '/projects/thesolve/other03.png',
      '/projects/thesolve/mb-main.png',
      '/projects/thesolve/other01.png',
      '/projects/thesolve/other02.png',
      '/projects/thesolve/other03.png',
      '/projects/thesolve/admin.png',
      '/projects/thesolve/wireframe01.png',
      '/projects/thesolve/wireframe02.png',
      '/projects/thesolve/wireframe03.png',
      '/projects/thesolve/wireframe04.png',
      '/projects/thesolve/wireframe05.png',
      '/projects/thesolve/wireframe06.png',
      '/projects/thesolve/wireframe07.png',
      '/projects/thesolve/wireframe08.png',
    ],
  },
];

export default function ProjectPage() {
  return (
    <div className={'flex h-full flex-1 justify-center pt-[20px] md:px-10'}>
      <div className={'flex w-[1200px] flex-col gap-[50px]'}>
        {data.map((item: DataType, index: number) => {
          const isLast = index === data.length - 1;
          return (
            <div
              key={index}
              className={cn(
                'border-border relative flex items-center gap-10',
                !isLast && 'border-b-2 pb-5',
              )}
            >
              <div className={'flex flex-6 flex-col gap-4'}>
                <div className={'flex items-center gap-2 md:gap-4'}>
                  <h3 className={'text-2xl font-semibold md:text-3xl'}>
                    {item.title}
                  </h3>
                  <div>
                    <Badge
                      className={cn(
                        'rounded-sm border-0 bg-zinc-700 text-xs font-semibold text-white hover:bg-zinc-600',
                        item.type === 'company' &&
                          'bg-red-500 hover:bg-red-600',
                        item.type === 'toy' &&
                          'bg-secondary hover:bg-secondary-100',
                      )}
                    >
                      {item.type === 'company'
                        ? 'Company Project'
                        : 'Toy Project'}
                    </Badge>
                  </div>
                </div>

                <div className="grid grid-cols-5 gap-3 border-y border-zinc-800 py-2">
                  <div>
                    <p className="mb-1 text-xs text-zinc-500">타입</p>
                    <p className="text-xs font-medium text-white">
                      {item.meta.device}
                    </p>
                  </div>
                  <div>
                    <p className="mb-1 text-xs text-zinc-500">기타</p>
                    {item.meta.others.map((item, index) => (
                      <p key={index} className="text-xs font-medium text-white">
                        {item}
                      </p>
                    ))}
                  </div>
                  <div>
                    <p className="mb-1 text-xs text-zinc-500">프레임워크</p>
                    {item.meta.frameworks.map((item, index) => (
                      <p key={index} className="text-xs font-medium text-white">
                        {item}
                      </p>
                    ))}
                  </div>
                  <div>
                    <p className="mb-1 text-xs text-zinc-500">개발인원</p>
                    <p className="text-xs font-medium text-white">
                      {item.meta.developers}
                    </p>
                  </div>
                  <div>
                    <p className="mb-1 text-xs text-zinc-500">기여도</p>
                    <p className="text-xs font-medium text-white">
                      {item.meta.contribution}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="mb-1 text-xs text-zinc-500">개발기간</p>
                  <p className="text-sm text-zinc-400">{item.duration}</p>
                </div>
                <div>
                  <p className="mb-2 text-xs text-zinc-500">대표 라이브러리</p>
                  <div className={'flex flex-wrap items-center gap-2'}>
                    {item.libraries.map((item, index) => (
                      <Badge
                        key={index}
                        className="border-0 bg-zinc-800 text-xs text-zinc-300 hover:bg-zinc-700"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className={'flex flex-col'}>
                  <p className={'text-sm font-bold md:text-base'}>주요 기능</p>
                  <ul className="text-muted-foreground text-0.5xs ml-6 list-disc [&>li]:mt-1">
                    {item.functions.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className={'flex flex-col'}>
                  <p className={'text-sm font-bold md:text-base'}>담당 역할</p>
                  <ul className="text-muted-foreground text-0.5xs ml-6 list-disc [&>li]:mt-1">
                    {item.role.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className={'flex flex-col gap-1 lg:hidden'}>
                  <p className={'text-sm font-bold md:text-base'}>스크린샷</p>
                  <div className={'flex items-center gap-2 overflow-auto'}>
                    <ImgContentRenderer images={item.images} />
                  </div>
                </div>
                <div className={'mb-2 flex w-full'}>
                  {item.links.map((item, index) => (
                    <LinkOutBtn key={index} {...item} />
                  ))}
                </div>
              </div>
              <div
                className={
                  'hidden h-full flex-4 overflow-auto lg:relative lg:flex'
                }
              >
                <div className={'absolute top-0'}>
                  <div className={'inline-flex w-full flex-wrap gap-4'}>
                    <ImgContentRenderer images={item.images} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className={'pb-[50px]'} />
      </div>
    </div>
  );
}

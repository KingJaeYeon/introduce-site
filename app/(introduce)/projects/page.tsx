import React, { ReactElement } from 'react';
import { ContentItem } from '@/app/(introduce)/certifications/components/contentItem';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export type DataType = {
  images: string;
  title: string;
  description: string;
  link: string;
  isModal: boolean;

  // 이미지들
  // 타이틀
  // 설명
  // 규모 : toy project || company project
  // 프레임워크
  // 라이브러리
  // 타입: 반응형 웹
  // 보기 || 깃허브 링크
};

const data = [];

export default function ProjectPage() {
  return (
    <div className={'flex h-full flex-1 justify-center pt-[20px] md:px-10'}>
      <div className={'flex w-[1200px] flex-col gap-[50px]'}>
        <div className={'relative flex items-center gap-10'}>
          <div className={'flex max-w-[550px] flex-col gap-3'}>
            <div className={'flex items-center gap-2 md:gap-4'}>
              <h3 className={'text-2xl font-semibold md:text-3xl'}>
                The Solve
              </h3>
              <div>
                <Badge
                  className={cn(
                    'rounded-sm border-0 bg-zinc-700 text-xs font-semibold text-white hover:bg-zinc-600',
                    true && 'bg-red-500 hover:bg-red-600',
                  )}
                >
                  Company Project
                </Badge>
              </div>
            </div>
            <div className={'flex flex-col'}>
              <p className={'text-sm font-bold md:text-base'}>소개</p>
              <p className={'text-muted-foreground text-0.5xs'}>
                국내 사기 사건 비율이 높다는 문제 인식에서 출발하여, 피해자
                지원을 위한 중개 플랫폼을 기획한 프로젝트다. 초기에는 클라이언트
                측 탐정 조직을 기반으로 탐정 중개 서비스로 시작했지만, 이미지
                문제로 변호사 중개 플랫폼으로 방향이 전환되었다. 사용자가 사연을
                등록하면 적합한 전문가를 매칭하고 수수료를 받는 구조를 목표로
                했다. 법적 제약과 운영 인력 준비 부족으로 정식 런칭은 이루어지지
                않았으며 서버는 종료된 상태이다. 현재는 프론트엔드만 확인 가능한
                상태로 유지되고 있다
              </p>
            </div>
            <div className={'flex items-start gap-4 md:gap-10'}>
              <div className={'flex flex-col'}>
                <p className={'text-sm font-bold md:text-lg'}>타입</p>
                <p className={'text-muted-foreground text-xs md:text-base'}>
                  반응형 웹
                </p>
              </div>
              <div className={'flex flex-col'}>
                <p className={'text-sm font-bold md:text-lg'}>기타</p>
                <p className={'text-muted-foreground text-xs md:text-base'}>
                  OpenAPI
                </p>
              </div>
              <div className={'flex flex-col'}>
                <p className={'text-sm font-bold md:text-lg'}>프레임워크</p>
                <p className={'text-muted-foreground text-xs md:text-base'}>
                  NextJS
                </p>
                <p className={'text-muted-foreground text-xs md:text-base'}>
                  NestJS
                </p>
              </div>
              <div className={'flex flex-col'}>
                <p className={'text-sm font-bold md:text-lg'}>개발인원</p>
                <p className={'text-muted-foreground text-xs md:text-base'}>
                  3명
                </p>
              </div>
              <div className={'flex flex-col'}>
                <p className={'text-sm font-bold md:text-lg'}>기여도</p>
                <p className={'text-muted-foreground text-xs md:text-base'}>
                  40%
                </p>
              </div>
            </div>
            <div className={'flex flex-col gap-1'}>
              <p className={'text-sm font-bold md:text-lg'}>대표 라이브러리</p>
              <div className={'flex flex-wrap items-center gap-2'}>
                <Badge
                  className={'text-2xs rounded-sm font-semibold md:text-xs'}
                >
                  prisma
                </Badge>
                <Badge
                  className={'text-2xs rounded-sm font-semibold md:text-xs'}
                >
                  shadcn
                </Badge>
                <Badge
                  className={'text-2xs rounded-sm font-semibold md:text-xs'}
                >
                  react-query
                </Badge>
                <Badge
                  className={'text-2xs rounded-sm font-semibold md:text-xs'}
                >
                  lottie
                </Badge>
                <Badge
                  className={'text-2xs rounded-sm font-semibold md:text-xs'}
                >
                  zustand
                </Badge>
                <Badge
                  className={'text-2xs rounded-sm font-semibold md:text-xs'}
                >
                  tailwind
                </Badge>
                <Badge
                  className={'text-2xs rounded-sm font-semibold md:text-xs'}
                >
                  slate.js
                </Badge>
                <Badge
                  className={'text-2xs rounded-sm font-semibold md:text-xs'}
                >
                  passport
                </Badge>
                <Badge
                  className={'text-2xs rounded-sm font-semibold md:text-xs'}
                >
                  sesv2
                </Badge>
                <Badge
                  className={'text-2xs rounded-sm font-semibold md:text-xs'}
                >
                  s3
                </Badge>
                <Badge
                  className={'text-2xs rounded-sm font-semibold md:text-xs'}
                >
                  axios
                </Badge>
                <Badge
                  className={'text-2xs rounded-sm font-semibold md:text-xs'}
                >
                  date-fns
                </Badge>
              </div>
            </div>
            <div className={'flex flex-col gap-1'}>
              <p className={'text-sm font-bold md:text-lg'}>개발기간</p>
              <p className={'text-muted-foreground text-xs md:text-base'}>
                2023.12.30 ~ 2024.04.26
              </p>
            </div>
            <div className={'flex flex-col'}>
              <p className={'text-sm font-bold md:text-lg'}>작업 기여도</p>
              <ul className="text-muted-foreground ml-6 list-disc text-sm md:text-base [&>li]:mt-2">
                <li>dddddddddddd ddddddddd ddddddddd ddddddddd ddddddddd</li>
                <li>ddd</li>
                <li>ddd</li>
                <li>ddd</li>
              </ul>
            </div>
            <div className={'flex flex-col gap-1'}>
              <p className={'text-sm font-bold md:text-lg'}>스크린샷</p>
              <div className={'flex items-center gap-2 overflow-auto'}>
                <Image
                  src={'/projects/thesolve/dt-main.png'}
                  className={'h-[130px] w-auto object-center'}
                  alt={'alt'}
                  width={200}
                  height={130}
                />
                <Image
                  src={'/projects/thesolve/other03.png'}
                  className={'h-[130px] w-auto object-center'}
                  alt={'alt'}
                  width={200}
                  height={130}
                />
                <Image
                  src={'/projects/thesolve/mb-main.png'}
                  className={'h-[130px] w-auto object-center'}
                  alt={'alt'}
                  width={200}
                  height={130}
                  priority
                />
              </div>
            </div>
            <div className={'mb-2 flex w-full'}>
              <Button
                variant={'outline'}
                size={'lg'}
                className={'w-full text-lg font-semibold'}
              >
                보기
              </Button>
            </div>
          </div>
          <div
            className={'hidden h-full flex-1 overflow-auto lg:relative lg:flex'}
          >
            <div className={'absolute top-0'}>
              <div className={'inline-flex w-full flex-wrap gap-4'}>
                <Image
                  src={'/projects/thesolve/dt-main.png'}
                  className={'h-[130px] w-auto object-center'}
                  alt={'alt'}
                  width={200}
                  height={130}
                />
                <Image
                  src={'/projects/thesolve/mb-main.png'}
                  className={'h-[130px] w-auto object-center'}
                  alt={'alt'}
                  width={200}
                  height={130}
                />
                <Image
                  src={'/projects/thesolve/other01.png'}
                  className={'h-[130px] w-auto object-center'}
                  alt={'alt'}
                  width={200}
                  height={130}
                  priority
                />
                <Image
                  src={'/projects/thesolve/other02.png'}
                  className={'h-[130px] w-auto object-center'}
                  alt={'alt'}
                  width={200}
                  height={130}
                />
                <Image
                  src={'/projects/thesolve/other03.png'}
                  className={'h-[130px] w-auto object-center'}
                  alt={'alt'}
                  width={200}
                  height={130}
                />
                <Image
                  src={'/projects/thesolve/admin.png'}
                  className={'h-[130px] w-auto object-center'}
                  alt={'alt'}
                  width={200}
                  height={130}
                />
                <Image
                  src={'/projects/thesolve/wireframe01.png'}
                  className={'h-[130px] w-auto object-center'}
                  alt={'alt'}
                  width={200}
                  height={130}
                />
                <Image
                  src={'/projects/thesolve/wireframe02.png'}
                  className={'h-[130px] w-auto object-center'}
                  alt={'alt'}
                  width={200}
                  height={130}
                />
                <Image
                  src={'/projects/thesolve/wireframe07.png'}
                  className={'h-[130px] w-auto object-center'}
                  alt={'alt'}
                  width={200}
                  height={130}
                />
                <Image
                  alt={'alt'}
                  src={'/projects/thesolve/wireframe04.png'}
                  className={'h-[130px] w-auto object-center'}
                  width={200}
                  height={130}
                />
                <Image
                  src={'/projects/thesolve/wireframe03.png'}
                  className={'h-[130px] w-auto object-center'}
                  alt={'alt'}
                  width={200}
                  height={130}
                />
                <Image
                  src={'/projects/thesolve/wireframe05.png'}
                  className={'h-[130px] w-auto object-center'}
                  alt={'alt'}
                  width={200}
                  height={130}
                />
                <Image
                  src={'/projects/thesolve/wireframe06.png'}
                  className={'h-[130px] w-auto object-center'}
                  alt={'alt'}
                  width={200}
                  height={130}
                />
                <Image
                  src={'/projects/thesolve/wireframe08.png'}
                  className={'h-[130px] w-auto object-center'}
                  alt={'alt'}
                  width={200}
                  height={130}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={'pb-[50px]'} />
      </div>
    </div>
  );
}

function Content({ data }: { data: DataType[] }) {
  return (
    <div className={'flex w-full flex-col items-center gap-4'}>
      <div
        className={
          'grid w-full grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3'
        }
      >
        {/*{data.map((value, i) => (*/}
        {/*  <ContentItem key={i} {...value} index={i} />*/}
        {/*))}*/}
      </div>
    </div>
  );
}

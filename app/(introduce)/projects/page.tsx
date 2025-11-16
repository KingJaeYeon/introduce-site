import React, { ReactElement } from 'react';
import { ContentItem } from '@/app/(introduce)/certifications/components/contentItem';

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
    <div className={'flex h-full flex-1 justify-center px-10 pt-[20px]'}>
      <div className={'flex w-[970px] flex-col gap-[50px] md:pt-[100px]'}>
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

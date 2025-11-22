import React from 'react';
import { data } from '@/data/professionals';
import {
  ContentCard,
  ContentTitle,
} from '@/app/(introduce)/professional/components/Content';
import { ContentIcon } from '@/app/(introduce)/professional/components/ContentIcon';
import { Metadata } from 'next';
import { getMetadata } from '@/lib/getMetadata';

export async function generateMetadata(): Promise<Metadata> {
  return getMetadata('/professional');
}

export default function ProfessionalPage() {
  return (
    <div className={'flex h-full flex-1 justify-center pt-[20px] lg:px-10'}>
      <div className={'flex w-[1200px] flex-col items-center gap-4'}>
        <ContentTitle label={'⏱️ 타임라인 & 소개'} />
        <div className="relative flex h-full w-full flex-col gap-4 pt-10 pr-0 pl-4 before:absolute before:top-0 before:left-6 before:h-[calc(100%+25px)] before:w-[4px] before:-translate-x-1/2 before:bg-zinc-300 lg:gap-10 lg:px-4 lg:before:left-1/2">
          {data.map((item, index) => (
            <ContentCard
              key={index}
              {...item}
              align={index % 2 === 0 ? 'left' : 'right'}
            />
          ))}
          <div className="relative flex w-full flex-col items-start">
            <ContentIcon type={'end'} />
            <div className={'h-[60px]'} />
          </div>
        </div>
      </div>
    </div>
  );
}

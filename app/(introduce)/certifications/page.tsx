import React from 'react';
import { data } from '@/data/certifications';
import { ContentItem } from '@/app/(introduce)/certifications/components/contentItem';
import { Metadata } from 'next';
import { getMetadata } from '@/lib/getMetadata';

export async function generateMetadata(): Promise<Metadata> {
  return getMetadata('/certifications');
}

export default function CertificationPage() {
  return (
    <div className={'flex h-full flex-1 justify-center px-10 pt-[20px]'}>
      <div className={'flex w-[970px] flex-col gap-[50px] md:pt-[100px]'}>
        <div className={'flex w-full flex-col items-center gap-4'}>
          <div
            className={
              'grid w-full grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3'
            }
          >
            {data.map((value, i) => (
              <ContentItem key={i} {...value} index={i} />
            ))}
          </div>
        </div>
        <div className={'pb-[50px]'} />
      </div>
    </div>
  );
}

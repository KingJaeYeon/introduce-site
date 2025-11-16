import React from 'react';
import { DataType } from '@/app/(introduce)/certifications/page';
import { ContentItem } from '@/app/(introduce)/certifications/components/contentItem';

export function Content({ data }: { data: DataType[] }) {
  return (
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
  );
}

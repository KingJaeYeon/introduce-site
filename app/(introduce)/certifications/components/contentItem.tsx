'use client';
import { DataType } from '@/app/(introduce)/certifications/page';
import { useModalStore } from '@/store/modalStore';
import { ExternalLinkIcon } from 'lucide-react';
import React from 'react';

export function ContentItem({
  title,
  description,
  icon,
  link,
  isModal,
  index,
}: DataType & { index: number }) {
  const { openModal } = useModalStore();
  return (
    <div
      onClick={() =>
        isModal
          ? openModal('view', { link, title })
          : window.open(link, '_blank')
      }
      style={{ animationIterationCount: 1, animationDelay: `${index * 200}ms` }}
      className={
        'flex animate-[fadeSlideUp_.5s_ease-out_forwards] cursor-pointer flex-col rounded-lg bg-[#1e1e1e] p-5 opacity-0 shadow-[0_4px_10px_#0000004d] duration-500 hover:scale-105 hover:shadow-[0_8px_20px_#ff000080]'
      }
    >
      <div className={'mb-2'}>{icon}</div>
      <div className={'flex min-h-[80px] py-3 text-xl font-semibold'}>
        {title}
      </div>
      <p
        className={'text-muted-foreground flex items-center gap-2 pb-3 text-sm'}
      >
        {description}
        <ExternalLinkIcon className={'h-4 w-4 text-red-600'} />
      </p>
    </div>
  );
}

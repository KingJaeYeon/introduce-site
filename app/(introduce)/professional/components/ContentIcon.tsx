import {
  IconSolidGlobal,
  IconSolidNews,
  IconSolidStar,
  IconSolidUser,
} from '@/components/assets';
import IconStudy from '@/public/assets/study.svg';
import { cn } from '@/lib/utils';
import React from 'react';
import { ProfessionalsT } from '@/data/professionals';

export function ContentIcon({ type }: { type: ProfessionalsT }) {
  let renderer = <IconSolidUser className="size-5 lg:size-6" />;
  let className = 'bg-blue-500';

  switch (type) {
    case 'toy':
      renderer = <IconSolidGlobal className="size-5 lg:size-7" />;
      className = 'bg-red-400';
      break;
    case 'company':
      renderer = <IconSolidNews className="size-5 lg:size-7" />;
      className = 'bg-blue-500';
      break;
    case 'study':
      renderer = <IconStudy className="size-5 lg:size-7" />;
      className = 'bg-purple-400';
      break;
    case 'end':
      renderer = <IconSolidStar className="size-5 lg:size-6" />;
      className = 'bg-green-500';
      break;
  }

  return (
    <div
      style={{ animationIterationCount: 1 }}
      className={cn(
        'fade-in-0 absolute left-2 flex h-10 w-10 -translate-x-1/2 animate-[cdBounce1.6s] items-center justify-center rounded-full outline-4 outline-white lg:left-1/2 lg:h-15 lg:w-15',
        className,
      )}
    >
      {renderer}
    </div>
  );
}

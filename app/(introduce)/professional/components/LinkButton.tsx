'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

type Props = {
  icon?: React.ReactNode;
  link: string;
  label?: string;
  align?: 'left' | 'right';
};

export default function LinkButton({ icon, label, link, align }: Props) {
  const isInnerSite = link.startsWith('/projects#');
  const { push } = useRouter();

  return (
    <Button
      onClick={() => (isInnerSite ? push(link) : window.open(link, '_blank'))}
      variant={'secondary'}
      className={cn(
        'flex cursor-pointer items-center gap-1 font-semibold',
        align === 'right' && 'flex-row-reverse',
      )}
    >
      {icon}
      {label}
    </Button>
  );
}

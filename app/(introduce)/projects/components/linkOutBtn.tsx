'use client';
import { Button } from '@/components/ui/button';
import React from 'react';

export function LinkOutBtn({ label, href }: { label: string; href: string }) {
  return (
    <Button
      variant={'outline'}
      size={'lg'}
      className={'w-full font-semibold'}
      onClick={() => window.open(href, '_blank')}
    >
      {label}
    </Button>
  );
}

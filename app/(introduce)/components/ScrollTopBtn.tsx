'use client';

import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';
import { useScrollTop } from '@/hooks/useScrollTop';

export default function ScrollTopBtn() {
  const { onScrollTop } = useScrollTop();
  return (
    <Button
      className={'absolute right-6 bottom-6 rounded-full'}
      variant={'secondary'}
      size={'icon-lg'}
      onClick={() => onScrollTop()}
    >
      <ArrowUp className={'size-5'} />
    </Button>
  );
}

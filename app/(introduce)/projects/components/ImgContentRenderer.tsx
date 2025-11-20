'use client';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useModalStore } from '@/store/modalStore';

export default function ImgContentRenderer({
  images,
  isFrist,
}: {
  images: string[];
  isFrist: boolean;
}) {
  const isLg = useMediaQuery('(max-width: 1024px)');
  const { openModal } = useModalStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 마운트 전에는 전체, 마운트 후에는 미디어쿼리 적용
  const displayImages = !mounted ? images : isLg ? images.slice(0, 5) : images;

  return displayImages.map((item, index) => (
    <Image
      onClick={() => openModal('lightbox', { imgUrl: item })}
      key={index}
      src={item}
      className={'h-[130px] w-auto border object-center'}
      alt={'alt'}
      width={200}
      height={130}
      priority={isFrist} // 첫번째 이미지만 미리 로딩
      loading={isFrist ? 'eager' : 'lazy'} // 나머지는 lazy
    />
  ));
}

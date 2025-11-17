'use client';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import Image from 'next/image';
import React from 'react';
import { useModalStore } from '@/store/modalStore';

export default function ImgContentRenderer({ images }: { images: string[] }) {
  const isLg = useMediaQuery('(max-width: 1024px)');
  const { openModal } = useModalStore();
  const displayImages = isLg ? images.slice(0, 3) : images;

  return displayImages.map((item, index) => (
    <Image
      onClick={() => openModal('lightbox', { imgUrl: item })}
      key={index}
      src={item}
      className={'h-[130px] w-auto object-center'}
      alt={'alt'}
      width={200}
      height={130}
    />
  ));
}

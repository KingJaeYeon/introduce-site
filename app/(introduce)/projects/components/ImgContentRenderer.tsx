'use client';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useModalStore } from '@/store/modalStore';
import { Skeleton } from '@/components/ui/skeleton';

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
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});

  useEffect(() => {
    setMounted(true);
  }, []);

  // 마운트 전에는 전체, 마운트 후에는 미디어쿼리 적용
  const displayImages = !mounted ? images : isLg ? images.slice(0, 5) : images;

  const handleLoad = (index: number) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  };

  return displayImages.map((item, index) => (
    <div
      key={index}
      className="relative h-[130px] w-auto overflow-hidden rounded-md border"
    >
      {!loadedImages[index] && (
        <Skeleton className="absolute inset-0 h-full w-full" />
      )}
      <Image
        onClick={() => openModal('lightbox', { imgUrl: item })}
        src={item}
        alt={`image-${index}`}
        className="h-[130px] w-auto object-center transition hover:scale-105"
        width={200}
        height={130}
        priority={isFrist}
        loading={isFrist ? 'eager' : 'lazy'}
        onLoad={() => handleLoad(index)}
      />
    </div>
  ));
}

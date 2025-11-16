import React from 'react';
import TitleImg from '@/public/title.png';
import Image from 'next/image';
import Link from 'next/link';
import { IconRenderer } from '@/app/(introduce)/components/IconRenderer';
import { NavLink } from '@/app/(introduce)/components/NavLinks';
import TitleBarMB from '@/app/(introduce)/components/TitleBarMB';
import ModalRenderer from '@/app/components/ModalRenderer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-svh w-full flex-col justify-center">
      <TitleBar />
      <div className="scrollWidth3 relative flex flex-1 flex-col gap-4 overflow-auto">
        <div className={'absolute top-[70px] w-full p-4 pt-0'}>{children}</div>
      </div>
      <ModalRenderer />
    </div>
  );
}

function TitleBar() {
  return (
    <div
      className={
        'bg-background fixed top-0 z-1 flex h-[70px] w-full items-center px-4 sm:h-20'
      }
    >
      <div className={'flex flex-1 items-center gap-6'}>
        <Link href={'/'}>
          <Image
            src={TitleImg}
            alt={'title'}
            priority
            className={'w-[200px]'}
          />
        </Link>
        <div className={'hidden items-center gap-5 md:flex'}>
          <NavLink label={'Home'} to={'/browse'} />
          <NavLink label={'Professional'} to={'/professional'} />
          <NavLink label={'Skills'} to={'/skills'} />
          <NavLink label={'Projects'} to={'/projects'} />
          <NavLink label={'Certifications'} to={'/certifications'} />
        </div>
      </div>
      <TitleBarMB />
      <IconRenderer />
    </div>
  );
}

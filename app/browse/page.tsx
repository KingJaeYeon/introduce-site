import Image from 'next/image';
import Profile01 from '@/public/profile01.jpeg';
import Profile02 from '@/public/profile02.jpeg';
import Profile03 from '@/public/profile03.jpeg';
import Profile04 from '@/public/profile04.jpeg';
import Link from 'next/link';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export default function Page() {
  return (
    <div
      className={
        'flex min-h-screen flex-1 flex-col items-center justify-center'
      }
    >
      <div
        className={
          'my-14 flex items-center justify-center text-3xl font-semibold sm:text-[3.3rem]'
        }
      >
        무엇을 보고 싶은가요?
      </div>
      <div
        className={
          'mb-[10rem] grid w-full grid-cols-2 items-center justify-center gap-8 px-8 sm:flex sm:gap-5 sm:px-10'
        }
      >
        <Card
          link={'/professional'}
          src={Profile01}
          label={'소개 & 타임라인'}
        />
        <Card link={'/projects'} src={Profile02} label={'프로젝트'} />
        <Card link={'/skills'} src={Profile03} label={'스킬'} />
        <Card link={'/certifications'} src={Profile04} label={'인증'} />
      </div>
    </div>
  );
}

function Card({
  src,
  label,
  link,
}: {
  src: StaticImport;
  label: string;
  link: string;
}) {
  return (
    <Link
      href={link}
      className={
        'flex min-h-[84px] min-w-[84px] flex-1 flex-col gap-3 sm:max-w-[160px]'
      }
    >
      <div
        className={
          'relative overflow-hidden rounded-xl pt-[85%] hover:outline-4 hover:outline-white'
        }
      >
        <Image
          src={src}
          alt={'profile01'}
          className={'absolute top-0 h-full object-cover'}
          priority
          loading="lazy"
        />
      </div>
      <p className={'text-center text-lg font-semibold'}>{label}</p>
    </Link>
  );
}

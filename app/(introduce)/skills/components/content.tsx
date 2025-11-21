import React, { ReactElement } from 'react';

import { TypeSkill } from '@/data/skills';

export function Content({ title, data }: { data: TypeSkill[]; title: string }) {
  return (
    <div className={'flex w-full flex-col items-center gap-4'}>
      <ContentTitle label={title} />
      <div
        className={
          'grid w-full grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-5'
        }
      >
        {data.map((value, i) => (
          <ContentItem
            key={i}
            icon={value.icon}
            title={value.title}
            description={value.description}
          />
        ))}
      </div>
    </div>
  );
}

function ContentTitle({ label }: { label: string }) {
  return (
    <div
      style={{ animationIterationCount: 1 }}
      className={
        'fade-in-0 max-w-fit animate-[fadeSlideIn_0.8s_ease_forwards] border-b-2 border-red-500 pb-1 text-3xl font-semibold opacity-0 transition-all delay-800 duration-800'
      }
    >
      {label}
    </div>
  );
}

function ContentItem({
  title,
  description,
  icon,
}: {
  icon: string | ReactElement;
  title: string;
  description: string;
}) {
  return (
    <div
      className={
        'flex cursor-pointer flex-col items-center rounded-lg bg-[#1e1e1e] p-5 shadow-[0_4px_10px_#0000004d] hover:scale-105 hover:shadow-[0_8px_20px_#ff000080]'
      }
    >
      <div className={'mb-2'}>{icon}</div>
      <div className={'flex py-3 text-xl font-semibold'}>
        <LetterReveal text={title} />
      </div>
      <p className={'text-muted-foreground pb-3 text-center text-sm'}>
        {description}
      </p>
    </div>
  );
}

function LetterReveal({
  text,
  delay = 50,
}: {
  text: string;
  delay?: number; // 한 글자마다 추가되는 지연시간(ms)
}) {
  const letters = [...text];
  return (
    <>
      {letters.map((char, i) => (
        <p
          key={i}
          className="animate-[fadeSlideIn.5s_ease-out_forwards] opacity-0"
          style={{
            animationDelay: `${i * delay}ms`,
            animationIterationCount: 1,
          }}
        >
          {char}
        </p>
      ))}
    </>
  );
}

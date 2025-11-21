import React from 'react';

import { Content } from '@/app/(introduce)/skills/components/content';
import { backend, cloud, db, frontend, tools } from '@/data/skills';

export default function SkillPage() {
  return (
    <div className={'flex h-full flex-1 justify-center px-10 pt-[20px]'}>
      <div className={'flex w-[970px] flex-col gap-[50px]'}>
        <Content data={frontend} title={'Frontend'} />
        <Content data={backend} title={'Backend'} />
        <Content data={cloud} title={'Cloud & DevOps'} />
        <Content data={db} title={'Databases & ORM'} />
        <Content data={tools} title={'Tools'} />
        <div className={'pb-[50px]'} />
      </div>
    </div>
  );
}

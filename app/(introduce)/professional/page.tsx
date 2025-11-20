import React from 'react';
import { Github, IconSolidUser } from '@/components/assets';
import { ExternalLinkIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
export default function ProfessionalPage() {
  return (
    <div className={'flex h-full flex-1 justify-center pt-[20px] lg:px-10'}>
      <div className={'flex w-[1200px] flex-col items-center gap-4'}>
        <ContentTitle label={'⏱️ 타임라인'} />
        <div className="relative flex h-full w-full flex-col gap-4 px-4 pt-10 before:absolute before:top-0 before:left-6 before:h-[calc(100%+25px)] before:w-[4px] before:-translate-x-1/2 before:bg-zinc-300 lg:before:left-1/2">
          <div className="relative z-10 flex w-full flex-col items-start">
            <div
              style={{ animationIterationCount: 1 }}
              className={
                'fade-in-0 absolute left-2 flex h-10 w-10 -translate-x-1/2 animate-[cdBounce1.6s] items-center justify-center rounded-full bg-blue-500 outline-4 outline-white lg:left-1/2 lg:h-15 lg:w-15'
              }
            >
              <IconSolidUser className="size-5 lg:size-6" />
            </div>
            <div
              className={
                'relative ml-13 animate-[cdBounceInverse2_.6s] rounded-lg bg-blue-200 p-[1.5rem] hover:scale-[1.02] lg:ml-0 lg:w-[44%] lg:animate-[cdBounce2_.6s]'
              }
            >
              <span
                className={
                  'absolute top-[20px] left-[-6px] h-3 w-3 rotate-45 bg-blue-200 lg:left-[calc(100%-6px)]'
                }
              />
              <div className={'flex flex-col text-black'}>
                <h3 className={'m-0 text-lg font-semibold'}>
                  FullStack Developer 🖥️
                </h3>
                <p className={'mb-2 font-semibold'}>박재연</p>
                <p className={'text-sm'}>
                  저는 1년 8개월 차 풀스택 개발자입니다. Java로 프로그램 공부를
                  자 시작했지만 스타트업에 들어가서{' '}
                  <span className={'font-semibold'}>
                    사용자와 직접 맞닿는 화면을 구현하는 일에 매력을 느꼈고
                    AI시대에 양쪽다 하는게 메리트가 있다고 생각해 현재는 프론트
                    개발은 NextJS, 백엔드 개발은 NestJS + PostgreSQL
                  </span>
                  을 주력으로 삼고 있습니다. 새로운 기술을 배우고 실무에 빠르게
                  적용하는 것을 즐깁니다. 스타트업 환경에서 다양한 프로젝트를
                  경험하며 문제 해결력을 키웠습니다.{' '}
                  <span className={'font-semibold'}>
                    데이터 기반으로 더 나은 사용자 경험을 만드는 데 집중하고
                    싶습니다.
                  </span>
                </p>
              </div>
              <div
                className={
                  'lg:text-muted-foreground top-[6px] left-[128%] mt-3 flex w-[44%] gap-2 text-black lg:absolute lg:mt-0'
                }
              >
                <Button
                  variant={'secondary'}
                  className={'flex items-center gap-1 font-semibold'}
                >
                  <Github />
                  깃허브
                </Button>
                <Button
                  variant={'secondary'}
                  className={'flex items-center gap-2 font-semibold'}
                >
                  <ExternalLinkIcon className={'h-4 w-4 text-red-600'} />
                  이력서
                </Button>
              </div>
            </div>
          </div>
          <div className="relative z-10 flex w-full flex-col items-start">
            <div
              style={{ animationIterationCount: 1 }}
              className={
                'fade-in-0 absolute left-2 flex h-10 w-10 -translate-x-1/2 animate-[cdBounce1.6s] items-center justify-center rounded-full bg-blue-500 outline-4 outline-white lg:left-1/2 lg:h-15 lg:w-15'
              }
            >
              <IconSolidUser className="size-5 lg:size-6" />
            </div>
            <div
              className={
                'relative ml-13 animate-[cdBounceInverse2_.6s] rounded-lg bg-blue-200 p-[1.5rem] hover:scale-[1.02] lg:ml-0 lg:w-[44%] lg:animate-[cdBounce2_.6s]'
              }
            >
              <span
                className={
                  'absolute top-[20px] left-[-6px] h-3 w-3 rotate-45 bg-blue-200 lg:left-[calc(100%-6px)]'
                }
              />
              <div className={'flex flex-col text-black'}>
                <h3 className={'m-0 text-lg font-semibold'}>
                  FullStack Developer 🖥️
                </h3>
                <p className={'mb-2 font-semibold'}>박재연</p>
                <p className={'text-sm'}>
                  저는 1년 8개월 차 풀스택 개발자입니다. Java로 프로그램 공부를
                  자 시작했지만 스타트업에 들어가서{' '}
                  <span className={'font-semibold'}>
                    사용자와 직접 맞닿는 화면을 구현하는 일에 매력을 느꼈고
                    AI시대에 양쪽다 하는게 메리트가 있다고 생각해 현재는 프론트
                    개발은 NextJS, 백엔드 개발은 NestJS + PostgreSQL
                  </span>
                  을 주력으로 삼고 있습니다. 새로운 기술을 배우고 실무에 빠르게
                  적용하는 것을 즐깁니다. 스타트업 환경에서 다양한 프로젝트를
                  경험하며 문제 해결력을 키웠습니다.{' '}
                  <span className={'font-semibold'}>
                    데이터 기반으로 더 나은 사용자 경험을 만드는 데 집중하고
                    싶습니다.
                  </span>
                </p>
              </div>
              <div
                className={
                  'lg:text-muted-foreground top-[6px] left-[128%] mt-3 flex w-[44%] gap-2 text-black lg:absolute lg:mt-0'
                }
              >
                <Button
                  variant={'secondary'}
                  className={'flex items-center gap-1 font-semibold'}
                >
                  <Github />
                  깃허브
                </Button>
                <Button
                  variant={'secondary'}
                  className={'flex items-center gap-2 font-semibold'}
                >
                  <ExternalLinkIcon className={'h-4 w-4 text-red-600'} />
                  이력서
                </Button>
              </div>
            </div>
          </div>{' '}
          <div className="relative z-10 flex w-full flex-col items-start">
            <div
              style={{ animationIterationCount: 1 }}
              className={
                'fade-in-0 absolute left-2 flex h-10 w-10 -translate-x-1/2 animate-[cdBounce1.6s] items-center justify-center rounded-full bg-blue-500 outline-4 outline-white lg:left-1/2 lg:h-15 lg:w-15'
              }
            >
              <IconSolidUser className="size-5 lg:size-6" />
            </div>
            <div
              className={
                'relative ml-13 animate-[cdBounceInverse2_.6s] rounded-lg bg-blue-200 p-[1.5rem] hover:scale-[1.02] lg:ml-0 lg:w-[44%] lg:animate-[cdBounce2_.6s]'
              }
            >
              <span
                className={
                  'absolute top-[20px] left-[-6px] h-3 w-3 rotate-45 bg-blue-200 lg:left-[calc(100%-6px)]'
                }
              />
              <div className={'flex flex-col text-black'}>
                <h3 className={'m-0 text-lg font-semibold'}>
                  FullStack Developer 🖥️
                </h3>
                <p className={'mb-2 font-semibold'}>박재연</p>
                <p className={'text-sm'}>
                  저는 1년 8개월 차 풀스택 개발자입니다. Java로 프로그램 공부를
                  자 시작했지만 스타트업에 들어가서{' '}
                  <span className={'font-semibold'}>
                    사용자와 직접 맞닿는 화면을 구현하는 일에 매력을 느꼈고
                    AI시대에 양쪽다 하는게 메리트가 있다고 생각해 현재는 프론트
                    개발은 NextJS, 백엔드 개발은 NestJS + PostgreSQL
                  </span>
                  을 주력으로 삼고 있습니다. 새로운 기술을 배우고 실무에 빠르게
                  적용하는 것을 즐깁니다. 스타트업 환경에서 다양한 프로젝트를
                  경험하며 문제 해결력을 키웠습니다.{' '}
                  <span className={'font-semibold'}>
                    데이터 기반으로 더 나은 사용자 경험을 만드는 데 집중하고
                    싶습니다.
                  </span>
                </p>
              </div>
              <div
                className={
                  'lg:text-muted-foreground top-[6px] left-[128%] mt-3 flex w-[44%] gap-2 text-black lg:absolute lg:mt-0'
                }
              >
                <Button
                  variant={'secondary'}
                  className={'flex items-center gap-1 font-semibold'}
                >
                  <Github />
                  깃허브
                </Button>
                <Button
                  variant={'secondary'}
                  className={'flex items-center gap-2 font-semibold'}
                >
                  <ExternalLinkIcon className={'h-4 w-4 text-red-600'} />
                  이력서
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContentTitle({ label }: { label: string }) {
  return (
    <div
      style={{ animationIterationCount: 1 }}
      className={
        'fade-in-0 max-w-fit animate-[fadeSlideIn_0.8s_ease_forwards] py-10 text-4xl font-semibold opacity-0 transition-all delay-200 duration-800'
      }
    >
      {label}
    </div>
  );
}

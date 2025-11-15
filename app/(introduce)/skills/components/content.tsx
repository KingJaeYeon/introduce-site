import React, {ReactElement} from "react";
import {DataType} from "@/app/(introduce)/skills/page";

export function Content({title, data}: { data: DataType[], title: string }) {
    return <div className={'w-full flex flex-col items-center gap-4'}>
        <ContentTitle label={title}/>
        <div className={'grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-5 w-full'}>
            {data.map((value, i) => (
                <ContentItem key={i} icon={value.icon} title={value.title}
                             description={value.description}/>))}
        </div>
    </div>
}

function ContentTitle({label}: { label: string }) {
    return (
        <div
            style={{animationIterationCount: 1}}
            className={'max-w-fit transition-all delay-800 opacity-0 animate-[fadeSlideIn_0.8s_ease_forwards] fade-in-0 duration-800 pb-1 border-b-2 border-red-500 text-3xl font-semibold'}>
            {label}
        </div>
    )
}

function ContentItem({title, description, icon}: {
    icon: string | ReactElement,
    title: string,
    description: string
}) {
    return (
        <div
            className={'cursor-pointer shadow-[0_4px_10px_#0000004d] hover:scale-105 hover:shadow-[0_8px_20px_#ff000080] flex flex-col bg-[#1e1e1e] p-5 rounded-lg items-center'}>
            <div className={'mb-2'}>
                {icon}
            </div>
            <div className={'font-semibold text-xl py-3 flex'}>
                <LetterReveal text={title}/>
            </div>
            <p className={'text-sm text-muted-foreground pb-3 text-center'}>{description}</p>
        </div>
    )
}

function LetterReveal({text, delay = 50}: {
    text: string;
    delay?: number; // 한 글자마다 추가되는 지연시간(ms)
}) {
    const letters = [...text];
    return (
        <>
            {letters.map((char, i) => (
                <p
                    key={i}
                    className="opacity-0 animate-[fadeSlideIn.5s_ease-out_forwards]"
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
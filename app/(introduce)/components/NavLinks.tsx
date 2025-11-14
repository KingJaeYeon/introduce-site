'use client'

import {usePathname} from 'next/navigation'
import Link from 'next/link'
import {cn} from "@/lib/utils";

export function NavLink({label, to}: { label: string, to: string }) {
    const pathname = usePathname()

    return (
        <Link className={cn('hover:text-red-600 duration-200', to === pathname &&  'text-red-600')} href={to}>
            {label}
        </Link>
    )
}
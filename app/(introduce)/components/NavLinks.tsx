'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function NavLink({ label, to }: { label: string; to: string }) {
  const pathname = usePathname();

  return (
    <Link
      prefetch={true}
      className={cn(
        'duration-200 hover:text-red-600',
        to === pathname && 'text-red-600',
      )}
      href={to}
    >
      {label}
    </Link>
  );
}

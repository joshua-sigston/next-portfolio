'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface Props {
  url: string;
  title: string;
}

export default function NavLink({ url, title }: Props) {
  const pathName = usePathname();

  return (
    <Link
      href={url}
      className={`rounded p-1 ${pathName === url && 'bg-black text-white'}`}
    >
      {title}
    </Link>
  );
}

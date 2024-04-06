'use client';
import React from 'react';
import Image from 'next/image';

export default function SocialLinks() {
  return (
    <div className="flex flex-col md:flex-row gap-5">
      <Image src="/linkedin.png" alt="" width={30} height={24} />
      <Image src="/github.png" alt="" width={30} height={24} />
      <Image src="/instagram.png" alt="" width={30} height={24} />
    </div>
  );
}

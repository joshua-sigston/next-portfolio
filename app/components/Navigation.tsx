'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';

export default function Navigation() {
  const links = [
    { url: '/', title: 'Home' },
    { url: '/about', title: 'About' },
    { url: '/portfolio', title: 'Portfolio' },
    { url: '/contact', title: 'Contact' },
  ];

  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header className="p-3 max-w-[900px] mx-auto">
      <nav className="flex justify-between links-center">
        <div className="md:hidden">
          <Link href="/">
            <span className="text-white bg-black px-1">J</span>
            <span className="bg-white text-black">Sigston</span>
          </Link>
        </div>
        <div className="hidden md:flex gap-5">
          {links.map((link, index) => (
            <Link
              href={link.url}
              key={index}
              onClick={toggleMenu}
              className="text-black"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <div className="space-y-2 md:hidden" onClick={toggleMenu}>
          <div className="h-[5px] w-[40px] bg-black rounded-lg"></div>
          <div className="h-[5px] w-[40px] bg-black rounded-lg"></div>
          <div className="h-[5px] w-[40px] bg-black rounded-lg"></div>
        </div>
        <div className="hidden md:flex gap-5">
          <Image src="/linkedin.png" alt="" width={24} height={24} />
          <Image src="/github.png" alt="" width={24} height={24} />
          <Image src="/instagram.png" alt="" width={24} height={24} />
        </div>
        {menu && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-[#0B1623] text-white text-4xl flex flex-col items-center justify-center gap-10">
            {links.map((link, index) => (
              <Link href={link.url} key={index} onClick={toggleMenu}>
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}

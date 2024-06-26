'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import NavLink from './NavLink';
import SocialLinks from './SocialLinks';
import Hamburger from './Hamburger';
import { delay, motion } from 'framer-motion';
import MobileLinks from './MobileLinks';

const links = [
  { url: '/', title: 'Home' },
  { url: '/about', title: 'About' },
  { url: '/portfolio', title: 'Portfolio' },
  { url: '/contact', title: 'Contact' },
];

export default function Navigation() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header className="p-3 max-w-[1200px] mx-auto">
      <nav className="flex justify-between links-center">
        <div className="md:hidden">
          <Link href="/">
            <span className="text-white bg-black px-1">J</span>
            <span className="bg-white text-black">Sigston</span>
          </Link>
        </div>
        <div className="hidden md:flex gap-5">
          {links.map((link, index) => (
            <NavLink url={link.url} title={link.title} key={index} />
          ))}
        </div>
        <Hamburger toggleMenu={toggleMenu} menu={menu} />
        <div className="hidden md:flex">
          <SocialLinks />
        </div>
        {menu && <MobileLinks links={links} toggleMenu={toggleMenu} />}
      </nav>
    </header>
  );
}

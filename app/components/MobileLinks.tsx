'use client';
import React from 'react';
import { delay, motion } from 'framer-motion';
import { menuVariants, linkVariants } from '../variants';
import Link from 'next/link';

interface Link {
  url: string;
  title: string;
}

interface Props {
  links: Link[];
  toggleMenu: () => void;
}

export default function MobileLinks({ links, toggleMenu }: Props) {
  return (
    <motion.div
      className="absolute top-0 left-0 w-screen h-screen bg-[#0B1623] text-white text-4xl flex flex-col items-center justify-center gap-10"
      variants={menuVariants}
      initial="closed"
      animate="open"
    >
      {links.map((link, index) => (
        <motion.div variants={linkVariants}>
          <Link href={link.url} key={index} onClick={toggleMenu}>
            {link.title}
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}

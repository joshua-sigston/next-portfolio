'use client';
import React from 'react';
import { topPatty, centerPatty, bottomPatty } from '../variants';
import { delay, motion } from 'framer-motion';

interface Props {
  toggleMenu: () => void;
  menu: boolean;
}

export default function Hamburger({ toggleMenu, menu }: Props) {
  return (
    <div className="space-y-2 md:hidden cursor-pointer" onClick={toggleMenu}>
      <motion.div
        className="h-[5px] w-[40px] bg-black rounded-lg"
        variants={topPatty}
        animate={!menu ? 'closed' : 'open'}
      ></motion.div>
      <motion.div
        className="h-[5px] w-[40px] bg-black rounded-lg"
        variants={centerPatty}
        animate={!menu ? 'closed' : 'open'}
      ></motion.div>
      <motion.div
        className="h-[5px] w-[40px] bg-black rounded-lg"
        variants={bottomPatty}
        animate={!menu ? 'closed' : 'open'}
      ></motion.div>
    </div>
  );
}

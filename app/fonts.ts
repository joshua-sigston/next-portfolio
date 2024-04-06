import { Ubuntu, Manrope, Tilt_Neon } from "next/font/google";

export const ubuntu = Ubuntu({
  weight: '500',
  subsets: ['latin'],
  display: 'swap',
  variable: '--ubuntu-font',
});

export const manrope = Manrope({
  weight: '300',
  subsets: ['latin'],
  display: 'swap',
  variable: '--manrope-font',
});

export const tilt_neon = Tilt_Neon({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--tilt_neon-font',
});
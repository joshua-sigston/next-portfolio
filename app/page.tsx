import Image from 'next/image';
import Link from 'next/link';
import SocialLinks from './components/SocialLinks';

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row gap-3 min-h-[90vh] max-w-[1200px] mx-auto">
      <div className="flex-1 flex justify-center items-center min-[500px]:gap-x-[5rem]">
        <Image
          src="/hero.png"
          alt="portfolio image"
          width={300}
          height={374}
          className="h-auto md:w-full"
          sizes="(max-width: 380px) 300px, calc(80vw + 12px)"
        />
        <div className="hidden min-[500px]:block min-[768px]:hidden">
          <SocialLinks />
        </div>
      </div>
      <div className="flex flex-col justify-center gap-3 flex-1">
        <h1 className="text-3xl md:text-6xl font-bold">
          Welcome to my digital canvas. Crafting Digital Experiences.
        </h1>
        <p className="md:text-xl">
          With a keen eye for aesthetics and a mastery of code, my portfolio
          showcases a diverse collection of projects that reflect my commitment
          to excellence.
        </p>
      </div>
    </main>
  );
}

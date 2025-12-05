'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from '@/app/modules/home.module.css';

const links = [
  { name: 'Home', href: '/home' },
  { name: 'Cakes', href: '/products' },
  { name: 'Services', href: 'https://www.facebook.com/people/Cake-by-Daisy/100091791484158/' },
  { name: 'About', href: '/about' },
];

export default function BarNav() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleBarNav() {
    setIsOpen(!isOpen);
  }

  return (
  <>

  <nav>
    <button onClick={toggleBarNav} className="fixed right-0 top-6 z-40 m-3
      text-xl bg-white dark:bg-black rounded opacity-50 text-black
      dark:text-white p-2"
    >
      {isOpen ? '✖' : '☰'}
    </button>

    {isOpen && (
    <div>
      <div className={`${styles.gradientColor} w-full z-10 justify-between
        flex p-1 text-white text-sm md:text-lg fixed top-0`}
      >
        <Link href="https://www.facebook.com/people/Cake-by-Daisy/100091791484158/" target="_blank">
          Cake by Daisy
        </Link>
        <Link href="https://www.facebook.com/tranghy7199" target="_blank">
          Homemade Baker
        </Link>
      </div>

      <div className="grid md:flex justify-center fixed top-7 md:top-9 z-30
        bg-white dark:bg-black w-full h-full md:h-18 overflow-auto"
      >
        {links.map((link) => {
          return (
            <Link
              key={link.name}
              className={`bg-black text-white dark:bg-white dark:text-black
                text-center rounded-lg m-3 p-2 w-32 h-10 hover:text-white
                ${styles.color}`}
              href={link.href}
              onClick={toggleBarNav}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </div>
    )}
  </nav>

  </>
  );
}

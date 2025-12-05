import Link from 'next/link';
import styles from '@/app/modules/home.module.css';

export default function Header() {
  return (
  <>

  <header>
    <section className={`${styles.gradientColor} w-full z-10 justify-between
      flex p-1 text-white text-sm md:text-lg`}
    >
      <Link href="https://www.facebook.com/people/Cake-by-Daisy/100091791484158/" target="_blank">
        Cake by Daisy
      </Link>
      <Link href="/home" className="hidden md:inline">
        Home
      </Link>
      <Link href="/products" className="hidden md:inline">
        Cakes
      </Link>
      <Link href="https://www.facebook.com/people/Cake-by-Daisy/100091791484158/" className="hidden md:inline">
        Services
      </Link>
      <Link href="/about" className="hidden md:inline">
        About
      </Link>
      <Link href="https://www.facebook.com/tranghy7199" target="_blank">
        Homemade Baker
      </Link>
    </section>
  </header>

  </>
  );
}

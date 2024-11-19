import Link from 'next/link';
import styles from '@/app/utils/header.module.css';

export default function Header() {
  return (
    <div className={`${styles.headerGradient} ${styles.headerPadding}`}>
      <div>
        <header>
          <div className="flex flex-row justify-between text-white">
            <Link href="https://www.facebook.com/people/Cake-by-Daisy/100091791484158/">FB: Cake by Daisy</Link>
            <Link href="https://www.facebook.com/tranghy7199">FB: Homemade Baker</Link>
            <Link href="/">Sign in</Link>
          </div>
        </header>
      </div>
    </div>
  );
}

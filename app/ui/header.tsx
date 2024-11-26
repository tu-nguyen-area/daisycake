import Link from 'next/link';
import styles from '@/app/utils/header.module.css';
import Clock from '@/app/ui/clock';

export default function Header() {
  return (
  <>

    <div className={`${styles.headerGradient} ${styles.headerPadding}`}>
      <div>
        <header>
          <div className="flex flex-row justify-between text-white">
            <Link href="https://www.facebook.com/people/Cake-by-Daisy/100091791484158/">Cake by Daisy</Link>
            <Clock />
            <Link href="https://www.facebook.com/tranghy7199">Homemade Baker</Link>
          </div>
        </header>
      </div>
    </div>

  </>
  );
}

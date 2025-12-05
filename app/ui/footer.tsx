import Link from 'next/link';
import styles from '@/app/modules/home.module.css';

export default function Footer() {
  const year = new Date();

  return (
  <>

  <footer className={`${styles.gradientColor} flex justify-center p-3 md:p-6
  text-white text-sm md:text-base`}
  >
    <section>
      <div>
        <p>Call: +84 384 216 280 |
          <Link href="https://www.instagram.com/cakebydaisy/" target="_blank"> Instagram: Cake by Daisy |</Link>
          <Link href="https://www.facebook.com/people/Cake-by-Daisy/100091791484158/" target="_blank"> Facebook: Cake by Daisy |</Link>
          <Link href="https://www.facebook.com/tranghy7199" target="_blank"> Homemade Baker</Link>
        </p>
      </div>
      <p>Privacy Policy | Terms of Use | Sales and Refunds</p>
      <p>&#169; {year.getFullYear()} Cake by Daisy. All rights reserved</p>
    </section>
  </footer>

  </>
  );
}

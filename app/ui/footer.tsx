import Link from 'next/link';
import styles from '@/app/utils/footer.module.css';

export default function Footer() {
  return (
    <>

      <div className={`${styles.footerFlex} ${styles.footerText} ${styles.footerPadding} ${styles.footerGradient}`}>
        <footer>
          <div>
            <p>Call: +84 384 216 280 |
              <Link href="https://www.instagram.com/cakebydaisy/"> Instagram: Cake by Daisy |</Link>
              <Link href="https://www.facebook.com/people/Cake-by-Daisy/100091791484158/"> Facebook: Cake by Daisy |</Link>
              <Link href="https://www.facebook.com/tranghy7199"> Homemade Baker</Link>
            </p>
            <p>Privacy Policy | Terms of Use | Sales and Refunds</p>
            <p>&copy; 2024 Cake by Daisy. All rights reserved.</p>
          </div>
        </footer>
      </div>

    </>
  );
}

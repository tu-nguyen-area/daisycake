import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <div className="flex justify-center bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white p-6">
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

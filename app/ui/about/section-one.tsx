import Image from 'next/image';
import Link from 'next/link';
import styles from '@/app/modules/home.module.css';

export default function SectionOne() {
  return (
  <>

  <section className="flex justify-center py-12 p-3">
    <div className="max-w-7xl">
      <h1 className="text-5xl font-bold p-3">
        <span className={`${styles.gradientColor} bg-clip-text text-center
          text-transparent w-fit`}
        >
          Về chúng tôi
        </span>
      </h1>
      <p className="text-2xl p-3 font-bold">Chúng tôi là cửa hàng bánh ngọt
        online một thành viên có trụ sở đặt tại Hà Nội.
      </p>

      <div className="p-3">
        <p className="text-xl">
          <Link href="https://www.instagram.com/cakebydaisy/" target="_blank"> Instagram: Cake by Daisy</Link>
        </p>
        <p className="text-xl">
          <Link href="https://www.facebook.com/people/Cake-by-Daisy/100091791484158/" target="_blank">Facebook: Cake by Daisy</Link>
        </p>
        <p className="text-xl">
          <Link href="https://www.facebook.com/tranghy7199" target="_blank">Facebook: Homemade Baker</Link>
        </p>
      </div>

      <Image
        className="rounded-xl border-3 border-sky-500"
        src="/bg1.png"
        width={4000}
        height={2}
        alt="background"
      />
    </div>
  </section>

  </>
  );
}

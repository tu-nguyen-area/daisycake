import Image from 'next/image';
import Header from '@/app/ui/header';
import SideNav from '@/app/ui/side-nav';
import Footer from '@/app/ui/footer';

export default function Page() {
  return (
  <>

  <Header />
  <SideNav />
  <div>
    <div>
      <Image
        src="/cake1.png"
        width={200}
        height={2}
        alt="image"
      />
      <div>
        <button>
          <Image
            src="/cake2.png"
            width={200}
            height={2}
            alt="image"
          />
        </button>
      </div>
    </div>
    <div>
      <h1>Cake name</h1>
      <div>
        <p>Cake code</p>
        <p>Cake introduction</p>
      </div>
    </div>
  </div>
  <Footer />

  </>
  );
}

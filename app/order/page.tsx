import SideNav from '@/app/ui/side-nav';
import Header from '@/app/ui/header';
import Footer from '@/app/ui/footer';

export default function Page() {
  return (
    <>

      <div>
        <Header />
        <SideNav />
      </div>

      <div>
        <Footer />
      </div>

    </>
  );
}

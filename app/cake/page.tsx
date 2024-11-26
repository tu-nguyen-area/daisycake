import SideNav from '@/app/ui/side-nav';
import Header from '@/app/ui/header';
import ListCake from '@/app/ui/list-cake';
import Footer from '@/app/ui/footer';
import SlideLine from '@/app/ui/slide-line';

export default function Page() {
  return (
    <>

      <div>
        <Header />
        <SideNav />
      </div>
      <div className="flex animate-slip">
        <SlideLine />
      </div>
      <div>
        <div>
          <ListCake />
        </div>
      </div>

      <div>
        <Footer />
      </div>

    </>
  );
}

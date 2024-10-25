import SideNav from '@/app/ui/side-nav';
import Header from '@/app/ui/header';
import SlideShow from '@/app/ui/slide-show';
import SlideLine from '@/app/ui/slide-line';
import ListCake from '@/app/ui/list-cake';
import Footer from '@/app/ui/footer';

export default function Page() {
  return (
    <>

      <div>
        <Header />
        <SideNav />
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

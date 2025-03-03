import BarNav from '@/app/ui/bar-nav';
import Header from '@/app/ui/header';
import ListCake from '@/app/ui/list-cake';
import Footer from '@/app/ui/footer';
import SlideLine from '@/app/ui/slide-line';

export default function Page() {
  return (
    <>

    <div>
      <Header />
      <BarNav />
    </div>
    <div className="pt-12 flex animate-slip">
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

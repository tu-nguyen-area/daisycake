import Image from 'next/image';
import SideNav from '@/app/ui/side-nav';
import Header from '@/app/ui/header';
import SlideLine from '@/app/ui/slide-line';
import SlideShow from '@/app/ui/slide-show';
import Footer from '@/app/ui/footer';

export default function Page() {

  return (
    <>

      <div>
        <Header />
        <SideNav />
        <SlideShow />
      </div>

      <main>
        <div>

          <section className="">
            <div className="flex justify-center bg-gradient-to-r from-purple-500 to-pink-500 p-1 text-white text-xl">
              <p>Best Selling</p>
            </div>
            <div className="flex flex-col md:flex-row justify-around justify-center pb-12 items-center">
              <div className="">
                <Image className="rounded-xl w-80 h-64 border-4 border-x-fuchsia-500 border-y-fuchsia-500 hover:md:scale-110 transition-all"
                  src="/cake1.png"
                  width={300}
                  height={0}
                  alt="cake"
                />
                <div className="text-center text-fuchsia-500">
                  <label>Cake 001</label>
                </div>
              </div>
              <div>
                <Image className="rounded-xl w-80 h-64 border-4 border-x-fuchsia-500 border-y-fuchsia-500 hover:md:scale-110 transition-all"
                  src="/cake2.png"
                  width={300}
                  height={0}
                  alt="cake"
                />
                <div className="text-center text-fuchsia-500">
                  <label>Cake 002</label>
                </div>
              </div>
              <div>
                <Image className="rounded-xl w-80 h-64 border-4 border-x-fuchsia-500 border-y-fuchsia-500 hover:md:scale-110 transition-all"
                  src="/cake3.png"
                  width={300}
                  height={0}
                  alt="cake"
                />
                <div className="text-center text-fuchsia-500">
                  <label>Cake 003</label>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="flex justify-center bg-gradient-to-r from-purple-500 to-pink-500 p-1 text-white text-xl">
              <p>Most Liked</p>
            </div>
            <div className="flex flex-col md:flex-row justify-around justify-center pb-12 items-center">
              <div className="">
                <Image className="rounded-xl w-80 h-64 border-4 border-x-fuchsia-500 border-y-fuchsia-500 hover:md:scale-110 transition-all"
                  src="/cake4.png"
                  width={300}
                  height={0}
                  alt="cake"
                />
                <div className="text-center text-fuchsia-500">
                  <label>Cake 004</label>
                </div>
              </div>
              <div>
                <Image className="rounded-xl w-80 h-64 border-4 border-x-fuchsia-500 border-y-fuchsia-500 hover:md:scale-110 transition-all"
                  src="/cake5.png"
                  width={300}
                  height={0}
                  alt="cake"
                />
                <div className="text-center text-fuchsia-500">
                  <label>Cake 005</label>
                </div>
              </div>
              <div>
                <Image className="rounded-xl w-80 h-64 border-4 border-x-fuchsia-500 border-y-fuchsia-500 hover:md:scale-110 transition-all"
                  src="/cake6.png"
                  width={300}
                  height={0}
                  alt="cake"
                />
                <div className="text-center text-fuchsia-500">
                  <label>Cake 006</label>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className=" flex justify-center bg-gradient-to-r from-purple-500 to-pink-500 p-1 text-white text-xl">
              <p>Recommended</p>
            </div>
            <div className="flex flex-col md:flex-row justify-around justify-center pb-12 items-center">
              <div>
                <Image className="rounded-xl w-80 h-64 border-4 border-x-fuchsia-500 border-y-fuchsia-500 hover:md:scale-110 transition-all"
                  src="/cake1.png"
                  width={300}
                  height={0}
                  alt="cake"
                />
                <div className="text-center text-fuchsia-500">
                  <label>Cake 001</label>
                </div>
              </div>
              <div>
                <Image className="rounded-xl w-80 h-64 border-4 border-x-fuchsia-500 border-y-fuchsia-500 hover:md:scale-110 transition-all"
                  src="/cake2.png"
                  width={300}
                  height={0}
                  alt="cake"
                />
                <div className="text-center text-fuchsia-500">
                  <label>Cake 002</label>
                </div>
              </div>
              <div>
                <Image className="rounded-xl w-80 h-64 border-4 border-x-fuchsia-500 border-y-fuchsia-500 hover:md:scale-110 transition-all"
                  src="/cake3.png"
                  width={300}
                  height={0}
                  alt="cake"
                />
                <div className="text-center text-fuchsia-500">
                  <label>Cake 003</label>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>

      <div>
        <section>
          <div className=" flex justify-center bg-gradient-to-r from-purple-500 to-pink-500 p-1 text-white text-xl">
            <p>Menu</p>
          </div>
          <div className="flex animate-slip">
            <SlideLine />
          </div>
          <div className="flex animate-sliprev">
            <SlideLine />
          </div>
          <div className="flex animate-slipslow">
            <SlideLine />
          </div>
        </section>

        <section>
          
        </section>
      </div>

      <div>
        <Footer />
      </div>

    </>
  );
}

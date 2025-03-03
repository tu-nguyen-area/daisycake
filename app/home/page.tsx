import Image from 'next/image';
import BarNav from '@/app/ui/bar-nav';
import Header from '@/app/ui/header';
import SlideLine from '@/app/ui/slide-line';
import SlideShow from '@/app/ui/slide-show';
import Footer from '@/app/ui/footer';

export default function Page() {
  const cakeB = [
    { id: 1, src: "/cake1.png", code: "Tiramisu" },
    { id: 2, src: "/cake2.png", code: "Tiramisu craquelin choux" },
    { id: 3, src: "/cake3.png", code: "Velvet" }
  ];

  const cakeL = [
    { id: 4, src: "/cake4.png", code: "Berry mango sponge" },
    { id: 5, src: "/cake5.png", code: "Bento cake" },
    { id: 6, src: "/cake6.png", code: "Salted egg sponge" }
  ];

  return (
    <>

      <div>
        <Header />
        <BarNav />
        <SlideShow />
      </div>

      <main>
        <div>
          <section className="">
            <div className="flex justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1 text-white text-xl">
              <p>Best Selling</p>
            </div>
            <div className="flex flex-col md:flex-row justify-around justify-center pb-12 items-center">
              {cakeB.map((cake) => {
                return (
                  <div key={cake.id} className="border-4 border-x-fuchsia-500 border-y-fuchsia-500 rounded-xl hover:md:scale-110 transition-all m-2">
                    <Image className="w-80 h-64 border-2 border-x-fuchsia-500 border-y-fuchsia-500"
                      src={cake.src}
                      width={300}
                      height={2}
                      alt={cake.code}
                    />
                    <div className="text-center text-fuchsia-500">
                      <label>{cake.code}</label>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section>
            <div className="flex justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1 text-white text-xl">
              <p>Most Liked</p>
            </div>
            <div className="flex flex-col md:flex-row justify-around justify-center pb-12 items-center">
              {cakeL.map((cake) => {
                return (
                  <div key={cake.id} className="border-4 border-x-fuchsia-500 border-y-fuchsia-500 rounded-xl hover:md:scale-110 transition-all m-2">
                    <Image className="w-80 h-64 border-2 border-x-fuchsia-500 border-y-fuchsia-500"
                      src={cake.src}
                      width={300}
                      height={2}
                      alt={cake.code}
                    />
                    <div className="text-center text-fuchsia-500">
                      <label>{cake.code}</label>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section>
            <div className="flex justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1 text-white text-xl">
              <p>Recommended</p>
            </div>
            <div className="flex flex-col md:flex-row justify-around justify-center pb-12 items-center">
              {cakeB.map((cake) => {
                return (
                  <div key={cake.code} className="border-4 border-x-fuchsia-500 border-y-fuchsia-500 rounded-xl hover:md:scale-110 transition-all m-2">
                    <Image className="w-80 h-64 border-2 border-x-fuchsia-500 border-y-fuchsia-500"
                      src={cake.src}
                      width={300}
                      height={2}
                      alt={cake.code}
                    />
                    <div className="text-center text-fuchsia-500">
                      <label>{cake.code}</label>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

        </div>
      </main>

      <div>
        <section>
          <div className=" flex justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1 text-white text-xl">
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
      </div>

      <div>
        <Footer />
      </div>

    </>
  );
}

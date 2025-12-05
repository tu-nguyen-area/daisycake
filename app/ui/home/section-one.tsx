import Image from 'next/image';
import SlideShow from '@/app/components/slide-show';
import SlideLine from '@/app/components/slide-line';
import styles from '@/app/modules/home.module.css';

const cakeB = [
  { id: 1, src: "/cake1.png", name: "Tiramisu" },
  { id: 2, src: "/cake2.png", name: "Tiramisu craquelin choux" },
  { id: 3, src: "/cake3.png", name: "Velvet" }
];

const cakeL = [
  { id: 4, src: "/cake4.png", name: "Berry mango sponge" },
  { id: 5, src: "/cake5.png", name: "Bento cake" },
  { id: 6, src: "/cake6.png", name: "Salted egg sponge" }
];

export default function SectionOne() {
  return (
  <>

  <section>
    <SlideShow />

    <div className={`${styles.gradientColor} flex justify-center p-1 text-white
      text-2xl`}
    >
      <h1 className="font-bold">Bán chạy nhất</h1>
    </div>
    <div className="flex flex-col md:flex-row justify-around items-center
      pb-12 m-2"
    >
    {cakeB.map((cake) => {
      return (
        <div key={cake.id} className="border-2 border-sky-500 rounded-xl
          hover:md:scale-110 transition-all m-2"
        >
          <Image className="w-80 h-64 border-2 border-sky-500 rounded-xl"
            src={cake.src}
            width={300}
            height={2}
            alt={cake.name}
          />
          <div className="text-center text-sky-500 dark:text-white">
            <h1 className="text-xl">{cake.name}</h1>
          </div>
        </div>
      );
    })}
    </div>

    <div className={`${styles.gradientColor} flex justify-center p-1 text-white
      text-2xl`}
    >
      <h1 className="font-bold">Được yêu thích nhất</h1>
    </div>
    <div className="flex flex-col md:flex-row justify-around items-center
      pb-12 m-2"
    >
    {cakeL.map((cake) => {
      return (
        <div key={cake.id} className="border-2 border-sky-500 rounded-xl
          hover:md:scale-110 transition-all m-2"
        >
          <Image className="w-80 h-64 border-2 border-sky-500 rounded-xl"
            src={cake.src}
            width={300}
            height={2}
            alt={cake.name}
          />
          <div className="text-center text-sky-500 dark:text-white">
            <h1 className="text-xl">{cake.name}</h1>
          </div>
        </div>
      );
    })}
    </div>

    <div className={`${styles.gradientColor} flex justify-center p-1 text-white
      text-2xl`}
    >
      <h1 className="font-bold">Khuyến nghị dành cho bạn</h1>
    </div>
    <div className="flex flex-col md:flex-row justify-around items-center
      pb-12 m-2"
    >
    {cakeB.map((cake) => {
      return (
        <div key={cake.id} className="border-2 border-sky-500 rounded-xl
          hover:md:scale-110 transition-all m-2"
        >
          <Image className="w-80 h-64 border-2 border-sky-500 rounded-xl"
            src={cake.src}
            width={300}
            height={2}
            alt={cake.name}
          />
          <div className="text-center text-sky-500 dark:text-white">
            <h1 className="text-xl">{cake.name}</h1>
          </div>
        </div>
      );
    })}
    </div>

    <div className={`${styles.gradientColor} flex justify-center p-1 text-white
      text-2xl`}
    >
      <h1 className="font-bold">Menu</h1>
    </div>
    <div className={`${styles.slideSlip} flex`}>
      <SlideLine />
    </div>
    <div className={`${styles.slideSliprev} flex`}>
      <SlideLine />
    </div>
    <div className={`${styles.slideSlipSlow} flex`}>
      <SlideLine />
    </div>
  </section>

  </>
  );
}

import Image from 'next/image';
import styles from '@/app/modules/home.module.css';

const listCake = [
  { id: 1, src: "/cake1.png", name: "Tiramisu" },
  { id: 2, src: "/cake2.png", name: "Tiramisu craquelin choux" },
  { id: 3, src: "/cake3.png", name: "Velvet" },
  { id: 4, src: "/cake4.png", name: "Berry mango sponge" },
  { id: 5, src: "/cake5.png", name: "Bento cake" },
  { id: 6, src: "/cake6.png", name: "Salted egg sponge" },
  { id: 7, src: "/cake7.png", name: "Lemon choux" },
  { id: 8, src: "/cake8.png", name: "Overmade" }
];

export default function ProductList() {
  return (
  <>

  <section>
    <div className={`${styles.gradientColor} flex justify-center p-1 text-white
      text-2xl`}
    >
      <h1 className="font-bold">Menu</h1>
    </div>

    <div className="md:grid md:grid-cols-4 md:justify-items-center md:m-3">
    {listCake.map((lcake) => {
      return (
        <div key={lcake.id} className="m-6 rounded-xl border-2 border-sky-500
          hover:md:scale-110 transition-all"
        >
          <Image className="w-80 h-64 border-2 border-sky-500 rounded-xl"
            src={lcake.src}
            width={500}
            height={2}
            alt="Image"
          />
        <div className="text-center text-sky-500 dark:text-white">
          <h1 className="text-xl">{lcake.name}</h1>
        </div>
      </div>
      );
    })}
    </div>
  </section>

  </>
  );
}

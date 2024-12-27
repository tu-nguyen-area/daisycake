import Image from 'next/image';

export default function ListCake() {
  const listCake = [
    { id: 1, src: "/cake1.png", code: "Tiramisu" },
    { id: 2, src: "/cake2.png", code: "Tiramisu craquelin choux" },
    { id: 3, src: "/cake3.png", code: "Velvet" },
    { id: 4, src: "/cake4.png", code: "Berry mango sponge" },
    { id: 5, src: "/cake5.png", code: "Bento cake" },
    { id: 6, src: "/cake6.png", code: "Salted egg sponge" },
    { id: 7, src: "/cake7.png", code: "Lemon choux" },
    { id: 8, src: "/cake8.png", code: "Overmade" }
  ];

  return (
    <>
      <div>
        <div className="text-center text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 text-xl">
          <p>Menu</p>
        </div>
        <div className="md:grid md:grid-cols-4 md:justify-items-center md:m-3">
          {listCake.map((lcake) => {
            return (
              <div key={lcake.id} className="m-6 rounded-xl border-4 border-x-fuchsia-500 border-y-fuchsia-500 hover:md:scale-110 transition-all">
                <Image className="sm:w-[30dvw] sm:h-[35dvh] border-2 border-x-fuchsia-500 border-y-fuchsia-500"
                  src={lcake.src}
                  width={500}
                  height={2}
                  alt="Image"
                />
              <div className="text-center text-fuchsia-500">
                <label>{lcake.code}</label>
              </div>
          </div>
            );
          })}

        </div>
      </div>
    </>
  );
}

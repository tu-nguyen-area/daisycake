import Image from 'next/image';

export default function ListCake() {
  return (
    <>
      <div>
        <div className="text-center text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 text-xl">
          <p>Menu</p>
        </div>
        <div className="md:grid md:grid-cols-4 md:justify-items-center md:m-3">
          <div className="p-8">
            <Image className="md:w-[18vw] md:h-[30vh] rounded-xl border-4 border-x-fuchsia-500 border-y-fuchsia-500 hover:md:scale-110 transition-all"
              src="/cake1.png"
              width={500}
              height={2}
              alt="Image"
            />
            <div className="text-center text-fuchsia-500">
              <label>Tiramisu</label>
            </div>
          </div>
          <div className="p-8">
            <Image className="md:w-[18vw] md:h-[30vh] rounded-xl border-4 border-x-fuchsia-500 border-y-fuchsia-500 hover:md:scale-110 transition-all"
              src="/cake2.png"
              width={500}
              height={2}
              alt="Image"
            />
            <div className="text-center text-fuchsia-500">
              <label>Tiramisu Craquelin choux</label>
            </div>
          </div>
          <div className="p-8">
            <Image className="md:w-[18vw] md:h-[30vh] rounded-xl border-4 border-x-fuchsia-500 border-y-fuchsia-500 hover:md:scale-110 transition-all"
              src="/cake3.png"
              width={500}
              height={2}
              alt="Image"
            />
            <div className="text-center text-fuchsia-500">
              <label>Cake 003</label>
            </div>
          </div>
          <div className="p-8">
            <Image className="md:w-[18vw] md:h-[30vh] rounded-xl border-4 border-x-fuchsia-500 border-y-fuchsia-500 hover:md:scale-110 transition-all"
              src="/cake4.png"
              width={500}
              height={2}
              alt="Image"
            />
            <div className="text-center text-fuchsia-500">
              <label>Cake 004</label>
            </div>
          </div>
          <div className="p-8">
            <Image className="md:w-[18vw] md:h-[30vh] rounded-xl border-4 border-x-fuchsia-500 border-y-fuchsia-500 hover:md:scale-110 transition-all"
              src="/cake5.png"
              width={500}
              height={2}
              alt="Image"
            />
            <div className="text-center text-fuchsia-500">
              <label>Cake 005</label>
            </div>
          </div>
          <div className="p-8">
            <Image className="md:w-[18vw] md:h-[30vh] rounded-xl border-4 border-x-fuchsia-500 border-y-fuchsia-500 hover:md:scale-110 transition-all"
              src="/cake6.png"
              width={500}
              height={2}
              alt="Image"
            />
            <div className="text-center text-fuchsia-500">
              <label>Cake 006</label>
            </div>
          </div>
          <div className="p-8">
            <Image className="md:w-[18vw] md:h-[30vh] rounded-xl border-4 border-x-fuchsia-500 border-y-fuchsia-500 hover:md:scale-110 transition-all"
              src="/cake7.png"
              width={500}
              height={2}
              alt="Image"
            />
            <div className="text-center text-fuchsia-500">
              <label>Lemon choux</label>
            </div>
          </div>
          <div className="p-8">
            <Image className="md:w-[18vw] md:h-[30vh] rounded-xl border-4 border-x-fuchsia-500 border-y-fuchsia-500 hover:md:scale-110 transition-all"
              src="/cake8.png"
              width={500}
              height={2}
              alt="Image"
            />
            <div className="text-center text-fuchsia-500">
              <label>Cake 008</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

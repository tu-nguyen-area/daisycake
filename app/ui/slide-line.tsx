import { clImage } from '@/app/lib/placeholder-data';
import Image from 'next/image';

export default function SlideLine() {
  const products = [ ...clImage, ...clImage, ...clImage, ...clImage, ...clImage, ...clImage, ...clImage, ...clImage, ...clImage];

  return(
    <>

      {products.map((image) => {
        return (
        <Image className="m-3 rounded-xl w-16 sm:w-52 h-14 sm:h-48 border-2 sm:border-4 rounded-xl border-x-fuchsia-500 border-y-fuchsia-500"
          key={Math.random()}
          src={image.url}
          width={200}
          height={0}
          alt={`${image.name} image`}
        />
        );
      })}

    </>
  );
}

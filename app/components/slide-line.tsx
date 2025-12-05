import { clImage } from '@/app/lib/data';
import Image from 'next/image';

const products = [
  ...clImage,
  ...clImage,
  ...clImage,
  ...clImage,
  ...clImage,
  ...clImage,
  ...clImage,
  ...clImage,
  ...clImage
];

export default function SlideLine() {
  return(
    <>

    {products.map((image) => {
      return (
        <Image className="m-3 rounded-xl w-32 sm:w-52 h-24 sm:h-48 border-3
          sm:border-3 rounded-xl border-sky-500"
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

import { clImage } from '@/app/lib/placeholder-data';
import Image from 'next/image';

export default function SlideLine() {
  const products = [ ...clImage, ...clImage, ...clImage, ...clImage, ...clImage, ...clImage, ...clImage, ...clImage, ...clImage];

  return products.map((image, i) => {

  return(
    <>
      <Image className="m-3 rounded-xl w-52 h-48 border-4 rounded-xl border-x-fuchsia-500 border-y-fuchsia-500"
        src={image.url}
        width={200}
        height={0}
        alt={`${products.name} image`}
      />
    </>
  )})
}

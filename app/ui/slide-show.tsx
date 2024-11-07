'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function SlideShow() {
  const [url, setUrl] = useState('/bg1.png');

  function preImage() {
    setUrl('/bg1.png');
  }

  function nextImage() {
    setUrl('/bg2.png');
  }

  return (
    <>
    <div>
      <div className="hidden sm:flex justify-center pb-12">
        <div className="content-center">
          <button onClick={preImage} className="rounded-l-full bg-violet-500 text-xl text-white w-32 h-10">Previous</button>
        </div>
        <div className="">
          <div className="">
            <div className="">
              <Image key={url} className="rounded-xl animate-fadeIn h-[85vh] w-[75vw]"
                src={url}
                width={1200}
                height={500}
                alt="homecake"
                priority={false}
                placeholder="blur"
                blurDataURL={url}
                loading = 'lazy'
              />
            </div>
          </div>
        </div>
        <div className="content-center">
          <button onClick={nextImage} className="rounded-r-full bg-fuchsia-500 text-xl text-white w-32 h-10">Next</button>
        </div>
      </div>
    </div>
    </>
  );
}

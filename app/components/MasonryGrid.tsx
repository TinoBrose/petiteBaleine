import React from 'react';
import Masonry from 'react-masonry-css';
import Image, { StaticImageData } from 'next/image';

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1,
  500: 1,
};

const MasonryGrid = ({
  images,
  lightboxRef,
}: {
  images: { src_static: StaticImageData; src: string; description: string }[];
  lightboxRef: any;
}) => {
  return (
    <>
      <Masonry breakpointCols={breakpointColumnsObj} className='flex gap-4'>
        {images.map((image, index) => (
          <div
            key={index}
            className='group relative'
            onClick={() => {
              lightboxRef.current?.openGallery(index);
            }}
          >
            <Image
              key={index}
              src={image.src_static}
              alt={image.description}
              className='align-center mx-auto my-4 flex justify-center hover:opacity-90 '
              placeholder='blur'
              onClick={() => {
                lightboxRef.current?.openGallery(index);
              }}
            />
            <div className='absolute bottom-0 left-0 z-40 h-full w-full cursor-pointer bg-gradient-to-t from-main_100 opacity-0 group-hover:translate-y-0 group-hover:opacity-50'></div>
            <div className='stext-center absolute bottom-0 left-0 z-50 m-auto flex w-full translate-y-6 justify-center p-5 opacity-0 transition duration-150 ease-out hover:ease-in group-hover:translate-y-0 group-hover:opacity-100'>
              <p className='text-sm text-white'>{image.description}</p>
            </div>
          </div>
        ))}
      </Masonry>
    </>
  );
};

export default MasonryGrid;

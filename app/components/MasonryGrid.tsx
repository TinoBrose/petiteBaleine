import React from "react";
import Masonry from "react-masonry-css";
import Image, { StaticImageData } from "next/image";

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
      <Masonry breakpointCols={breakpointColumnsObj} className="flex gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group"
            onClick={() => {
              lightboxRef.current?.openGallery(index);
            }}
          >
            <Image
              key={index}
              src={image.src_static}
              alt={image.description}
              className="flex justify-center align-center my-4 mx-auto hover:opacity-90 "
              placeholder="blur"
              onClick={() => {
                lightboxRef.current?.openGallery(index);
              }}
            />
            <div className="absolute z-40 bg-gradient-to-t from-main_100 w-full h-full left-0 bottom-0 opacity-0 group-hover:translate-y-0 group-hover:opacity-50 cursor-pointer"></div>
            <div className="absolute z-50 left-0 bottom-0 p-5 m-auto flex justify-center w-full stext-center translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-150 ease-out hover:ease-in">
              <p className="text-white text-sm">{image.description}</p>
            </div>
          </div>
        ))}
      </Masonry>
    </>
  );
};

export default MasonryGrid;

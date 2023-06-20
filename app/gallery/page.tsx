"use client";
import React, { useRef } from "react";
import MasonryGrid from "../components/MasonryGrid";
import { LightGallery } from "lightgallery/lightgallery";
import { photosPetiteBaleine } from "../../public/photos";
import Lightbox from "../components/Lightbox";

const Gallery = () => {
  const lightboxRef = useRef<LightGallery | null>(null);

  return (
    <div className="container mx-auto" suppressHydrationWarning={true}>
      <MasonryGrid images={photosPetiteBaleine} lightboxRef={lightboxRef} />
      <Lightbox images={photosPetiteBaleine} lightboxRef={lightboxRef} />
    </div>
  );
};

export default Gallery;

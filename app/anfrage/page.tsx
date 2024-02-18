'use client';

import React from 'react';
import Script from 'next/script';

// import Contact from '../components/Contact';
import dynamic from 'next/dynamic';
const Contact: any = dynamic(() => import('../components/Contact'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

export default function Anfrage() {
  return (
    <main className='container mx-auto'>
      <div className='mx-auto mb-2 h-full w-full max-w-[900px] p-2 sm:p-4 md:mt-[48px]'>
        <h1 className='text-2xl '>Wir freuen uns auf Ihre Anfrage</h1>
        <div className='flex flex-col gap-4 lg:flex-row'>
          <Contact />
          <iframe
            name='webplanner23221'
            width='100%'
            height='450'
            src='https://www.webplanner.de/tools/?6c35363535343070363065343069'
          ></iframe>
          <Script
            type='text/javascript'
            src='https://www.webplanner.de/tools/js/10898-23221.js'
          ></Script>
        </div>
      </div>
    </main>
  );
}

{
  /* <h1 className='text-2xl mt-4'>Kontakt</h1>

      <div className='my-4 flex flex-col items-center gap-1  text-main_80 md:gap-2'>
        <h3>Judy & Matthias Brose</h3>
        <h3>Mail: anfrage.petite-baleine@gmail.com</h3>
        <h3>Telefon FR: +33 (0) 638175281</h3>
      </div> */
}

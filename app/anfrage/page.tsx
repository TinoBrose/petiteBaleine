'use client';

import React from 'react';
import Script from 'next/script';

import dynamic from 'next/dynamic';
const Contact: any = dynamic(() => import('../components/Contact'), {
  loading: () => <p>Lädt...</p>,
  ssr: false,
});

export default function Anfrage() {
  return (
    <main className='container mx-auto'>
      <div className='mx-auto mb-2 h-full w-full max-w-[1400px] p-2 sm:p-4 md:mt-[48px]'>
        <div className='mb-2'>
          <h1 className='text-2xl '>Wir freuen uns auf Ihre Anfrage</h1>
          <p>
            Schicken Sie uns gerne über das untenstehende Formular eine
            unverbindliche Anfrage. Wir melden uns zeitnah bei Ihnen.
          </p>
        </div>
        <div className='flex flex-col gap-4 lg:flex-row'>
          <div className='flex-1 p-2 lg:order-2'>
            <iframe
              className='h-[700px] w-full lg:h-[450px]'
              name='webplanner23221'
              src='https://www.webplanner.de/tools/?6c35363535343070363065343069'
              title='webplanner23221'
            ></iframe>
          </div>
          <div className='flex-1  p-2 lg:order-1 lg:p-0'>
            <Contact />
          </div>

          {/* <iframe
            className='h-[1000px] w-full flex-1'
            name='webplanner23221'
            height='450'
            src='https://www.webplanner.de/tools/?6c35363535343070363065343069'
          ></iframe> */}

          <Script
            type='text/javascript'
            src='https://www.webplanner.de/tools/js/10898-23221.js'
          ></Script>
        </div>
      </div>
    </main>
  );
}

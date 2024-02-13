'use client';

import React from 'react';
import Contact from '../components/Contact';

export default function Anfrage() {
  return (
    <main className='flex  flex-col items-center justify-between p-24'>
      <h1 className='text-2xl '>Wir freuen uns auf Ihre Anfrage</h1>

      <Contact />
      {/* <h1 className='text-2xl mt-4'>Kontakt</h1>

      <div className='my-4 flex flex-col items-center gap-1  text-main_80 md:gap-2'>
        <h3>Judy & Matthias Brose</h3>
        <h3>Mail: anfrage.petite-baleine@gmail.com</h3>
        <h3>Telefon FR: +33 (0) 638175281</h3>
      </div> */}
    </main>
  );
}

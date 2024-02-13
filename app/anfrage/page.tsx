'use client';

import React from 'react';
import ContactForm from '../components/ContactForm';

export default function Anfrage() {
  return (
    <main className='flex  flex-col items-center justify-between p-24'>
      <h1 className='text-2xl '>Kontakt</h1>
      <div className='my-4 flex flex-col items-center gap-1  text-main_80 md:gap-2'>
        <h3>Judy & Matthias Brose</h3>
        <h3>Mail: info@petite-baleine.de</h3>
        {/* <h3>Telefon DE: +49 (0) 1778631821</h3> */}
        <h3>Telefon FR: +33 (0) 638175281</h3>
      </div>

      <ContactForm />
    </main>
  );
}

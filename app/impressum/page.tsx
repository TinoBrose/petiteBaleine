import Link from 'next/link';

export default function Impressum() {
  return (
    <main className='container mx-auto'>
      <div className='mx-auto mb-2 h-full w-full max-w-[900px] gap-4 p-2 sm:p-4 md:mt-[48px]'>
        <h1 className='text-2xl font-bold'>Impressum</h1>
        <div className='my-4'>
          Verantwortlich für den Inhalt dieser Website gemäß § 5 TMG:
        </div>

        <div className='my-4'>
          <h1 className='font-bold'>Judy & Matthias Brose</h1>
          <h1 className='font-bold'>8 Rue de Brenilour</h1>
          <h1 className='font-bold'>29780 Plouhinec</h1>
          <h1 className='font-bold'>Frankreich</h1>
        </div>

        <div className='my-4'>
          <h1>Postadresse:</h1>

          <h1 className='font-bold'>Judy & Matthias Brose</h1>
          <h1 className='font-bold'>Anne-Frank-Straße 59a</h1>
          <h1 className='font-bold'>22587 Hamburg</h1>
        </div>
      </div>
    </main>
  );
}

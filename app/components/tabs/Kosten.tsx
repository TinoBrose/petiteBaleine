import React from 'react';

const Kosten = () => {
  return (
    <div className='flex flex-col gap-[36px] px-2 md:px-0'>
      <div>
        <p>Nächte je nach Saison 60-100€</p>
        <p>Kaution (per Paypal für Freunde oder Überweisung) 200,00 €</p>
        <p>im Voraus zu zahlen 30 %</p>
        <p>Restzahlung 14 Tage vor Reiseantritt</p>
        <p> Zzgl. Tourismusgebühr, wird vor Ort berechnet.</p>
        <p>Strom wird nach Verbrauch berechnet.</p>
      </div>

      <div className='border-t-[1px] border-accent'></div>

      <h1 className='text-xl'>Kostenbeispiel</h1>

      <div className='relative overflow-x-auto sm:rounded-lg'>
        <table className='text-gray-500 dark:text-gray-400 w-full text-left text-sm rtl:text-right'>
          <tbody>
            <tr className='dark:bg-gray-800 dark:border-gray-700 bg-white'>
              <th
                scope='row'
                className='text-gray-900 whitespace-nowrap px-6 py-4 font-medium dark:text-white'
              >
                7 Nächte à 60€
              </th>

              <td className='px-6 py-4'>420,00 €</td>
            </tr>
            <tr className='dark:bg-gray-800 dark:border-gray-700 bg-white'>
              <th
                scope='row'
                className='text-gray-900 whitespace-nowrap px-6 py-4 font-medium dark:text-white'
              >
                zzgl. Bettwäsche f. 2 Pers. à 15€
              </th>
              <td className='px-6 py-4'>30,00 €</td>
            </tr>
            <tr className='dark:bg-gray-800 dark:border-gray-700 border-b bg-white'>
              <th
                scope='row'
                className='text-gray-900 whitespace-nowrap px-6 py-4 font-medium dark:text-white'
              >
                Reinigung
              </th>
              <td className='px-6 py-4'>50,00 €</td>
            </tr>
            <tr className='dark:bg-gray-800 dark:border-gray-700 bg-white'>
              <th
                scope='row'
                className='text-gray-900 whitespace-nowrap px-6 py-4 font-bold font-medium dark:text-white'
              >
                Summe
              </th>
              <td className='px-6 py-4'>500,00 €</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Kosten;

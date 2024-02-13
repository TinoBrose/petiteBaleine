'use client';
import Link from 'next/link';
import Image from 'next/image';
import laPetiteBaleine from '../../public/baleine.png';

export default function Footer() {
  return (
    <footer>
      <div className='flex items-center py-2 mt-5 bg-main_100 text-white'>
        <div className='flex w-full flex-col items-center gap-6 py-5 text-center md:flex-row md:items-start md:justify-around md:gap-2 md:text-start'>
          {/* LINKS */}
          <Link
            href='/'
            className='font-logo text-2xl font-bold font-normal md:text-3xl'
          >
            <div className='flex h-full flex-col items-center justify-center gap-1'>
              <Image
                src={laPetiteBaleine}
                width={40}
                height={40}
                alt='petite baleine'
              />
              petite baleine
            </div>
          </Link>

          <div>
            <div className=''>
              <ul className='cursor-pointer flex-row'>
                <Link href='/' onClick={() => {}}>
                  <li className='py-1 text-sm hover:text-main_70'>
                    Apartment
                  </li>
                </Link>
                <Link href='/gallery' onClick={() => {}}>
                  <li className='py-1 text-sm hover:text-main_70'>Gallerie</li>
                </Link>
                <Link href='/anfrage' onClick={() => {}}>
                  <li className='py-1 text-sm hover:text-main_70'>Anfrage</li>
                </Link>
              </ul>
            </div>
            {/* KONTAKT */}
          </div>
          <div>
            <div>
              <ul className='flex-row'>
                <li className='py-1 text-sm'>Judy & Matthias Brose</li>
                <li className='py-1 text-sm'>M: info@petite-baleine.de</li>
                <li className='py-1 text-sm'>T: 011111</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='h-100 align-center flex flex-row flex-wrap justify-center gap-5 border-t-[1px] border-white bg-main_100 py-2 text-white'>
        <Link href='/' onClick={() => {}}>
          <div className='hover:text-main_60 py-1 text-sm'>petite baleine</div>
        </Link>
        <div className='hover:text-main_60 py-1 text-sm'>|</div>
        <Link href='/' onClick={() => {}}>
          <div className='hover:text-main_60 py-1 text-sm'>Impressum</div>
        </Link>
        <div className='hover:text-main_60 py-1 text-sm'>|</div>

        <Link href='/' onClick={() => {}}>
          <div className='hover:text-main_60 py-1 text-sm'>Datenschutz</div>
        </Link>
      </div>
    </footer>
  );
}

'use client';
import Link from 'next/link';
import Image from 'next/image';
import laPetiteBaleine from '../../public/baleine.png';
import { MdOutlineEmail } from 'react-icons/md';

export default function Footer() {
  return (
    <footer>
      <div className='mt-5 flex items-center bg-main_100 py-2 text-white'>
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

          <div className='flex items-center'>
            <div>
              <ul className='cursor-pointer flex-row'>
                <Link href='/' onClick={() => {}}>
                  <li className='py-1 text-sm hover:text-main_70'>Apartment</li>
                </Link>
                <Link href='/gallery' onClick={() => {}}>
                  <li className='py-1 text-sm hover:text-main_70'>Galerie</li>
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
                <li className='py-1 text-sm'>
                  <div className='flex flex-row items-center gap-2'>
                    <div>
                      <MdOutlineEmail />
                    </div>
                    <div>info.petitebaleine@gmail.com</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='h-100 align-center flex flex-row flex-wrap justify-center gap-5 border-t-[1px] border-white bg-main_100 py-2 text-white'>
        <Link href='/'>
          <div className='hover:text-main_60 py-1 text-sm'>petite baleine</div>
        </Link>
        <div className='hover:text-main_60 py-1 text-sm'>|</div>
        <Link href='/impressum'>
          <div className='hover:text-main_60 py-1 text-sm'>Impressum</div>
        </Link>
        <div className='hover:text-main_60 py-1 text-sm'>|</div>

        <Link href='/datenschutz'>
          <div className='hover:text-main_60 py-1 text-sm'>Datenschutz</div>
        </Link>
      </div>
    </footer>
  );
}

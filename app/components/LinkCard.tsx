'use client';
import Link from 'next/link';
export default function LinkCard({
  title,
  href,
}: {
  title: string;
  href: string;
}) {
  return (
    <Link href='/petite-baleine'>
      <div>
        <img
          src={href}
          className='h-auto w-full object-contain duration-300 ease-in-out hover:opacity-30'
        />
        <div className='text-center'>
          <h1 className='m-auto mt-2 align-middle text-xl font-bold'>
            {title}
          </h1>
        </div>
      </div>
    </Link>
  );
}
